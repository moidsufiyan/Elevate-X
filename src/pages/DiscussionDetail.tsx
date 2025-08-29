import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  MessageSquare,
  ThumbsUp,
  Users,
  Clock,
  Pin,
  CheckCircle,
  Send,
  Tag,
  Calendar,
} from "lucide-react";
import {
  getDiscussionById,
  getRepliesByDiscussionId,
} from "@/data/communities";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";

const DiscussionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const discussion = id ? getDiscussionById(id) : null;
  const replies = id ? getRepliesByDiscussionId(id) : [];
  const [newReply, setNewReply] = useState("");
  const [localReplies, setLocalReplies] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleReplySubmit = () => {
    if (!newReply.trim()) return;

    const reply = {
      id: Date.now().toString(),
      discussionId: id,
      content: newReply,
      author: {
        id: "current-user",
        name: "You",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        role: "Community Member",
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      isAccepted: false,
    };

    setLocalReplies([...localReplies, reply]);
    setNewReply("");
  };

  if (!discussion) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
              Discussion Not Found
            </h1>
            <p className="text-stargaze-600 dark:text-stargaze-400 mb-8">
              The discussion you're looking for doesn't exist or has been
              removed.
            </p>
            <Button onClick={() => navigate("/community")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Community
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const allReplies = [...replies, ...localReplies];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`${discussion.title} | ElevateX Community`}
        description={discussion.content.substring(0, 160)}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/community")}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Community
          </Button>

          <div className="space-y-8">
            {/* Discussion Header */}
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        {discussion.isPinned && (
                          <Badge variant="default" className="gap-1">
                            <Pin className="h-3 w-3" />
                            Pinned
                          </Badge>
                        )}
                        {discussion.isSolved && (
                          <Badge variant="secondary" className="gap-1">
                            <CheckCircle className="h-3 w-3" />
                            Solved
                          </Badge>
                        )}
                        <Badge variant="outline">{discussion.category}</Badge>
                      </div>

                      <h1 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-4">
                        {discussion.title}
                      </h1>

                      <div className="flex items-center gap-4 text-sm text-stargaze-600 dark:text-stargaze-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={discussion.author.avatar} />
                            <AvatarFallback>
                              {discussion.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span>{discussion.author.name}</span>
                          <span className="text-stargaze-400">•</span>
                          <span>{discussion.author.role}</span>
                          {discussion.author.company && (
                            <>
                              <span className="text-stargaze-400">at</span>
                              <span>{discussion.author.company}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-stargaze-600 dark:text-stargaze-400 mb-6">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(discussion.createdAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {discussion.replies + localReplies.length} replies
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {discussion.likes} likes
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {discussion.views} views
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-stargaze dark:prose-invert max-w-none">
                    <p className="text-stargaze-700 dark:text-stargaze-300 leading-relaxed text-lg whitespace-pre-wrap">
                      {discussion.content}
                    </p>
                  </div>

                  {discussion.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-stargaze-100 dark:border-stargaze-800">
                      {discussion.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="gap-1">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-stargaze-100 dark:border-stargaze-800">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      Like ({discussion.likes})
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Reply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Replies Section */}
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Replies ({allReplies.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {allReplies.length === 0 ? (
                    <div className="text-center py-8">
                      <MessageSquare className="h-12 w-12 text-stargaze-400 mx-auto mb-4" />
                      <p className="text-stargaze-600 dark:text-stargaze-400">
                        No replies yet. Be the first to contribute!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {allReplies.map((reply, index) => (
                        <div key={reply.id}>
                          <div className="flex items-start gap-4">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={reply.author.avatar} />
                              <AvatarFallback>
                                {reply.author.name
                                  .split(" ")
                                  .map((n: string) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-semibold text-stargaze-900 dark:text-white">
                                  {reply.author.name}
                                </span>
                                <span className="text-sm text-stargaze-500">
                                  {reply.author.role}
                                </span>
                                {reply.author.company && (
                                  <>
                                    <span className="text-sm text-stargaze-400">
                                      at
                                    </span>
                                    <span className="text-sm text-stargaze-500">
                                      {reply.author.company}
                                    </span>
                                  </>
                                )}
                                {reply.isAccepted && (
                                  <Badge
                                    variant="default"
                                    className="text-xs gap-1"
                                  >
                                    <CheckCircle className="h-3 w-3" />
                                    Accepted Answer
                                  </Badge>
                                )}
                              </div>

                              <div className="prose prose-stargaze dark:prose-invert max-w-none mb-3">
                                <p className="text-stargaze-700 dark:text-stargaze-300 leading-relaxed whitespace-pre-wrap">
                                  {reply.content}
                                </p>
                              </div>

                              <div className="flex items-center gap-4 text-sm text-stargaze-600 dark:text-stargaze-400">
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {new Date(
                                    reply.createdAt
                                  ).toLocaleDateString()}
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="gap-1 h-auto p-1"
                                >
                                  <ThumbsUp className="h-3 w-3" />
                                  {reply.likes}
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="gap-1 h-auto p-1"
                                >
                                  Reply
                                </Button>
                              </div>
                            </div>
                          </div>
                          {index < allReplies.length - 1 && (
                            <Separator className="mt-6" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Reply Form */}
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle>Add Your Reply</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Share your thoughts, experiences, or advice..."
                      value={newReply}
                      onChange={(e) => setNewReply(e.target.value)}
                      rows={4}
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                        Be respectful and constructive in your response.
                      </p>
                      <Button
                        onClick={handleReplySubmit}
                        disabled={!newReply.trim()}
                        className="gap-2"
                      >
                        <Send className="h-4 w-4" />
                        Post Reply
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Related Discussions */}
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle>Related Discussions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Mock related discussions */}
                    <div className="p-4 bg-stargaze-50 dark:bg-stargaze-800 rounded-lg">
                      <h4 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                        Best practices for MVP development in Indian market?
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-stargaze-600 dark:text-stargaze-400">
                        <span>15 replies</span>
                        <span>•</span>
                        <span>2 days ago</span>
                      </div>
                    </div>
                    <div className="p-4 bg-stargaze-50 dark:bg-stargaze-800 rounded-lg">
                      <h4 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                        How to validate startup ideas with limited budget?
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-stargaze-600 dark:text-stargaze-400">
                        <span>23 replies</span>
                        <span>•</span>
                        <span>5 days ago</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiscussionDetail;
