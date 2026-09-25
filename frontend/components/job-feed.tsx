"use client"

import { useMemo, useState } from "react"
import { Plus, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JobCard } from "@/components/job-card"
import { CATEGORIES, jobs, type JobCategory } from "@/lib/data"
import { cn } from "@/lib/utils"

export function JobFeed() {
  const [active, setActive] = useState<JobCategory>("All jobs")

  const filtered = useMemo(
    () => (active === "All jobs" ? jobs : jobs.filter((j) => j.category === active)),
    [active],
  )

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-balance">Odd jobs near you</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {filtered.length} open {filtered.length === 1 ? "request" : "requests"} in your area
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="size-4" />
          Post a job
        </Button>
      </div>

      {/* Category filters */}
      <div className="mt-5 flex items-center gap-2">
        <div className="flex flex-1 flex-nowrap gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                active === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <button
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Filters"
        >
          <SlidersHorizontal className="size-4" />
          <span className="hidden md:inline">Filters</span>
        </button>
      </div>

      {/* Feed */}
      <div className="mt-5 flex flex-col gap-4">
        {filtered.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
