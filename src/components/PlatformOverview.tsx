import { platformConfig, Platform } from "@/lib/platforms";
import { motion } from "framer-motion";

const platformStats: { platform: Platform; followers: string; growth: string; engagement: string }[] = [
  { platform: "x", followers: "12.4K", growth: "+5.2%", engagement: "3.8%" },
  { platform: "instagram", followers: "28.1K", growth: "+8.7%", engagement: "6.2%" },
  { platform: "linkedin", followers: "8.9K", growth: "+12.1%", engagement: "4.5%" },
  { platform: "youtube", followers: "5.3K", growth: "+3.4%", engagement: "7.1%" },
];

export function PlatformOverview() {
  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-display font-semibold mb-5">Platform Overview</h2>
      <div className="space-y-3">
        {platformStats.map((stat, i) => {
          const cfg = platformConfig[stat.platform];
          return (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${cfg.bgClass}`}>
                <cfg.icon className={`w-4 h-4 ${cfg.colorClass}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{cfg.label}</p>
                <p className="text-xs text-muted-foreground">{stat.followers} followers</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-success">{stat.growth}</p>
                <p className="text-xs text-muted-foreground">{stat.engagement} eng.</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
