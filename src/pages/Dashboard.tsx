import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  BookOpen, 
  Briefcase, 
  Calendar,
  TrendingUp,
  Heart,
  Star,
  ArrowRight,
  Target,
  Award,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {

  const quickStats = [
    { 
      title: "Active Mentors", 
      value: "1,247", 
      change: "+12%", 
      icon: Users, 
      color: "text-primary" 
    },
    { 
      title: "Success Stories", 
      value: "89", 
      change: "+5 this week", 
      icon: BookOpen, 
      color: "text-success" 
    },
    { 
      title: "Job Postings", 
      value: "156", 
      change: "+23 today", 
      icon: Briefcase, 
      color: "text-accent" 
    },
    { 
      title: "Upcoming Events", 
      value: "12", 
      change: "2 this week", 
      icon: Calendar, 
      color: "text-donation" 
    },
  ];

  const recentActivities = [
    { 
      type: "mentor_match", 
      message: "You have 3 new mentor recommendations", 
      time: "2 hours ago",
      icon: Target 
    },
    { 
      type: "story", 
      message: "New success story from Sarah Chen published", 
      time: "5 hours ago",
      icon: Award 
    },
    { 
      type: "job", 
      message: "Software Engineer position at TechCorp", 
      time: "1 day ago",
      icon: Briefcase 
    },
    { 
      type: "event", 
      message: "Alumni Networking Event tomorrow", 
      time: "2 days ago",
      icon: Calendar 
    },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {getGreeting()}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening in your alumni network today
          </p>
        </div>
        
        <Button asChild className="gradient-primary">
          <Link to="/mentors">
            <Users className="w-4 h-4 mr-2" />
            Find Mentors
          </Link>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-accent">{stat.change}</span> from last period
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Completion */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-success" />
              Get Started
            </CardTitle>
            <CardDescription>
              Complete your profile to get better mentor matches
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Profile Completion</span>
                <span className="font-medium">0%</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <Badge variant="secondary" className="text-xs">
                → Sign In to Continue
              </Badge>
              <Badge variant="secondary" className="text-xs">
                → Add Basic Info
              </Badge>
              <Badge variant="secondary" className="text-xs">
                → Add Skills & Interests
              </Badge>
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              Sign In to Complete Profile
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Stay updated with the latest happenings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Jump into the most popular features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Button asChild variant="outline" className="h-20 flex-col gap-2">
              <Link to="/stories">
                <BookOpen className="w-6 h-6" />
                <span className="text-xs">Stories</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex-col gap-2">
              <Link to="/jobs">
                <Briefcase className="w-6 h-6" />
                <span className="text-xs">Jobs</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex-col gap-2">
              <Link to="/events">
                <Calendar className="w-6 h-6" />
                <span className="text-xs">Events</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex-col gap-2">
              <Link to="/donations">
                <Heart className="w-6 h-6" />
                <span className="text-xs">Donate</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex-col gap-2">
              <Link to="/feed">
                <MessageCircle className="w-6 h-6" />
                <span className="text-xs">Feed</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex-col gap-2">
              <Link to="/mentors">
                <TrendingUp className="w-6 h-6" />
                <span className="text-xs">Growth</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}