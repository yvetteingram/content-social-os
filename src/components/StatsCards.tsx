import { TrendingUp, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Posts", value: "128", change: "+12%", icon: TrendingUp, accentClass: "text-primary" },
  { label: "Scheduled", value: "14", change: "Next 7 days", icon: Clock, accentClass: "text-warning" },
  { label: "Published", value: "96", change: "This month", icon: CheckCircle2, accentClass: "text-success" },
  { label: "Failed", value: "2", change: "Needs attention", icon: AlertCircle, accentClass: "text-destructive" },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="glass-card-hover p-5"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              <p className="text-3xl font-display font-bold mt-1">{stat.value}</p>
              <p className={`text-xs mt-1 ${stat.accentClass}`}>{stat.change}</p>
            </div>
            <div className={`p-2.5 rounded-lg bg-secondary ${stat.accentClass}`}>
              <stat.icon className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
