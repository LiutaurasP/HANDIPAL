"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { BriefcaseBusiness, CheckCircle2, HandHelping, MapPin, MessageCircle, Search, Sparkles, Users } from "lucide-react"

import { Avatar } from "@/components/avatar"
import { TopBar } from "@/components/top-bar"
import { Button } from "@/components/ui/button"
import { chats, jobs } from "@/lib/data"

type Role = "handilooker" | "handipal"

const serviceOffers = [
  { name: "Marcus Reid", title: "Reliable handyman for repairs and installs", skills: "Handyman · Furniture assembly", location: "Ridgewood, Queens", rate: "$35/hr", rating: "4.9" },
  { name: "Sofia Marín", title: "Garden care and outdoor cleanups", skills: "Yard work · Plant care", location: "Greenpoint, Brooklyn", rate: "$28/hr", rating: "4.8" },
  { name: "Dwight Osei", title: "Furniture assembly without the headache", skills: "Assembly · Moving", location: "Astoria, Queens", rate: "$30/hr", rating: "5.0" },
  { name: "Priya Nair", title: "Friendly, dependable pet care", skills: "Dog walking · Pet sitting", location: "Park Slope, Brooklyn", rate: "$22/hr", rating: "4.9" },
]

const serviceRequests = [
  { title: "Help moving a 2-bedroom apartment", category: "Moving", poster: "Elena Petrova", location: "Bushwick, Brooklyn", budget: "$140", posted: "12 min ago" },
  { title: "Fix a leaning backyard fence panel", category: "Handyman", poster: "Marcus Reid", location: "Ridgewood, Queens", budget: "$90", posted: "2 hr ago" },
  { title: "Deep clean before apartment inspection", category: "Cleaning", poster: "Hannah Kim", location: "Long Island City", budget: "$25/hr", posted: "3 hr ago" },
  { title: "Pick up and deliver a dresser across town", category: "Delivery", poster: "Chris Alvarez", location: "Williamsburg, Brooklyn", budget: "$55", posted: "6 hr ago" },
]

function ChatRail() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-border bg-sidebar lg:block">
      <div className="flex h-full flex-col">
        <div className="border-b border-border px-5 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Your space</p>
              <h2 className="mt-1 text-lg font-semibold">Messages</h2>
            </div>
            <span className="rounded-full bg-primary/15 px-2 py-1 text-xs font-semibold text-primary">3 new</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-3">
          {chats.slice(0, 5).map((chat) => (
            <button key={chat.id} className="flex items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-accent">
              <div className="relative"><Avatar name={chat.name} size={40} />{chat.online && <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-sidebar bg-primary" />}</div>
              <div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-2"><p className="truncate text-sm font-semibold">{chat.name}</p><span className="text-[11px] text-muted-foreground">{chat.time}</span></div><p className="truncate text-xs text-muted-foreground">{chat.lastMessage}</p></div>
              {chat.unread > 0 && <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{chat.unread}</span>}
            </button>
          ))}
        </div>
        <div className="mt-auto border-t border-border p-5"><p className="text-xs leading-5 text-muted-foreground">Keep conversations in Handipal so everyone stays on the same page.</p></div>
      </div>
    </aside>
  )
}

function ProviderCard({ provider }: { provider: (typeof serviceOffers)[number] }) {
  return <article className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg hover:shadow-foreground/5 sm:flex-row sm:items-center">
    <Avatar name={provider.name} size={56} className="self-start" />
    <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold">{provider.name}</h3><span className="inline-flex items-center gap-1 text-xs font-medium text-primary"><CheckCircle2 className="size-3.5" /> Verified</span></div><p className="mt-1 text-base font-medium text-foreground">{provider.title}</p><p className="mt-1 text-sm text-muted-foreground">{provider.skills}</p><div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground"><span className="flex items-center gap-1"><MapPin className="size-3.5" />{provider.location}</span><span>★ {provider.rating}</span></div></div>
    <div className="flex items-center justify-between gap-4 border-t border-border pt-4 sm:block sm:border-t-0 sm:pt-0 sm:text-right"><p className="font-semibold">{provider.rate}</p><Button size="sm" className="mt-2">Message</Button></div>
  </article>
}

function RequestCard({ request }: { request: (typeof serviceRequests)[number] }) {
  return <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg hover:shadow-foreground/5 sm:flex-row sm:items-center"><div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground"><BriefcaseBusiness className="size-5" /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{request.category}</span><span className="text-xs text-muted-foreground">{request.posted}</span></div><h3 className="mt-2 font-semibold">{request.title}</h3><p className="mt-1 text-sm text-muted-foreground">{request.poster} · {request.location}</p></div><div className="flex items-center justify-between gap-4 border-t border-border pt-4 sm:block sm:border-t-0 sm:pt-0 sm:text-right"><p className="font-semibold">{request.budget}</p><Button size="sm" variant="outline" className="mt-2">View request</Button></div></article>
}

export default function DashboardPage() {
  const [role, setRole] = useState<Role>("handilooker")
  const isHandilooker = role === "handilooker"
  const heading = isHandilooker ? "Find the right hands for your list" : "Find jobs that fit your skills"
  const description = isHandilooker ? "People nearby are offering help in the areas you have been searching for." : "New requests from people looking for the kind of help you offer."
  const count = useMemo(() => (isHandilooker ? serviceOffers.length : serviceRequests.length), [isHandilooker])

  return <main className="min-h-screen bg-background"><TopBar /><div className="flex min-h-[calc(100vh-4rem)]"><ChatRail /><section className="min-w-0 flex-1"><div className="mx-auto max-w-5xl px-5 py-8 md:px-8 lg:py-10"><div className="flex flex-col gap-6 border-b border-border pb-7 md:flex-row md:items-end md:justify-between"><div><p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary"><Sparkles className="size-4" /> Good morning, Alex</p><h1 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h1><p className="mt-3 max-w-xl text-pretty leading-6 text-muted-foreground">{description}</p></div><div className="flex flex-col gap-2 sm:items-end"><span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Switch your view</span><div className="flex items-center gap-1 rounded-xl border border-border bg-card p-1" role="tablist" aria-label="Account type"><button role="tab" aria-selected={isHandilooker} aria-controls="handilooker-panel" onClick={() => setRole("handilooker")} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${isHandilooker ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}><HandHelping className="size-4" />Handilooker</button><button role="tab" aria-selected={!isHandilooker} aria-controls="handipal-panel" onClick={() => setRole("handipal")} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${!isHandilooker ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}><BriefcaseBusiness className="size-4" />Handipal</button></div></div></div><div className="mt-7 flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-2 text-sm text-muted-foreground"><Users className="size-4" /><span>{count} {isHandilooker ? "people offering help" : "requests matching your profile"}</span></div><Button variant="outline" size="sm"><Search className="size-4" /> Refine matches</Button></div><div id={isHandilooker ? "handilooker-panel" : "handipal-panel"} role="tabpanel" aria-label={isHandilooker ? "Handilooker matches" : "Handipal matches"} className="mt-5 flex flex-col gap-3">{isHandilooker ? serviceOffers.map((provider) => <ProviderCard key={provider.name} provider={provider} />) : serviceRequests.map((request) => <RequestCard key={request.title} request={request} />)}</div><div className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-card/50 p-5 text-center text-sm text-muted-foreground"><MessageCircle className="size-4" /> Matching improves as you search, save, and complete jobs.</div></div></section></div></main>
}

export { jobs }

// Backend integration point: replace these mock matches with authenticated, profile-scoped data.
// The active role should come from the signed-in user's account capabilities.
