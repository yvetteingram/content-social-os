import { 
  LayoutDashboard, PenSquare, Calendar, BarChart3, 
  Settings, Sparkles, Zap 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: PenSquare, label: "Create", active: false },
  { icon: Calendar, label: "Calendar", active: false },
  { icon: Sparkles, label: "Ideate", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function AppSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[72px] bg-sidebar border-r border-sidebar-border flex flex-col items-center py-6 z-50">
      <div className="mb-8 flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
        <Zap className="w-5 h-5 text-primary-foreground" />
      </div>
      
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "group relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200",
              item.active 
                ? "bg-primary/15 text-primary" 
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
            {item.active && (
              <div className="absolute left-0 w-0.5 h-5 bg-primary rounded-r-full -ml-[15px]" />
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}
