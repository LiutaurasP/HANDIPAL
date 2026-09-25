"use client"

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { ArrowLeft, Eye, EyeOff, Hammer, LockKeyhole, Mail, MapPin, Phone, UserRound } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [roles, setRoles] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  function toggleRole(role: string) {
    setRoles((current) => current.includes(role) ? current.filter((item) => item !== role) : [...current, role])
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 lg:flex-row lg:items-center lg:gap-20 lg:px-12 lg:py-10">
        <section className="flex flex-1 flex-col justify-between gap-10 py-2 lg:min-h-[720px]">
          <Link href="/" className="group inline-flex w-fit items-center gap-3" aria-label="Back to Handipal home">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:-rotate-6">
              <Hammer className="size-5" aria-hidden="true" />
            </span>
            <span className="text-xl font-bold tracking-tight">Handipal</span>
          </Link>

          <div className="max-w-xl">
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Join the neighborhood
            </p>
            <h1 className="max-w-lg text-balance text-5xl font-bold tracking-[-0.05em] text-foreground sm:text-6xl">
              Bring your skills. Find a hand.
            </h1>
            <p className="mt-6 max-w-md text-pretty text-lg leading-8 text-muted-foreground">
              Create one profile for both sides of the marketplace. Help someone nearby, find help for your own list, or do both.
            </p>
          </div>

          <div className="flex max-w-lg items-center gap-4 border-t border-border pt-5 text-sm text-muted-foreground">
            <div className="flex -space-x-2" aria-hidden="true">
              {['JS', 'MR', 'AK'].map((initials, index) => (
                <span key={initials} className={`flex size-9 items-center justify-center rounded-full border-2 border-background text-xs font-semibold ${index === 0 ? 'bg-accent text-accent-foreground' : index === 1 ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'}`}>
                  {initials}
                </span>
              ))}
            </div>
            <p>One account. More ways to get things done.</p>
          </div>
        </section>

        <section className="flex w-full flex-1 items-center justify-center py-8 lg:max-w-xl lg:py-0">
          <div className="w-full rounded-3xl border border-border bg-card p-7 shadow-[0_20px_60px_-28px_oklch(0.22_0.015_60_/_0.35)] sm:p-9">
            <div className="mb-7">
              <p className="mb-2 text-sm font-medium text-primary">Let&apos;s get started</p>
              <h2 className="text-3xl font-bold tracking-tight text-card-foreground">Create your account</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Tell us a little about yourself.</p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-card-foreground">First name</label>
                  <div className="relative"><UserRound className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" /><input id="first-name" name="firstName" type="text" autoComplete="given-name" placeholder="Alex" required className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20" /></div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-card-foreground">Last name</label>
                  <input id="last-name" name="lastName" type="text" autoComplete="family-name" placeholder="Morgan" required className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2"><label htmlFor="birthdate" className="text-sm font-medium text-card-foreground">Birthdate</label><input id="birthdate" name="birthdate" type="date" autoComplete="bday" required className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-3 focus:ring-ring/20" /></div>
                <div className="flex flex-col gap-2"><label htmlFor="phone" className="text-sm font-medium text-card-foreground">Phone number</label><div className="relative"><Phone className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" /><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" required className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20" /></div></div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2"><label htmlFor="country" className="text-sm font-medium text-card-foreground">Country</label><div className="relative"><MapPin className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" /><input id="country" name="country" type="text" autoComplete="country-name" placeholder="Canada" required className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20" /></div></div>
                <div className="flex flex-col gap-2"><label htmlFor="city" className="text-sm font-medium text-card-foreground">City</label><input id="city" name="city" type="text" autoComplete="address-level2" placeholder="Toronto" required className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20" /></div>
              </div>

              <div className="flex flex-col gap-3">
                <div><p className="text-sm font-medium text-card-foreground">How will you use Handipal?</p><p className="mt-1 text-xs text-muted-foreground">Choose one or both — you can change this later.</p></div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[['handiworker', 'Handiworker', 'I want to offer my skills.'], ['handilooker', 'Handilooker', 'I need a hand with a job.']].map(([value, label, description]) => {
                    const selected = roles.includes(value)
                    return <label key={value} className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-3 transition ${selected ? 'border-primary bg-accent' : 'border-border bg-background hover:border-primary/50'}`}><input type="checkbox" name="roles" value={value} checked={selected} onChange={() => toggleRole(value)} className="mt-0.5 size-4 accent-primary" /><span><span className="block text-sm font-semibold text-card-foreground">{label}</span><span className="mt-0.5 block text-xs leading-5 text-muted-foreground">{description}</span></span></label>
                  })}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2"><label htmlFor="password" className="text-sm font-medium text-card-foreground">Password</label><div className="relative"><LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" /><input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" placeholder="Create a password" required className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-11 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20" /><button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground" aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}</button></div></div>
                <div className="flex flex-col gap-2"><label htmlFor="confirm-password" className="text-sm font-medium text-card-foreground">Confirm password</label><div className="relative"><input id="confirm-password" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} autoComplete="new-password" placeholder="Repeat your password" required className="h-11 w-full rounded-xl border border-input bg-background px-3 pr-11 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20" /><button type="button" onClick={() => setShowConfirmPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground" aria-label={showConfirmPassword ? 'Hide password confirmation' : 'Show password confirmation'}>{showConfirmPassword ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}</button></div></div>
              </div>

              <Button type="submit" size="lg" className="mt-1 h-11 w-full rounded-xl text-sm font-semibold">Create account</Button>
              {isSubmitted && <p className="text-center text-sm text-muted-foreground" role="status">Your profile is ready to connect. Authentication will be wired up next.</p>}
            </form>

            <p className="mt-7 text-center text-sm text-muted-foreground">Already have an account? <Link href="/login" className="font-semibold text-primary underline-offset-4 hover:underline">Log in</Link></p>
          </div>
        </section>
      </div>

      <Link href="/" className="fixed left-6 top-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground lg:hidden"><ArrowLeft className="size-4" aria-hidden="true" />Back</Link>
    </main>
  )
}
