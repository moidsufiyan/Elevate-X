
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Edit, 
  Trash2, 
  MoreVertical, 
  Eye, 
  Calendar, 
  Clock, 
  Tag 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface BlogPostListProps {
  onEditPost: (post: BlogPost) => void;
}

export const BlogPostList = ({ onEditPost }: BlogPostListProps) => {
  const { posts, deletePost } = useBlogPosts();
  const { toast } = useToast();
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  
  const handleDelete = (postId: string) => {
    deletePost(postId);
    setPostToDelete(null);
    toast({
      title: "Post deleted",
      description: "Your blog post has been successfully deleted.",
    });
  };
  
  return (
    <div className="space-y-6">
      {posts.length === 0 ? (
        <div className="bg-white dark:bg-stargaze-900 rounded-xl p-8 text-center shadow-subtle">
          <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
          <p className="text-stargaze-600 dark:text-stargaze-300 mb-6">
            Create your first blog post to share your knowledge with the community
          </p>
        </div>
      ) : (
        posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {post.image && (
                <div className="md:col-span-1 h-48 md:h-auto">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className={`md:col-span-${post.image ? '3' : '4'} p-6`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <Badge variant={post.status === 'published' ? 'default' : 'outline'}>
                      {post.status === 'published' ? 'Published' : 'Draft'}
                    </Badge>
                    {post.tags.length > 0 && (
                      <div className="flex items-center mt-2 text-sm text-stargaze-500 dark:text-stargaze-400">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.tags.join(', ')}
                      </div>
                    )}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => onEditPost(post)}>
                        <Edit className="h-4 w-4 mr-2" /> Edit Post
                      </DropdownMenuItem>
                      <AlertDialog open={postToDelete === post.id} onOpenChange={
                        (open) => !open && setPostToDelete(null)
                      }>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => {
                            e.preventDefault();
                            setPostToDelete(post.id);
                          }}>
                            <Trash2 className="h-4 w-4 mr-2 text-destructive" /> Delete Post
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete your
                              post and remove it from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(post.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-stargaze-600 dark:text-stargaze-300 line-clamp-2 mb-4">
                  {post.excerpt || ''}
                </p>
                
                <CardFooter className="p-0 flex flex-wrap gap-4 text-sm text-stargaze-500 dark:text-stargaze-400">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </div>
                  {post.publishedAt && (
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      Published {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                  )}
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {Math.ceil(post.content.length / 1000)} min read
                  </div>
                </CardFooter>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <Button onClick={() => onEditPost(post)}>
                    <Edit className="h-4 w-4 mr-2" /> Edit
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};
