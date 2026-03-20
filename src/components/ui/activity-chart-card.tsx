import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ActivityDataPoint {
  day: string;
  value: number;
}

interface ActivityChartCardProps {
  title?: string;
  totalValue: string;
  data: ActivityDataPoint[];
  className?: string;
  dropdownOptions?: string[];
}

export const ActivityChartCard = ({
  title = "Activity",
  totalValue,
  data,
  className,
  dropdownOptions = ["Weekly", "Monthly", "Yearly"],
}: ActivityChartCardProps) => {
  const [selectedRange, setSelectedRange] = React.useState(
    dropdownOptions[0] || ""
  );

  const maxValue = React.useMemo(() => {
    return data.reduce((max, item) => (item.value > max ? item.value : max), 0);
  }, [data]);

  const chartVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const barVariants = {
    hidden: { scaleY: 0, opacity: 0, transformOrigin: "bottom" },
    visible: {
      scaleY: 1,
      opacity: 1,
      transformOrigin: "bottom",
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <Card
      className={cn("w-full bg-[#0a0a0a] border-white/10 text-white shadow-[0_8px_30px_rgb(0,0,0,0.5)]", className)}
      aria-labelledby="activity-card-title"
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle id="activity-card-title" className="text-xl text-[#d8b068]">{title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
                aria-haspopup="true"
              >
                {selectedRange}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#111] border-white/10 text-white">
              {dropdownOptions.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onSelect={() => setSelectedRange(option)}
                  className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-4">
          <div className="flex flex-col min-w-[30%]">
            <p className="text-4xl sm:text-5xl font-bold tracking-tighter text-white">
              {totalValue}
            </p>
            <CardDescription className="flex items-center gap-1 text-gray-400 mt-2">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <span>+12% tracking avg</span>
            </CardDescription>
          </div>

          <motion.div
            key={selectedRange}
            className="flex h-32 w-full items-end justify-between gap-1 sm:gap-2"
            variants={chartVariants}
            initial="hidden"
            animate="visible"
            aria-label="Activity chart"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="flex h-full w-full flex-col items-center justify-end gap-2"
                role="presentation"
              >
                <div className="w-full h-[100px] flex items-end bg-white/5 rounded-[4px] relative overflow-hidden">
                  <motion.div
                    className="w-full bg-gradient-to-t from-[#bb9753] to-[#f3dca2] rounded-[4px]"
                    style={{
                      height: `${maxValue > 0 ? (item.value / maxValue) * 100 : 0}%`,
                    }}
                    variants={barVariants}
                    aria-label={`${item.day}: ${item.value}`}
                  />
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {item.day}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};
