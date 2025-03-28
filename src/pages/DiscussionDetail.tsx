
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { 
  MessageCircle, 
  ThumbsUp, 
  User, 
  Clock, 
  ArrowLeft,
  Heart,
  Share2,
  Flag
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

// Mock discussion data
const discussionsData = [
  {
    id: "1",
    title: "What's the best way to validate a SaaS idea?",
    author: {
      id: "user1",
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      isFollowing: false,
    },
    category: "Idea Validation",
    createdAt: "2023-09-15T14:23:00Z",
    replies: 24,
    upvotes: 47,
    isUpvoted: false,
    isPopular: true,
    content: `I'm considering launching a SaaS product in the project management space, but I'm not sure how to validate if there's enough demand.

What are some effective methods you've used to validate your ideas before building? I've heard about landing pages with email signups, but I'm wondering if there are more direct approaches to gauge interest and need.

I'm particularly interested in:
- Low-cost validation techniques
- Ways to get quality feedback from potential users
- How to determine pricing willingness
- When to know if you have enough validation to start building

Would love to hear your experiences and what worked (or didn't work) for you!`,
    comments: [
      {
        id: "comment1",
        author: {
          id: "user2",
          name: "Emily Carter",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          isFollowing: false,
        },
        createdAt: "2023-09-15T16:45:00Z",
        content: "I've found that running small-scale ads to a landing page can work well. Set a budget of $100, create a simple landing page with a clear value proposition and a signup form, then drive targeted traffic. If you can get signups for less than $10-15 each, there's likely interest.",
        upvotes: 15,
        isUpvoted: false,
      },
      {
        id: "comment2",
        author: {
          id: "user3",
          name: "David Park",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          isFollowing: true,
        },
        createdAt: "2023-09-15T18:30:00Z",
        content: "Direct outreach has been my go-to method. Identify 20-30 potential users, reach out for a 15-minute chat, and really listen. Ask about their problems first before revealing your solution. If they're excited about your idea and willing to pay, that's a good sign. Try to get pre-orders or commitments if possible.",
        upvotes: 28,
        isUpvoted: true,
      },
    ]
  },
  {
    id: "2",
    title: "Strategies for finding a technical co-founder",
    author: {
      id: "user4",
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      isFollowing: true,
    },
    category: "Co-Founders",
    createdAt: "2023-09-10T09:15:00Z",
    replies: 31,
    upvotes: 52,
    isUpvoted: true,
    isPopular: true,
    content: `I'm a non-technical founder with a validated idea, but I'm struggling to find a technical co-founder. I've tried hackathons and networking events, but haven't had much success.

Any suggestions on where to look and how to approach potential technical partners? How did you find your co-founder?`,
    comments: []
  },
];

const DiscussionDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [comment, setComment] = useState("");
  const [discussions, setDiscussions] = useState(discussionsData);
  
  // Find current discussion
  const discussion = discussions.find(d => d.id === id);
  
  if (!discussion) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-2xl font-bold">Discussion not found</h1>
          <Link to="/community">
            <Button className="mt-4" leftIcon={<ArrowLeft className="h-4 w-4" />}>
              Back to Community
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleUpvotePost = () => {
    setDiscussions(prev => prev.map(d => {
      if (d.id === discussion.id) {
        return {
          ...d,
          upvotes: d.isUpvoted ? d.upvotes - 1 : d.upvotes + 1,
          isUpvoted: !d.isUpvoted
        };
      }
      return d;
    }));
    
    toast({
      title: discussion.isUpvoted ? "Upvote removed" : "Post upvoted!",
      description: discussion.isUpvoted 
        ? "You've removed your upvote for this post" 
        : "Thanks for supporting this discussion",
    });
  };
  
  const handleUpvoteComment = (commentId: string) => {
    setDiscussions(prev => prev.map(d => {
      if (d.id === discussion.id) {
        return {
          ...d,
          comments: d.comments.map(c => {
            if (c.id === commentId) {
              return {
                ...c,
                upvotes: c.isUpvoted ? c.upvotes - 1 : c.upvotes + 1,
                isUpvoted: !c.isUpvoted
              };
            }
            return c;
          })
        };
      }
      return d;
    }));
  };
  
  const handleFollowUser = (userId: string) => {
    setDiscussions(prev => prev.map(d => {
      // Update main discussion author
      if (d.id === discussion.id && d.author.id === userId) {
        return {
          ...d,
          author: {
            ...d.author,
            isFollowing: !d.author.isFollowing
          }
        };
      }
      
      // Update comment authors
      if (d.id === discussion.id) {
        return {
          ...d,
          comments: d.comments.map(c => {
            if (c.author.id === userId) {
              return {
                ...c,
                author: {
                  ...c.author,
                  isFollowing: !c.author.isFollowing
                }
              };
            }
            return c;
          })
        };
      }
      
      return d;
    }));
    
    // Get author info for toast
    let authorName = discussion.author.id === userId ? 
      discussion.author.name : 
      discussion.comments.find(c => c.author.id === userId)?.author.name;
    
    let isFollowing = discussion.author.id === userId ? 
      !discussion.author.isFollowing : 
      !discussion.comments.find(c => c.author.id === userId)?.author.isFollowing;
    
    toast({
      title: isFollowing ? `Following ${authorName}` : `Unfollowed ${authorName}`,
      description: isFollowing 
        ? `You'll now see updates from ${authorName} in your feed`
        : `You'll no longer see updates from ${authorName} in your feed`,
    });
  };
  
  const handleAddComment = () => {
    if (!comment.trim()) return;
    
    const newComment = {
      id: `comment${Date.now()}`,
      author: {
        id: "currentUser",
        name: "You",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        isFollowing: false,
      },
      createdAt: new Date().toISOString(),
      content: comment,
      upvotes: 0,
      isUpvoted: false,
    };
    
    setDiscussions(prev => prev.map(d => {
      if (d.id === discussion.id) {
        return {
          ...d,
          replies: d.replies + 1,
          comments: [...d.comments, newComment]
        };
      }
      return d;
    }));
    
    setComment("");
    
    toast({
      title: "Comment added",
      description: "Your comment has been posted successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up" duration="normal">
            {/* Back Navigation */}
            <div className="mb-6">
              <Link to="/community" className="flex items-center text-primary hover:underline">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Community
              </Link>
            </div>
            
            {/* Discussion Header */}
            <div className="bg-white dark:bg-stargaze-900 border border-stargaze-100 dark:border-stargaze-800 rounded-xl shadow-subtle p-6 mb-6">
              <div className="mb-2 flex items-center gap-2 flex-wrap">
                <span className="bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-700 dark:text-stargaze-300 text-xs px-2 py-0.5 rounded-full">
                  {discussion.category}
                </span>
                {discussion.isPopular && (
                  <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
                {discussion.title}
              </h1>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img 
                    src={discussion.author.avatar} 
                    alt={discussion.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{discussion.author.name}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="px-2 h-7 font-normal text-xs ml-1"
                        onClick={() => handleFollowUser(discussion.author.id)}
                      >
                        {discussion.author.isFollowing ? "Following" : "Follow"}
                      </Button>
                    </div>
                    <div className="text-sm text-stargaze-500">
                      {new Date(discussion.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    className={cn(
                      "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm",
                      "border border-stargaze-200 dark:border-stargaze-700",
                      discussion.isUpvoted 
                        ? "bg-primary/10 text-primary border-primary/20" 
                        : "hover:bg-stargaze-50 dark:hover:bg-stargaze-800"
                    )}
                    onClick={handleUpvotePost}
                  >
                    <ThumbsUp className={cn(
                      "h-4 w-4",
                      discussion.isUpvoted ? "fill-primary text-primary" : ""
                    )} />
                    <span>{discussion.upvotes}</span>
                  </button>
                </div>
              </div>
              
              <div className="prose dark:prose-invert max-w-none mb-6">
                <p className="whitespace-pre-wrap text-stargaze-700 dark:text-stargaze-300">
                  {discussion.content}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4 border-t border-stargaze-100 dark:border-stargaze-800">
                <button className="flex items-center gap-1.5 text-stargaze-500 hover:text-primary">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">Save</span>
                </button>
                <button className="flex items-center gap-1.5 text-stargaze-500 hover:text-primary">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm">Share</span>
                </button>
                <button className="flex items-center gap-1.5 text-stargaze-500 hover:text-primary">
                  <Flag className="h-4 w-4" />
                  <span className="text-sm">Report</span>
                </button>
              </div>
            </div>
            
            {/* Comments Section */}
            <div className="bg-white dark:bg-stargaze-900 border border-stargaze-100 dark:border-stargaze-800 rounded-xl shadow-subtle mb-6">
              <div className="p-6 border-b border-stargaze-100 dark:border-stargaze-800">
                <h2 className="text-xl font-bold">
                  {discussion.replies} {discussion.replies === 1 ? 'Comment' : 'Comments'}
                </h2>
              </div>
              
              {/* Add Comment */}
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Add Your Comment</h3>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your thoughts or advice..."
                  className="mb-4 min-h-[120px]"
                />
                <div className="flex justify-end">
                  <Button onClick={handleAddComment}>Post Comment</Button>
                </div>
              </div>
              
              {/* Comment List */}
              <div className="divide-y divide-stargaze-100 dark:divide-stargaze-800">
                {discussion.comments.map((comment) => (
                  <div key={comment.id} className="p-6">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3 mb-3">
                        <img 
                          src={comment.author.avatar} 
                          alt={comment.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="font-medium">{comment.author.name}</span>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="px-2 h-6 font-normal text-xs ml-1"
                              onClick={() => handleFollowUser(comment.author.id)}
                            >
                              {comment.author.isFollowing ? "Following" : "Follow"}
                            </Button>
                          </div>
                          <div className="text-xs text-stargaze-500">
                            {new Date(comment.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        className={cn(
                          "flex items-center gap-1 h-8 px-3 py-1 rounded-full text-sm",
                          "border border-stargaze-200 dark:border-stargaze-700",
                          comment.isUpvoted 
                            ? "bg-primary/10 text-primary border-primary/20" 
                            : "hover:bg-stargaze-50 dark:hover:bg-stargaze-800"
                        )}
                        onClick={() => handleUpvoteComment(comment.id)}
                      >
                        <ThumbsUp className={cn(
                          "h-4 w-4",
                          comment.isUpvoted ? "fill-primary text-primary" : ""
                        )} />
                        <span>{comment.upvotes}</span>
                      </button>
                    </div>
                    
                    <div className="pl-11">
                      <p className="text-stargaze-700 dark:text-stargaze-300">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))}
                
                {discussion.comments.length === 0 && (
                  <div className="p-6 text-center">
                    <p className="text-stargaze-500">No comments yet. Be the first to share your thoughts!</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Related Discussions */}
            <div className="bg-white dark:bg-stargaze-900 border border-stargaze-100 dark:border-stargaze-800 rounded-xl shadow-subtle p-6">
              <h2 className="text-xl font-bold mb-4">Related Discussions</h2>
              
              <div className="space-y-4">
                {discussions
                  .filter(d => d.id !== discussion.id)
                  .map(d => (
                    <Link key={d.id} to={`/discussion/${d.id}`}>
                      <div className="p-4 border border-stargaze-100 dark:border-stargaze-800 rounded-lg hover:bg-stargaze-50 dark:hover:bg-stargaze-800/50 transition-colors">
                        <h3 className="font-medium text-stargaze-900 dark:text-white mb-2">
                          {d.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-stargaze-500">{d.author.name}</span>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-stargaze-500">
                              <MessageCircle className="h-4 w-4" />
                              <span>{d.replies}</span>
                            </div>
                            <div className="flex items-center gap-1 text-stargaze-500">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{d.upvotes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DiscussionDetail;
