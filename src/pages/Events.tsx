import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Users, Clock, Plus } from "lucide-react";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Alumni Networking Night",
      description: "Join us for an evening of networking and reconnecting with fellow alumni from various industries.",
      date: "March 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "University Alumni Center",
      organizer: "Sarah Chen",
      attendees: 127,
      maxAttendees: 200,
      tags: ["Networking", "Social", "Career"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Tech Talk: Future of AI",
      description: "Exploring the latest developments in artificial intelligence and their impact on various industries.",
      date: "March 22, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      organizer: "Michael Rodriguez",
      attendees: 89,
      maxAttendees: 150,
      tags: ["Technology", "AI", "Learning"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Career Development Workshop",
      description: "Interactive workshop on resume building, interview skills, and career advancement strategies.",
      date: "March 30, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Main Campus Auditorium",
      organizer: "Emily Johnson",
      attendees: 45,
      maxAttendees: 80,
      tags: ["Career", "Workshop", "Professional Development"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Events</h1>
          <p className="text-muted-foreground mt-1">
            Discover and join events organized by your alumni community
          </p>
        </div>
        <Button className="gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          Create Event
        </Button>
      </div>

      {/* Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="shadow-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg" alt={event.organizer} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        {event.organizer.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">by {event.organizer}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">{event.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{event.attendees}/{event.maxAttendees} attendees</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="outline" className="flex-1">
                    Save Event
                  </Button>
                  <Button className="flex-1 gradient-primary">
                    Register Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Past Events Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Past Events</CardTitle>
          <CardDescription>Check out events you might have missed</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            Past events will appear here. View recordings and materials from previous events.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}