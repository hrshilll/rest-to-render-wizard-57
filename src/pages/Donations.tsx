import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Users, Target, Calendar, Plus } from "lucide-react";

export default function Donations() {
  const campaigns = [
    {
      id: 1,
      title: "Emergency Student Fund",
      description: "Supporting students facing unexpected financial hardships during their academic journey.",
      goalAmount: 50000,
      raisedAmount: 32500,
      contributors: 127,
      daysLeft: 45,
      organizer: "Alumni Association",
      category: "Student Support",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "New Computer Lab Equipment",
      description: "Upgrading our computer science lab with latest hardware and software for better learning experience.",
      goalAmount: 75000,
      raisedAmount: 48200,
      contributors: 89,
      daysLeft: 60,
      organizer: "CS Department",
      category: "Infrastructure",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Scholarship Fund 2024",
      description: "Creating opportunities for deserving students who need financial assistance to pursue their dreams.",
      goalAmount: 200000,
      raisedAmount: 69800,
      contributors: 234,
      daysLeft: 90,
      organizer: "Scholarship Committee",
      category: "Education",
      image: "/placeholder.svg"
    }
  ];

  const recentDonations = [
    { donor: "Anonymous", amount: 5000, time: "2 hours ago" },
    { donor: "Sarah Chen", amount: 10000, time: "5 hours ago" },
    { donor: "Michael R.", amount: 2500, time: "1 day ago" },
    { donor: "Alumni Group", amount: 25000, time: "2 days ago" }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.round((raised / goal) * 100);
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Community Donations</h1>
          <p className="text-muted-foreground mt-1">
            Support causes that matter to our alumni community
          </p>
        </div>
        <Button className="gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          Start Campaign
        </Button>
      </div>

      {/* Featured Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">₹148,500</p>
                <p className="text-sm text-muted-foreground">Total Raised This Year</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">450</p>
                <p className="text-sm text-muted-foreground">Active Contributors</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Active Campaigns</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Campaigns */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Active Campaigns</h2>
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="shadow-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2">{campaign.category}</Badge>
                    <CardTitle className="text-xl">{campaign.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {campaign.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Progress</span>
                      <span>{getProgressPercentage(campaign.raisedAmount, campaign.goalAmount)}%</span>
                    </div>
                    <Progress 
                      value={getProgressPercentage(campaign.raisedAmount, campaign.goalAmount)} 
                      className="h-3"
                    />
                    <div className="flex justify-between text-sm mt-2 text-muted-foreground">
                      <span>{formatCurrency(campaign.raisedAmount)} raised</span>
                      <span>{formatCurrency(campaign.goalAmount)} goal</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{campaign.contributors} contributors</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{campaign.daysLeft} days left</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t">
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                    <Button className="flex-1 gradient-primary">
                      <Heart className="h-4 w-4 mr-2" />
                      Donate Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Recent Donations</h2>
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Latest Contributors</CardTitle>
              <CardDescription>Thank you to our generous alumni community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDonations.map((donation, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg" alt={donation.donor} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {donation.donor.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{donation.donor}</p>
                        <p className="text-sm text-muted-foreground">{donation.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-success">
                        {formatCurrency(donation.amount)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Impact Stories */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Impact Stories</CardTitle>
              <CardDescription>See how your donations make a difference</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm font-medium mb-2">Student Success</p>
                  <p className="text-sm text-muted-foreground">
                    "Thanks to the Emergency Student Fund, I was able to continue my studies after facing unexpected medical expenses. I'm now graduating with honors!"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Anonymous Student</p>
                </div>
                
                <div className="p-4 rounded-lg bg-success/5 border border-success/10">
                  <p className="text-sm font-medium mb-2">Lab Upgrade</p>
                  <p className="text-sm text-muted-foreground">
                    "The new computer lab equipment has transformed our learning experience. We can now work on real-world projects with industry-standard tools."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- CS Student Association</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}