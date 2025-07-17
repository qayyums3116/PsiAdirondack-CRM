
import { Header } from "@/components/Header";
import { KPICard } from "@/components/KPICard";
import { ActivityTable } from "@/components/ActivityTable";

const kpiData = [
  {
    title: "Visibility Score (VS)",
    value: "87.5",
    change: 12.5,
    changeLabel: "vs yesterday",
    trend: "up" as const,
    description: "Overall brand visibility across platforms",
  },
  {
    title: "Citation Frequency Index (CFI)",
    value: "234",
    change: 8.2,
    changeLabel: "vs yesterday",
    trend: "up" as const,
    description: "How often content is referenced",
  },
  {
    title: "Keyword Ranking Delta (KRD)",
    value: "+15",
    change: 5.7,
    changeLabel: "vs yesterday",
    trend: "up" as const,
    description: "Change in search ranking positions",
  },
  {
    title: "Engagement Rate (ER)",
    value: "94.2%",
    change: 2.1,
    changeLabel: "vs yesterday",
    trend: "down" as const,
    description: "User interaction with content",
  },
  {
    title: "Platform Penetration Index (PPI)",
    value: "76.8",
    change: 18.3,
    changeLabel: "vs yesterday",
    trend: "up" as const,
    description: "Content reach across platforms",
  },
  {
    title: "LLM Reference Ratio (LRR)",
    value: "42.1%",
    change: 4.6,
    changeLabel: "vs yesterday",
    trend: "up" as const,
    description: "AI model reference frequency",
  },
];

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <Header title="Dashboard" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      <ActivityTable />
    </div>
  );
}
