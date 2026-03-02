import { AppSidebar } from "@/components/AppSidebar";
import { StatsCards } from "@/components/StatsCards";
import { ContentQueue } from "@/components/ContentQueue";
import { ContentCreator } from "@/components/ContentCreator";
import { PlatformOverview } from "@/components/PlatformOverview";
import { MiniCalendar } from "@/components/MiniCalendar";
import { mockPosts } from "@/lib/mockData";
import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      
      <main className="pl-[72px]">
        {/* Top bar */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-display font-bold">Dashboard</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Manage your social media presence</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <Search className="w-4.5 h-4.5" />
            </button>
            <button className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <Bell className="w-4.5 h-4.5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-display font-semibold text-primary">
              SM
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-6 max-w-[1400px]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <StatsCards />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <ContentCreator />
              <ContentQueue posts={mockPosts} />
            </div>
            <div className="space-y-6">
              <PlatformOverview />
              <MiniCalendar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
