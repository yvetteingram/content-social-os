import { Twitter, Instagram, Linkedin, Youtube, LucideIcon } from "lucide-react";

export type Platform = "x" | "instagram" | "linkedin" | "youtube";

export const platformConfig: Record<Platform, { label: string; icon: LucideIcon; colorClass: string; bgClass: string }> = {
  x: { label: "X", icon: Twitter, colorClass: "text-platform-x", bgClass: "bg-platform-x/10" },
  instagram: { label: "Instagram", icon: Instagram, colorClass: "text-platform-instagram", bgClass: "bg-platform-instagram/10" },
  linkedin: { label: "LinkedIn", icon: Linkedin, colorClass: "text-platform-linkedin", bgClass: "bg-platform-linkedin/10" },
  youtube: { label: "YouTube", icon: Youtube, colorClass: "text-platform-youtube", bgClass: "bg-platform-youtube/10" },
};

export interface ContentPost {
  id: string;
  title: string;
  content: string;
  platforms: Platform[];
  status: "draft" | "scheduled" | "published" | "failed";
  scheduledAt?: Date;
  publishedAt?: Date;
  createdAt: Date;
}
