import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, getDay } from "date-fns";

const scheduledDays = [3, 7, 12, 15, 18, 22, 25, 28]; // mock

export function MiniCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start, end });
  const startPadding = getDay(start);

  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-display font-semibold">{format(currentMonth, "MMMM yyyy")}</h3>
        <div className="flex gap-1">
          <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-1 rounded hover:bg-secondary text-muted-foreground">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-1 rounded hover:bg-secondary text-muted-foreground">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="text-[10px] text-muted-foreground font-medium py-1">{d}</div>
        ))}
        {Array.from({ length: startPadding }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}
        {days.map((day) => {
          const dayNum = day.getDate();
          const hasContent = scheduledDays.includes(dayNum);
          return (
            <button
              key={dayNum}
              className={`relative text-xs py-1.5 rounded-md transition-colors ${
                isToday(day) ? "bg-primary text-primary-foreground font-bold" :
                hasContent ? "text-foreground hover:bg-secondary" :
                "text-muted-foreground hover:bg-secondary/50"
              }`}
            >
              {dayNum}
              {hasContent && !isToday(day) && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
