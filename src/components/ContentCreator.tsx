import { useState } from "react";
import { platformConfig, Platform } from "@/lib/platforms";
import { Sparkles, Send, Calendar as CalIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ideaSuggestions = [
  "Share a customer success story highlighting key metrics",
  "Create a behind-the-scenes look at your team culture",
  "Post an industry trend prediction with your unique take",
  "Design a carousel explaining your product's top features",
];

export function ContentCreator() {
  const [content, setContent] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);

  const togglePlatform = (p: Platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  return (
    <div className="glass-card p-6 space-y-5">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-display font-semibold">Create Content</h2>
      </div>

      {/* Platform selector */}
      <div className="flex gap-2">
        {(Object.keys(platformConfig) as Platform[]).map((p) => {
          const cfg = platformConfig[p];
          const selected = selectedPlatforms.includes(p);
          return (
            <button
              key={p}
              onClick={() => togglePlatform(p)}
              className={cn(
                "platform-badge transition-all border",
                selected
                  ? `${cfg.bgClass} ${cfg.colorClass} border-current`
                  : "bg-secondary text-muted-foreground border-transparent hover:text-foreground"
              )}
            >
              <cfg.icon className="w-3 h-3" />
              {cfg.label}
            </button>
          );
        })}
      </div>

      {/* Text area */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your content or let AI generate ideas..."
        className="w-full h-32 bg-secondary/50 border border-border rounded-lg p-3.5 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary/50 placeholder:text-muted-foreground/50"
      />

      {/* Actions */}
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
          <Sparkles className="w-3.5 h-3.5" />
          Generate with AI
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
          <CalIcon className="w-3.5 h-3.5" />
          Schedule
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors ml-auto">
          <Send className="w-3.5 h-3.5" />
          Post Now
        </button>
      </div>

      {/* AI Suggestions */}
      <div>
        <p className="text-xs text-muted-foreground mb-2.5 font-medium">✨ AI Content Ideas</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {ideaSuggestions.map((idea, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.01 }}
              onClick={() => setContent(idea)}
              className="text-left text-xs p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors border border-transparent hover:border-primary/20"
            >
              {idea}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
