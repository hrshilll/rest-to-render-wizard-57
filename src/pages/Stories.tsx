
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share, Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Stories() {
  const { toast } = useToast();
  
  const handleShareStory = () => {
    toast({
      title: "Share Your Story",
      description: "Story sharing form will be available soon. Stay tuned!",
    });
  };

  const stories = [
    {
      id: 1,
      title: "From Student to Tech Lead: My Journey at Google",
      excerpt: "How I leveraged my computer science degree and alumni network to land my dream job...",
      author: "Sarah Chen",
      authorRole: "Tech Lead at Google",
      authorImage: "/placeholder.svg",
      publishedAt: "2 days ago",
      likes: 124,
      comments: 18,
      tags: ["Career Growth", "Technology", "Mentorship"]
    },
    {
      id: 2,
      title: "Building a Startup While Working Full-time",
      excerpt: "The challenges and rewards of entrepreneurship alongside a corporate career...",
      author: "Michael Rodriguez",
      authorRole: "Founder & CEO at TechStart",
      authorImage: "/placeholder.svg",
      publishedAt: "5 days ago",
      likes: 89,
      comments: 12,
      tags: ["Entrepreneurship", "Startup", "Work-Life Balance"]
    },
    {
      id: 3,
      title: "Transitioning from Engineering to Product Management",
      excerpt: "Why I made the switch and how my technical background gave me an edge...",
      author: "Emily Johnson",
      authorRole: "Senior PM at Microsoft",
      authorImage: "/placeholder.svg",
      publishedAt: "1 week ago",
      likes: 67,
      comments: 24,
      tags: ["Career Change", "Product Management", "Leadership"]
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Success Stories</h1>
          <p className="text-muted-foreground mt-1">
            Get inspired by fellow alumni achievements and career journeys
          </p>
        </div>
        <Button className="gradient-primary" onClick={handleShareStory}>
          <Plus className="h-4 w-4 mr-2" />
          Share Your Story
        </Button>
      </div>

      <div className="space-y-6">
        {stories.map((story) => (
          <Card key={story.id} className="shadow-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={story.authorImage} alt={story.author} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {story.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{story.author}</h3>
                      <p className="text-sm text-muted-foreground">{story.authorRole}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{story.publishedAt}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div>
                  <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">{story.excerpt}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Heart className="h-4 w-4" />
                      {story.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      {story.comments}
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}