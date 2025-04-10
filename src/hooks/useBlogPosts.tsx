
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

// Mock data
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Scale Your SaaS Startup: Lessons from the Trenches",
    content: "## Introduction\n\nScaling a SaaS startup is a challenging but rewarding journey. In this article, I'll share some lessons I've learned while scaling multiple SaaS companies from zero to millions in ARR.\n\n## 1. Focus on Product-Market Fit\n\nBefore you even think about scaling, make sure you've achieved product-market fit. This means your product effectively solves a real problem for a specific market segment, and customers are willing to pay for it.\n\n## 2. Build a Scalable Infrastructure\n\nYour technical infrastructure needs to be able to handle growth. This includes:\n\n- Using cloud services that can scale\n- Implementing proper monitoring and alerting\n- Designing your database for performance\n\n## 3. Create Repeatable Processes\n\nAs you grow, you need standardized processes for:\n\n- Customer onboarding\n- Support and success\n- Sales and marketing\n\n## Conclusion\n\nScaling is never easy, but by focusing on these key areas, you can avoid many common pitfalls and set your startup up for sustainable growth.",
    excerpt: "Learn practical strategies for scaling your SaaS startup from someone who's been there. Discover the key pillars that will help you achieve sustainable growth.",
    authorId: "author-1",
    authorName: "Sarah Johnson",
    status: "published",
    createdAt: "2023-08-15T14:30:00.000Z",
    updatedAt: "2023-08-20T09:15:00.000Z",
    publishedAt: "2023-08-20T09:15:00.000Z",
    tags: ["SaaS", "Startups", "Growth"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "2",
    title: "Building an Effective Mentorship Program for Your Startup",
    content: "# Building an Effective Mentorship Program\n\nA strong mentorship program can accelerate learning and growth in your organization. Here's how to build one.\n\n## Identify Goals\n\nStart by clarifying what you want to achieve with the mentorship program. Is it to:\n\n- Onboard new employees faster?\n- Develop leadership skills?\n- Share specific domain knowledge?\n\n## Match Mentors and Mentees\n\nThe matching process is crucial. Consider:\n\n- Skill gaps that need to be addressed\n- Personality compatibility\n- Career goals and interests\n\n## Establish Structure\n\nA good mentorship program has clear:\n\n- Meeting cadences (weekly, biweekly)\n- Progress tracking methods\n- Expected outcomes\n\nBy following these principles, you can create a mentorship program that delivers real value.",
    excerpt: "Discover how to implement a mentorship program that accelerates growth and knowledge sharing in your startup. Learn practical steps for matching mentors and mentees effectively.",
    authorId: "author-1",
    authorName: "Sarah Johnson",
    status: "draft",
    createdAt: "2023-09-05T10:45:00.000Z",
    updatedAt: "2023-09-07T16:20:00.000Z",
    publishedAt: null,
    tags: ["Mentorship", "Team Building", "Leadership"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchPosts = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog posts");
        setLoading(false);
        toast({
          title: "Error",
          description: "Failed to fetch blog posts",
          variant: "destructive"
        });
      }
    };
    
    fetchPosts();
  }, [toast]);
  
  const savePost = async (post: BlogPost): Promise<BlogPost> => {
    // In a real app, this would be an API call
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      let updatedPosts;
      
      if (post.id) {
        // Update existing post
        updatedPosts = posts.map(p => p.id === post.id ? { ...post } : p);
      } else {
        // Create new post
        const newPost = {
          ...post,
          id: `post-${Date.now()}`,
          createdAt: new Date().toISOString()
        };
        updatedPosts = [...posts, newPost];
      }
      
      setPosts(updatedPosts);
      return post;
    } catch (err) {
      throw new Error("Failed to save blog post");
    }
  };
  
  const publishPost = async (post: BlogPost): Promise<BlogPost> => {
    // Similar to savePost, but ensures the post is marked as published
    return savePost({
      ...post,
      status: "published",
      publishedAt: post.publishedAt || new Date().toISOString()
    });
  };
  
  const deletePost = async (postId: string): Promise<void> => {
    // In a real app, this would be an API call
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedPosts = posts.filter(p => p.id !== postId);
      setPosts(updatedPosts);
    } catch (err) {
      throw new Error("Failed to delete blog post");
    }
  };
  
  return {
    posts,
    loading,
    error,
    savePost,
    publishPost,
    deletePost
  };
};
