import { platformConfig, type ContentPost } from "@/lib/platforms";
import { Clock, Check, AlertTriangle, FileEdit } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";

const statusConfig = {
  draft: { icon: FileEdit, label: "Draft", className: "text-muted-foreground bg-muted" },
  scheduled: { icon: Clock, label: "Scheduled", className: "text-warning bg-warning/10" },
  published: { icon: Check, label: "Published", className: "text-success bg-success/10" },
  failed: { icon: AlertTriangle, label: "Failed", className: "text-destructive bg-destructive/10" },
};

export function ContentQueue({ posts }: { posts: ContentPost[] }) {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-display font-semibold">Content Queue</h2>
        <span className="text-xs text-muted-foreground">{posts.length} posts</span>
      </div>
      <div className="space-y-3">
        {posts.map((post, i) => {
          const status = statusConfig[post.status];
          return (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-3.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
            >
              <div className={`p-1.5 rounded-md ${status.className}`}>
                <status.icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{post.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">{post.content}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {post.platforms.map((p) => {
                  const cfg = platformConfig[p];
                  return (
                    <div key={p} className={`w-6 h-6 rounded-md flex items-center justify-center ${cfg.bgClass}`}>
                      <cfg.icon className={`w-3 h-3 ${cfg.colorClass}`} />
                    </div>
                  );
                })}
              </div>
              <span className="text-xs text-muted-foreground shrink-0 hidden sm:block">
                {post.scheduledAt ? format(post.scheduledAt, "MMM d, h:mm a") : 
                 post.publishedAt ? format(post.publishedAt, "MMM d, h:mm a") : "No date"}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
