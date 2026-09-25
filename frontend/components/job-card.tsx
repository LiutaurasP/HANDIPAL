import { Clock, MapPin, Users } from "lucide-react"
import { Avatar } from "@/components/avatar"
import { Button } from "@/components/ui/button"
import type { Job } from "@/lib/data"

export function JobCard({ job, ctaLabel = "Offer help" }: { job: Job; ctaLabel?: string }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
            {job.category}
          </span>
          {job.urgent && (
            <span className="inline-flex items-center rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
              Urgent
            </span>
          )}
        </div>
        <div className="text-right">
          <div className="text-lg font-bold leading-none">{job.budget}</div>
          <div className="mt-1 text-xs text-muted-foreground">
            {job.budgetType === "hourly" ? "per hour" : "fixed price"}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-balance text-base font-semibold leading-snug">{job.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-pretty text-sm text-muted-foreground">
          {job.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3.5" />
          {job.location} · {job.distance}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5" />
          {job.postedAt}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Users className="size-3.5" />
          {job.applicants} interested
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
        <div className="flex items-center gap-2">
          <Avatar name={job.poster} size={28} />
          <span className="text-sm">
            <span className="text-muted-foreground">Posted by </span>
            <span className="font-medium">{job.poster}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Message
          </Button>
          <Button size="sm">{ctaLabel}</Button>
        </div>
      </div>
    </article>
  )
}
