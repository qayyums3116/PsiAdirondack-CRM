
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ExternalLink, MoreHorizontal } from "lucide-react";

interface Activity {
  id: string;
  platform: string;
  title: string;
  date: string;
  status: "published" | "pending" | "failed" | "scheduled";
}

const activities: Activity[] = [
  {
    id: "1",
    platform: "Wikipedia",
    title: "AI-Powered Content Management Systems",
    date: "2024-01-15",
    status: "published",
  },
  {
    id: "2",
    platform: "Reddit",
    title: "Best Practices for SEO Optimization",
    date: "2024-01-14",
    status: "published",
  },
  {
    id: "3",
    platform: "Quora",
    title: "How to improve website ranking?",
    date: "2024-01-14",
    status: "pending",
  },
  {
    id: "4",
    platform: "StackOverflow",
    title: "Modern web scraping techniques",
    date: "2024-01-13",
    status: "failed",
  },
  {
    id: "5",
    platform: "Medium",
    title: "The Future of Content Marketing",
    date: "2024-01-12",
    status: "scheduled",
  },
];

const statusColors = {
  published: "bg-green-500/20 text-green-400 border-green-500/50",
  pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
  failed: "bg-red-500/20 text-red-400 border-red-500/50",
  scheduled: "bg-blue-500/20 text-blue-400 border-blue-500/50",
};

export function ActivityTable() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-card-foreground">
            Recent Activity
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-muted-foreground">Platform</TableHead>
              <TableHead className="text-muted-foreground">Title</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id} className="border-border">
                <TableCell className="text-foreground font-medium">
                  {activity.platform}
                </TableCell>
                <TableCell className="text-foreground max-w-xs truncate">
                  {activity.title}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Date(activity.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={statusColors[activity.status]}
                  >
                    {activity.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <MoreHorizontal className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
