import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { ArrowLeft, Calendar, User, Clock, Tag as TagIcon } from "lucide-react";
import { BlogPost as BlogPostType } from "@/types/BlogPost";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { posts } = useBlogPosts();
  const [post, setPost] = useState<BlogPostType | null>(null);
  
  useEffect(() => {
    if (id && posts.length > 0) {
      const foundPost = posts.find(p => p.id === id);
      if (foundPost) {
        setPost(foundPost);
      }
    }
  }, [id, posts]);
  
  const renderMarkdown = (markdown: string) => {
    let html = markdown
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-6 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-5 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^\- (.*$)/gm, '<li>$1</li>')
      .replace(/<\/li>\n<li>/g, '</li><li>')
      .replace(/<\/li>\n/g, '</li></ul>\n')
      .replace(/^\<li\>/gm, '<ul class="list-disc pl-6 mb-4"><li>')
      .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
      .replace(/^\<li\>/gm, '<ol class="list-decimal pl-6 mb-4"><li>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-primary hover:underline">$1</a>')
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="my-4 rounded-lg max-w-full h-auto" />')
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-muted p-4 rounded-md overflow-x-auto mb-4"><code>$1</code></pre>')
      .replace(/^\> (.*$)/gm, '<blockquote class="border-l-4 border-primary pl-4 italic my-4">$1</blockquote>')
      .replace(/^(?!<[a-z]).+$/gm, function(match) {
        if (match.trim() === '') return '';
        return '<p class="mb-4">' + match + '</p>';
      })
      .replace(/<p><(h|ul|ol|blockquote)/g, '<$1')
      .replace(/<\/(h\d|ul|ol|blockquote)><\/p>/g, '</$1>');
    
    return html;
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
              <p className="mt-4 text-muted-foreground">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Button asChild className="mt-6">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-6">
            <div className="flex items-center">
              <Button variant="ghost" asChild>
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            {post.image && (
              <div className="mb-8 rounded-xl overflow-hidden h-72 md:h-96">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="flex items-center">
                    <TagIcon className="h-3 w-3 mr-1" /> {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-stargaze-500 dark:text-stargaze-400 mb-8">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.authorName}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.publishedAt 
                    ? new Date(post.publishedAt).toLocaleDateString() 
                    : new Date(post.updatedAt).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {Math.ceil(post.content.length / 1000)} min read
                </div>
              </div>
              
              <div 
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
              />
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
