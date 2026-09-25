import { avatarColor, initials } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Avatar({
  name,
  size = 40,
  className,
}: {
  name: string
  size?: number
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white",
        className,
      )}
      style={{
        width: size,
        height: size,
        backgroundColor: avatarColor(name),
        fontSize: size * 0.36,
      }}
      aria-hidden="true"
    >
      {initials(name)}
    </span>
  )
}
