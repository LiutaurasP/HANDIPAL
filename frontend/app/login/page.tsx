"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { ArrowLeft, Eye, EyeOff, Hammer, LockKeyhole, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 lg:flex-row lg:items-center lg:gap-24 lg:px-12 lg:py-10">
        <section className="flex flex-1 flex-col justify-between gap-12 py-2 lg:min-h-[680px]">
          <Link href="/" className="group inline-flex w-fit items-center gap-3" aria-label="Back to Handipal home">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:-rotate-6">
              <Hammer className="size-5" aria-hidden="true" />
            </span>
            <span className="text-xl font-bold tracking-tight">Handipal</span>
          </Link>

          <div className="max-w-xl">
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Your extra pair of hands
            </p>
            <h1 className="max-w-lg text-balance text-5xl font-bold tracking-[-0.05em] text-foreground sm:text-6xl">
              Get more done, together.
            </h1>
            <p className="mt-6 max-w-md text-pretty text-lg leading-8 text-muted-foreground">
              Find reliable local help for the jobs on your list, or earn money by lending a hand in your neighborhood.
            </p>
          </div>

          <div className="flex max-w-lg items-center gap-4 border-t border-border pt-5 text-sm text-muted-foreground">
            <div className="flex -space-x-2" aria-hidden="true">
              {['JS', 'MR', 'AK'].map((initials, index) => (
                <span
                  key={initials}
                  className={`flex size-9 items-center justify-center rounded-full border-2 border-background text-xs font-semibold ${index === 0 ? 'bg-accent text-accent-foreground' : index === 1 ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'}`}
                >
                  {initials}
                </span>
              ))}
            </div>
            <p>Join a growing community of people getting things done.</p>
          </div>
        </section>

        <section className="flex w-full flex-1 items-center justify-center py-8 lg:max-w-md lg:py-0">
          <div className="w-full rounded-3xl border border-border bg-card p-7 shadow-[0_20px_60px_-28px_oklch(0.22_0.015_60_/_0.35)] sm:p-9">
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-primary">Welcome back</p>
              <h2 className="text-3xl font-bold tracking-tight text-card-foreground">Log in to Handipal</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Pick up where you left off.</p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-card-foreground">Email address</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-card-foreground">Password</label>
                  <button type="button" className="text-xs font-medium text-primary underline-offset-4 hover:underline">Forgot password?</button>
                </div>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                  <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" required className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-11 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20" />
                  <button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                    {showPassword ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
                  </button>
                </div>
              </div>

              <Button type="submit" size="lg" className="mt-1 h-11 w-full rounded-xl text-sm font-semibold">
                Log in
              </Button>

            </form>

            <div className="my-7 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              or
              <span className="h-px flex-1 bg-border" />
            </div>

            <p className="text-center text-sm text-muted-foreground">
              New to Handipal?{' '}
              <Link href="/signup" className="font-semibold text-primary underline-offset-4 hover:underline">Create an account</Link>
            </p>
          </div>
        </section>
      </div>

      <Link href="/" className="fixed left-6 top-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground lg:hidden">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back
      </Link>
    </main>
  )
}
