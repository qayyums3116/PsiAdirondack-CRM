
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Package,
  PenTool,
  Link,
  Calendar,
  Monitor,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Products", url: "/products", icon: Package },
  { title: "Content Seeding", url: "/content", icon: PenTool },
  { title: "Integrations", url: "/integrations", icon: Link },
  { title: "Scheduling", url: "/scheduling", icon: Calendar },
  { title: "Monitoring", url: "/monitoring", icon: Monitor },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={cn("border-r border-border", isCollapsed ? "w-16" : "w-60")} collapsible="icon">
      <SidebarHeader className="border-b border-border p-4">
        {!isCollapsed ? (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-card-foreground">PsiAdirondack</h2>
              <p className="text-xs text-muted-foreground">Intelligence CRM</p>
            </div>
          </div>
        ) : (
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={cn(
                          "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent text-foreground hover:text-accent-foreground"
                        )}
                      >
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                        {!isCollapsed && <span className="text-sm font-medium">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
