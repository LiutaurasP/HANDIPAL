import { ChatList } from "@/components/chat-list"
import { JobFeed } from "@/components/job-feed"
import { TopBar } from "@/components/top-bar"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <TopBar />

      <div className="flex flex-1">
        {/* Chat list sidebar */}
        <aside className="hidden w-80 shrink-0 border-r border-sidebar-border bg-sidebar md:block">
          <div className="sticky top-16 h-[calc(100vh-4rem)]">
            <ChatList />
          </div>
        </aside>

        {/* Job offers */}
        <main className="min-w-0 flex-1">
          <JobFeed />
        </main>
      </div>
    </div>
  )
}
