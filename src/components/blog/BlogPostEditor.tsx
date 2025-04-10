
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RichTextEditor } from "@/components/blog/RichTextEditor";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useToast } from "@/components/ui/use-toast";
import { Save, Eye, Send, ImageIcon, Tag as TagIcon } from "lucide-react";
import { BlogPost } from "@/types/BlogPost";

interface BlogPostEditorProps {
  post: BlogPost;
  onSaveComplete: () => void;
}

export const BlogPostEditor = ({ post, onSaveComplete }: BlogPostEditorProps) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [excerpt, setExcerpt] = useState(post.excerpt || "");
  const [image, setImage] = useState(post.image || "");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>(post.tags || []);
  const [saving, setSaving] = useState(false);
  
  const { savePost, publishPost } = useBlogPosts();
  const { toast } = useToast();
  
  const handleSaveDraft = async () => {
    if (!title) {
      toast({
        title: "Error",
        description: "Title is required",
        variant: "destructive"
      });
      return;
    }
    
    setSaving(true);
    
    try {
      await savePost({
        ...post,
        title,
        content,
        excerpt,
        image,
        tags,
        status: "draft",
        updatedAt: new Date().toISOString()
      });
      
      toast({
        title: "Draft saved",
        description: "Your blog post has been saved as a draft."
      });
      
      onSaveComplete();
    } catch (error) {
      toast({
        title: "Error saving draft",
        description: "There was an error saving your draft.",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };
  
  const handlePublish = async () => {
    if (!title || !content || !excerpt) {
      toast({
        title: "Error",
        description: "Title, content and excerpt are required for publishing",
        variant: "destructive"
      });
      return;
    }
    
    setSaving(true);
    
    try {
      await publishPost({
        ...post,
        title,
        content,
        excerpt,
        image,
        tags,
        status: "published",
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString()
      });
      
      toast({
        title: "Post published",
        description: "Your blog post has been published successfully."
      });
      
      onSaveComplete();
    } catch (error) {
      toast({
        title: "Error publishing",
        description: "There was an error publishing your post.",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };
  
  const handlePreview = () => {
    // This would open a preview modal or navigate to a preview page
    toast({
      title: "Preview",
      description: "Preview functionality will be implemented in future updates."
    });
  };
  
  const addTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };
  
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-lg">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl mt-1"
              placeholder="Enter a title for your blog post"
            />
          </div>
          
          <div>
            <Label htmlFor="excerpt" className="text-lg">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="mt-1"
              placeholder="Write a brief summary of your post (will appear in previews)"
            />
          </div>
          
          <div>
            <Label htmlFor="image" className="text-lg">Cover Image URL</Label>
            <div className="flex gap-2 mt-1">
              <Input
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Enter an image URL"
              />
              <Button variant="outline" size="icon">
                <ImageIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <Label htmlFor="tags" className="text-lg">Tags</Label>
            <div className="flex gap-2 mt-1">
              <Input
                id="tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Add tags..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addTag();
                  }
                }}
              />
              <Button onClick={addTag} variant="outline">
                <TagIcon className="h-4 w-4 mr-2" /> Add
              </Button>
            </div>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <div 
                    key={tag}
                    className="bg-secondary/30 text-secondary-foreground px-2 py-1 rounded-md text-sm flex items-center"
                  >
                    {tag}
                    <button 
                      onClick={() => removeTag(tag)}
                      className="ml-2 text-secondary-foreground/70 hover:text-secondary-foreground"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <Label htmlFor="content" className="text-lg">Content</Label>
            <div className="mt-2 border rounded-md overflow-hidden">
              <RichTextEditor 
                value={content} 
                onChange={setContent}
              />
            </div>
          </div>
        </div>
      </Card>
      
      <div className="flex flex-wrap gap-3 justify-end">
        <Button 
          variant="outline" 
          onClick={handlePreview}
        >
          <Eye className="h-4 w-4 mr-2" /> Preview
        </Button>
        <Button 
          variant="outline" 
          onClick={handleSaveDraft} 
          disabled={saving || !title}
        >
          <Save className="h-4 w-4 mr-2" /> Save Draft
        </Button>
        <Button 
          onClick={handlePublish} 
          disabled={saving || !title || !content || !excerpt}
        >
          <Send className="h-4 w-4 mr-2" /> Publish
        </Button>
      </div>
    </div>
  );
};
