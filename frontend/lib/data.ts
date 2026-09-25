export type Chat = {
  id: string
  name: string
  jobTitle: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
}

export type Job = {
  id: string
  title: string
  category: JobCategory
  description: string
  poster: string
  location: string
  distance: string
  budget: string
  budgetType: "fixed" | "hourly"
  postedAt: string
  urgent: boolean
  applicants: number
}

export const CATEGORIES = [
  "All jobs",
  "Moving",
  "Cleaning",
  "Yard work",
  "Handyman",
  "Delivery",
  "Assembly",
  "Pet care",
  "Tech help",
] as const

export type JobCategory = (typeof CATEGORIES)[number]

export const chats: Chat[] = [
  {
    id: "c1",
    name: "Marcus Reid",
    jobTitle: "Fence repair",
    lastMessage: "Great, I can come by Saturday morning around 9.",
    time: "2m",
    unread: 2,
    online: true,
  },
  {
    id: "c2",
    name: "Elena Petrova",
    jobTitle: "Apartment move",
    lastMessage: "Do you have a dolly or should I bring one?",
    time: "18m",
    unread: 0,
    online: true,
  },
  {
    id: "c3",
    name: "Dwight Osei",
    jobTitle: "IKEA wardrobe assembly",
    lastMessage: "Sent you the photos of the parts.",
    time: "1h",
    unread: 1,
    online: false,
  },
  {
    id: "c4",
    name: "Priya Nair",
    jobTitle: "Weekly dog walking",
    lastMessage: "Buddy loved the walk today, thank you!",
    time: "3h",
    unread: 0,
    online: false,
  },
  {
    id: "c5",
    name: "Tom Becker",
    jobTitle: "Gutter cleaning",
    lastMessage: "Payment sent. Appreciate the quick work.",
    time: "1d",
    unread: 0,
    online: false,
  },
  {
    id: "c6",
    name: "Sofia Marín",
    jobTitle: "Garden weeding",
    lastMessage: "Are you free again next weekend?",
    time: "2d",
    unread: 0,
    online: true,
  },
]

export const jobs: Job[] = [
  {
    id: "j1",
    title: "Help moving a 2-bedroom apartment",
    category: "Moving",
    description:
      "Need two people to help carry boxes and furniture down two flights of stairs and into a van. Should take about 3 hours.",
    poster: "Elena Petrova",
    location: "Bushwick, Brooklyn",
    distance: "1.2 mi",
    budget: "$140",
    budgetType: "fixed",
    postedAt: "12 min ago",
    urgent: true,
    applicants: 4,
  },
  {
    id: "j2",
    title: "Assemble an IKEA PAX wardrobe",
    category: "Assembly",
    description:
      "Flat-pack wardrobe with sliding doors. All parts and tools on site. Instructions included but it's a big one.",
    poster: "Dwight Osei",
    location: "Astoria, Queens",
    distance: "3.4 mi",
    budget: "$60",
    budgetType: "fixed",
    postedAt: "40 min ago",
    urgent: false,
    applicants: 7,
  },
  {
    id: "j3",
    title: "Weekly dog walking for a friendly labrador",
    category: "Pet care",
    description:
      "Looking for someone reliable to walk Buddy 3x a week, 30 min each. Afternoons preferred. Ongoing arrangement.",
    poster: "Priya Nair",
    location: "Park Slope, Brooklyn",
    distance: "0.8 mi",
    budget: "$22/hr",
    budgetType: "hourly",
    postedAt: "1 hr ago",
    urgent: false,
    applicants: 2,
  },
  {
    id: "j4",
    title: "Fix a leaning backyard fence panel",
    category: "Handyman",
    description:
      "One fence panel came loose after the storm. Need someone handy to secure or replace the post. Materials can be discussed.",
    poster: "Marcus Reid",
    location: "Ridgewood, Queens",
    distance: "2.1 mi",
    budget: "$90",
    budgetType: "fixed",
    postedAt: "2 hr ago",
    urgent: true,
    applicants: 3,
  },
  {
    id: "j5",
    title: "Deep clean before apartment inspection",
    category: "Cleaning",
    description:
      "One-bedroom apartment, needs kitchen, bathroom and floors done thoroughly. Supplies provided. Flexible on timing this week.",
    poster: "Hannah Kim",
    location: "Long Island City",
    distance: "4.0 mi",
    budget: "$25/hr",
    budgetType: "hourly",
    postedAt: "3 hr ago",
    urgent: false,
    applicants: 5,
  },
  {
    id: "j6",
    title: "Clear leaves and weed the front garden",
    category: "Yard work",
    description:
      "Small front yard that's gotten overgrown. Bag up leaves and pull weeds. Green bags provided. Half a day at most.",
    poster: "Sofia Marín",
    location: "Greenpoint, Brooklyn",
    distance: "1.9 mi",
    budget: "$70",
    budgetType: "fixed",
    postedAt: "5 hr ago",
    urgent: false,
    applicants: 1,
  },
  {
    id: "j7",
    title: "Pick up and deliver a dresser across town",
    category: "Delivery",
    description:
      "Bought a dresser on Marketplace, need someone with a van or truck to pick it up and drop it at my place. Ground floor both ends.",
    poster: "Chris Alvarez",
    location: "Williamsburg, Brooklyn",
    distance: "2.6 mi",
    budget: "$55",
    budgetType: "fixed",
    postedAt: "6 hr ago",
    urgent: false,
    applicants: 6,
  },
  {
    id: "j8",
    title: "Set up new laptop and transfer files",
    category: "Tech help",
    description:
      "Got a new laptop and need help moving everything over from the old one, plus installing a few programs. Patient with non-tech folks a plus.",
    poster: "Margaret Doyle",
    location: "Sunnyside, Queens",
    distance: "3.8 mi",
    budget: "$40",
    budgetType: "fixed",
    postedAt: "8 hr ago",
    urgent: false,
    applicants: 2,
  },
]

export function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

const AVATAR_COLORS = [
  "oklch(0.7 0.185 52)",
  "oklch(0.62 0.13 160)",
  "oklch(0.58 0.14 250)",
  "oklch(0.65 0.16 330)",
  "oklch(0.6 0.15 20)",
  "oklch(0.62 0.13 130)",
]

export function avatarColor(seed: string) {
  const sum = seed.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return AVATAR_COLORS[sum % AVATAR_COLORS.length]
}
