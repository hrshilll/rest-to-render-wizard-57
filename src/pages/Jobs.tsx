import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MapPin, Building, Clock, DollarSign, ExternalLink, Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Jobs() {
  const { toast } = useToast();
  
  const handlePostJob = () => {
    toast({
      title: "Post a Job",
      description: "Job posting form will be available soon. Stay tuned!",
    });
  };

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      type: "Full-time",
      salary: "$180k - $250k",
      postedBy: "Sarah Chen",
      postedAt: "2 days ago",
      description: "Join our team building next-generation cloud infrastructure...",
      skills: ["React", "Python", "Kubernetes", "GCP"],
      applicants: 47
    },
    {
      id: 2,
      title: "Product Manager - AI/ML",
      company: "Microsoft",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$160k - $220k",
      postedBy: "Michael Rodriguez",
      postedAt: "4 days ago",
      description: "Lead product strategy for our AI-powered productivity tools...",
      skills: ["Product Strategy", "Machine Learning", "Analytics"],
      applicants: 23
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Apple",
      location: "Cupertino, CA",
      type: "Full-time",
      salary: "$140k - $180k",
      postedBy: "Emily Johnson",
      postedAt: "1 week ago",
      description: "Design beautiful and intuitive user experiences for iOS apps...",
      skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
      applicants: 31
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Job Board</h1>
          <p className="text-muted-foreground mt-1">
            Discover opportunities shared by your alumni network
          </p>
        </div>
        <Button className="gradient-primary" onClick={handlePostJob}>
          <Plus className="h-4 w-4 mr-2" />
          Post a Job
        </Button>
      </div>

      {/* Search Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Find Your Next Opportunity</CardTitle>
          <CardDescription>Search jobs by title, company, or skills</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search jobs..." className="pl-10" />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Location" className="pl-10 w-48" />
            </div>
            <Button className="gradient-primary">Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Jobs List */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="shadow-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg" alt={job.company} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {job.company[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Posted {job.postedAt}</p>
                  <p className="text-sm text-muted-foreground">by {job.postedBy}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">{job.description}</p>
                
                <div>
                  <p className="text-sm font-medium mb-2">Required Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    {job.applicants} applicants
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      Save
                    </Button>
                    <Button className="gradient-primary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}