"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { BriefcaseBusiness, HandHelping, Search as SearchIcon, SlidersHorizontal } from "lucide-react"
import { JobCard } from "@/components/job-card"
import { TopBar } from "@/components/top-bar"
import { jobs, type Job } from "@/lib/data"

const expandedJobs: Job[] = Array.from({ length: 20 }, (_, index) => {
  const source = jobs[index % jobs.length]
  return {
    ...source,
    id: `${source.id}-result-${index + 1}`,
    postedAt: index < jobs.length ? source.postedAt : `${index + 1} hr ago`,
  }
})

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [activeRole, setActiveRole] = useState<"handilooker" | "handipal">("handilooker")
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "")

  const matchingJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return expandedJobs

    const matches = expandedJobs.filter((job) =>
      [job.title, job.category, job.description, job.location].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    )

    const source = matches.length > 0 ? matches : expandedJobs
    return Array.from({ length: 20 }, (_, index) => ({
      ...source[index % source.length],
      id: `${source[index % source.length].id}-page-result-${index + 1}`,
    }))
  }, [query])

  const roleCopy = activeRole === "handilooker"
    ? {
        eyebrow: "Handilooker results",
        title: "Find a helping hand",
        description: "Browse people looking for help with jobs related to your search.",
        button: "Offer help",
      }
    : {
        eyebrow: "Handipal results",
        title: "Find someone who can help",
        description: "Explore trusted local helpers offering services related to your search.",
        button: "View profile",
      }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-6 lg:py-10">
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{roleCopy.eyebrow}</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{roleCopy.title}</h1>
              <p className="mt-3 text-muted-foreground">{roleCopy.description}</p>
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-input bg-background px-3 py-2.5 text-sm">
                <SearchIcon className="size-4 text-muted-foreground" />
                <input
                  aria-label="Refine search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                  placeholder="Refine your search"
                />
              </div>
            </div>
            <div className="flex rounded-xl bg-secondary p-1" role="tablist" aria-label="Search result type">
              <button
                type="button"
                role="tab"
                aria-selected={activeRole === "handilooker"}
                onClick={() => setActiveRole("handilooker")}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activeRole === "handilooker" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                <HandHelping className="size-4" />
                Handilooker
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeRole === "handipal"}
                onClick={() => setActiveRole("handipal")}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activeRole === "handipal" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                <BriefcaseBusiness className="size-4" />
                Handipal
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">{query ? `Results for “${query}”` : "All nearby jobs"}</h2>
              <p className="mt-1 text-sm text-muted-foreground">Showing {Math.min(matchingJobs.length, 20)} jobs · Page 1 of 1</p>
            </div>
            <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-secondary">
              <SlidersHorizontal className="size-4" />
              Filters
            </button>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {matchingJobs.slice(0, 20).map((job) => <JobCard key={job.id} job={job} ctaLabel={roleCopy.button} />)}
          </div>
        </section>
      </main>
    </div>
  )
}
