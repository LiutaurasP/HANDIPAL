"use client"

import { useState, type FormEvent, type KeyboardEvent } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Hammer, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TopBar() {
  const router = useRouter()
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoginOpen(false)
    router.push('/dashboard')
  }

  function handleSearch(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.currentTarget.value.trim()) {
      router.push(`/search?q=${encodeURIComponent(event.currentTarget.value.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6">
        {/* Logo (placeholder) */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Handipal home">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Hammer className="size-5" />
          </span>
          <span className="hidden text-lg font-semibold tracking-tight sm:inline">
            Handipal
          </span>
        </Link>

        {/* Search */}
        <div className="mx-auto flex w-full max-w-xl items-center">
          <label className="relative w-full">
            <span className="sr-only">Search for odd jobs</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search jobs, e.g. 'help me move a couch'"
              onKeyDown={handleSearch}
              aria-label="Search jobs"
              className="h-10 w-full rounded-full border border-input bg-card pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
            />
          </label>
        </div>

        {/* Auth */}
        <div className="relative flex shrink-0 items-center gap-2">
          <Button
            variant="ghost"
            className="hidden sm:inline-flex"
            aria-expanded={isLoginOpen}
            aria-controls="login-dropdown"
            onClick={() => setIsLoginOpen((open) => !open)}
          >
            Log in
          </Button>
          <Button onClick={() => router.push('/signup')}>Sign up</Button>

          {isLoginOpen && (
            <div
              id="login-dropdown"
              role="dialog"
              aria-label="Log in"
              className="absolute right-0 top-12 z-30 w-80 rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-xl"
            >
              <div className="mb-4">
                <h2 className="text-base font-semibold">Welcome back</h2>
                <p className="mt-1 text-sm text-muted-foreground">Log in to manage your jobs and messages.</p>
              </div>
              <form className="flex flex-col gap-3" onSubmit={handleLogin}>
                <label className="flex flex-col gap-1.5 text-sm font-medium" htmlFor="quick-login-email">
                  Email
                  <input
                    id="quick-login-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="h-10 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium" htmlFor="quick-login-password">
                  Password
                  <input
                    id="quick-login-password"
                    name="password"
                    type="password"
                    placeholder="Your password"
                    autoComplete="current-password"
                    className="h-10 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
                  />
                </label>
                <Button type="submit" className="mt-1 w-full">Log in</Button>
              </form>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                New to Handipal?{" "}
                <Link href="/signup" className="font-semibold text-primary underline-offset-4 hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
