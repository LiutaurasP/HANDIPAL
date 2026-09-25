"use client"

import { useState } from "react"
import { PenSquare } from "lucide-react"
import { Avatar } from "@/components/avatar"
import { chats } from "@/lib/data"
import { cn } from "@/lib/utils"

export function ChatList() {
  const [activeId, setActiveId] = useState(chats[0]?.id)

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-4 pb-3 pt-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Messages
        </h2>
        <button
          className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          aria-label="New message"
        >
          <PenSquare className="size-4" />
        </button>
      </div>

      <ul className="flex-1 overflow-y-auto pb-4">
        {chats.map((chat) => {
          const active = chat.id === activeId
          return (
            <li key={chat.id}>
              <button
                onClick={() => setActiveId(chat.id)}
                className={cn(
                  "flex w-full items-start gap-3 px-4 py-3 text-left transition-colors",
                  active ? "bg-accent" : "hover:bg-accent/60",
                )}
              >
                <div className="relative">
                  <Avatar name={chat.name} size={44} />
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-sidebar bg-emerald-500" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-semibold">{chat.name}</span>
                    <span className="shrink-0 text-xs text-muted-foreground">{chat.time}</span>
                  </div>
                  <p className="truncate text-xs font-medium text-primary/90">
                    {chat.jobTitle}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {chat.lastMessage}
                  </p>
                </div>

                {chat.unread > 0 && (
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                    {chat.unread}
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
