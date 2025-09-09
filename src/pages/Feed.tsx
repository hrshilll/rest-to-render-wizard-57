import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share, MoreHorizontal, Image } from "lucide-react";

export default function Feed() {
  const posts = [
    {
      id: 1,
      author: "Sarah Chen",
      authorRole: "Tech Lead at Google",
      authorImage: "/placeholder.svg",
      timeAgo: "2 hours ago",
      content: "Just wrapped up an amazing mentorship session with 3 students today! It's incredible to see their passion for technology and innovation. Remember, every expert was once a beginner. Keep pushing forward! 🚀",
      hashtags: ["#mentorship", "#techcareers", "#motivation"],
      likes: 47,
      comments: 12,
      shares: 5
    },
    {
      id: 2,
      author: "Michael Rodriguez",
      authorRole: "Founder & CEO at TechStart",
      authorImage: "/placeholder.svg",
      timeAgo: "6 hours ago",
      content: "Exciting news! Our startup just secured Series A funding. None of this would have been possible without the incredible network I built during my university years. Grateful for every connection and lesson learned.",
      hashtags: ["#startup", "#funding", "#grateful", "#networking"],
      likes: 89,
      comments: 24,
      shares: 18
    },
    {
      id: 3,
      author: "Emily Johnson",
      authorRole: "Senior PM at Microsoft",
      authorImage: "/placeholder.svg",
      timeAgo: "1 day ago",
      content: "Leading a diverse team has taught me that different perspectives are our greatest strength. Today we launched a feature that will impact millions of users - proud of what we've accomplished together!",
      hashtags: ["#leadership", "#diversity", "#teamwork", "#product"],
      likes: 63,
      comments: 15,
      shares: 9
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Alumni Feed</h1>
        <p className="text-muted-foreground mt-1">
          Stay connected with your alumni community
        </p>
      </div>

      {/* Create Post */}
      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="You" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                GU
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Share your thoughts, achievements, or advice with the community..."
                className="min-h-[80px] resize-none border-0 shadow-none focus-visible:ring-0 p-0"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm">
              <Image className="h-4 w-4 mr-2" />
              Add Photo
            </Button>
            <Button className="gradient-primary">
              Share Post
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="shadow-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={post.authorImage} alt={post.author} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{post.author}</h3>
                    <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                    <p className="text-xs text-muted-foreground mt-1">{post.timeAgo}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">{post.content}</p>
                
                <div className="flex flex-wrap gap-2">
                  {post.hashtags.map((hashtag) => (
                    <Badge key={hashtag} variant="secondary" className="text-xs cursor-pointer hover:bg-primary/10">
                      {hashtag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-6">
                    <Button variant="ghost" size="sm" className="gap-2 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share className="h-4 w-4" />
                      {post.shares}
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