import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MapPin, Briefcase, Star, MessageCircle } from "lucide-react";

export default function Mentors() {
  const mentors = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Software Engineer",
      company: "Google",
      location: "San Francisco, CA",
      skills: ["React", "Node.js", "System Design"],
      rating: 4.9,
      sessions: 127,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA", 
      skills: ["Product Strategy", "Data Analysis", "Leadership"],
      rating: 4.8,
      sessions: 98,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "UX Designer",
      company: "Apple",
      location: "Cupertino, CA",
      skills: ["UI/UX", "Figma", "User Research"],
      rating: 4.9,
      sessions: 85,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Find Peoples</h1>
          <p className="text-muted-foreground mt-1">
            Connect with experienced alumni who can guide your career journey
          </p>
        </div>
      </div>

      {/* Search Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Search Peoples</CardTitle>
          <CardDescription>Find mentors based on skills, company, or location</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by skills, company, or name..." className="pl-10" />
            </div>
            <Button className="gradient-primary">Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="shadow-card hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mentor.image} alt={mentor.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{mentor.name}</h3>
                  <p className="text-muted-foreground text-sm">{mentor.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Briefcase className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{mentor.company}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{mentor.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Skills</p>
                  <div className="flex flex-wrap gap-1">
                    {mentor.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{mentor.rating}</span>
                    <span className="text-muted-foreground">({mentor.sessions} sessions)</span>
                  </div>
                </div>

                <Button className="w-full gradient-primary">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}