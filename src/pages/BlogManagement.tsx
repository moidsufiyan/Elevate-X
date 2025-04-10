
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogPostList } from "@/components/blog/BlogPostList";
import { BlogPostEditor } from "@/components/blog/BlogPostEditor";
import { SEO } from "@/components/SEO";
import { Plus, FileText, Settings } from "lucide-react";
import { BlogPost } from "@/types/BlogPost";

const BlogManagement = () => {
  const [activeTab, setActiveTab] = useState("my-posts");
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  
  const handleCreateNew = () => {
    setEditingPost({
      id: "",
      title: "",
      content: "",
      excerpt: "",
      authorId: "current-user-id", // This would be replaced with actual user ID
      authorName: "Current User", // This would be replaced with actual user name
      status: "draft",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: null,
      tags: [],
      image: ""
    });
    setActiveTab("editor");
  };
  
  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setActiveTab("editor");
  };
  
  const handleSaveComplete = () => {
    setEditingPost(null);
    setActiveTab("my-posts");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Blog Management"
        description="Create and manage your blog posts, share your expertise with the community."
        ogType="website"
      />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-stargaze-900 dark:text-white">
                  Blog Management
                </h1>
                <p className="text-stargaze-600 dark:text-stargaze-300 mt-2">
                  Share your expertise with the community by writing articles
                </p>
              </div>
              
              <Button onClick={handleCreateNew} className="self-start">
                <Plus className="mr-2 h-4 w-4" /> New Article
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 w-full sm:w-auto">
                <TabsTrigger value="my-posts" className="text-sm md:text-base">
                  <FileText className="h-4 w-4 mr-2" />
                  My Posts
                </TabsTrigger>
                <TabsTrigger value="editor" disabled={!editingPost} className="text-sm md:text-base">
                  Editor
                </TabsTrigger>
                <TabsTrigger value="settings" className="text-sm md:text-base">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="my-posts">
                <BlogPostList onEditPost={handleEditPost} />
              </TabsContent>
              
              <TabsContent value="editor">
                {editingPost && (
                  <BlogPostEditor 
                    post={editingPost} 
                    onSaveComplete={handleSaveComplete}
                  />
                )}
              </TabsContent>
              
              <TabsContent value="settings">
                <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 shadow-subtle">
                  <h2 className="text-xl font-bold mb-4">Blog Settings</h2>
                  <p className="text-stargaze-600 dark:text-stargaze-300">
                    Configure your blog author profile and preferences.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-stargaze-500 dark:text-stargaze-400">
                      This section will be expanded in future updates.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogManagement;
