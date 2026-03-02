import { ContentPost } from "./platforms";

export const mockPosts: ContentPost[] = [
  {
    id: "1",
    title: "Product Launch Announcement",
    content: "🚀 Exciting news! We're thrilled to announce our latest product that will revolutionize how you manage your social presence...",
    platforms: ["x", "linkedin", "instagram"],
    status: "scheduled",
    scheduledAt: new Date(Date.now() + 3600000 * 2),
    createdAt: new Date(Date.now() - 86400000),
  },
  {
    id: "2",
    title: "Behind the Scenes Video",
    content: "Take a peek behind the curtain! Here's how our team creates magic every day 🎬",
    platforms: ["youtube", "instagram"],
    status: "published",
    publishedAt: new Date(Date.now() - 7200000),
    createdAt: new Date(Date.now() - 172800000),
  },
  {
    id: "3",
    title: "Industry Insights Thread",
    content: "🧵 A thread on the top 5 social media trends for 2026 that every brand needs to know...",
    platforms: ["x"],
    status: "draft",
    createdAt: new Date(),
  },
  {
    id: "4",
    title: "Customer Success Story",
    content: "Meet Sarah, who grew her business 300% using our platform. Here's her story...",
    platforms: ["linkedin", "youtube"],
    status: "scheduled",
    scheduledAt: new Date(Date.now() + 86400000),
    createdAt: new Date(Date.now() - 3600000),
  },
  {
    id: "5",
    title: "Weekly Tips & Tricks",
    content: "💡 Tip of the week: Consistency beats perfection. Post regularly and engage authentically.",
    platforms: ["x", "instagram", "linkedin"],
    status: "published",
    publishedAt: new Date(Date.now() - 86400000 * 2),
    createdAt: new Date(Date.now() - 86400000 * 3),
  },
];
