import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  BookOpen,
  Heart,
  Briefcase,
  Calendar,
  MessageCircle,
  Search,
  Settings,
  GraduationCap,
  Award,
  TrendingUp,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";


const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Find Peoples", url: "/mentors", icon: Search },
  { title: "Success Stories", url: "/stories", icon: BookOpen },
  { title: "Job Board", url: "/jobs", icon: Briefcase },
  { title: "Events", url: "/events", icon: Calendar },
  { title: "Feed", url: "/feed", icon: MessageCircle },
  { title: "Donations", url: "/donations", icon: Heart },
];

const alumniItems = [
  { title: "My Mentees", url: "/my-mentees", icon: Users },
  { title: "Post Story", url: "/post-story", icon: Award },
  { title: "Post Job", url: "/post-job", icon: TrendingUp },
];

const adminItems = [
  { title: "User Management", url: "/admin/users", icon: Users },
  { title: "Content Moderation", url: "/admin/content", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary border-primary/20" : "hover:bg-muted/50";

  return (
    <Sidebar className="w-64" collapsible="icon">
      <SidebarContent className="bg-sidebar border-sidebar-border">
        {/* Logo Section */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-sidebar-foreground">Knot</h2>
                <p className="text-xs text-sidebar-foreground/60">
                  Stronger ties,<br />Smarter Opportunities
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={currentPath === item.url}>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
}