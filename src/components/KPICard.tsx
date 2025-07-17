
import { TrendingUp, TrendingDown, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  change: number;
  changeLabel: string;
  trend: "up" | "down";
  sparklineData?: number[];
  description?: string;
}

export function KPICard({
  title,
  value,
  change,
  changeLabel,
  trend,
  sparklineData = [20, 30, 25, 40, 35, 50, 45, 60],
  description,
}: KPICardProps) {
  const isPositive = trend === "up";

  return (
    <Card className="hover-glow border-border bg-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
            <Info className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-2xl font-bold text-card-foreground">{value}</div>
          
          {/* Sparkline simulation */}
          <div className="h-8 flex items-end space-x-1">
            {sparklineData.map((height, index) => (
              <div
                key={index}
                className="bg-primary/30 rounded-sm flex-1"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Badge
              variant="outline"
              className={cn(
                "flex items-center space-x-1",
                isPositive
                  ? "border-green-500/50 text-green-400"
                  : "border-red-500/50 text-red-400"
              )}
            >
              {isPositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              <span>{Math.abs(change)}%</span>
            </Badge>
            <span className="text-xs text-muted-foreground">{changeLabel}</span>
          </div>

          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
