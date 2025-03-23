import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Video, Users, MessageSquare, Edit, Eye, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// Sample data for content contributions
const contentItems = [
  {
    id: "1",
    title: "10 Essential Metrics Every SaaS Startup Should Track",
    type: "article",
    status: "published",
    createdAt: "2023-09-15",
    views: 342,
    comments: 8,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "2",
    title: "How to Create a Compelling Investor Pitch",
    type: "webinar",
    status: "scheduled",
    scheduledFor: "2023-11-10",
    time: "2:00 PM",
    registrations: 56,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "3",
    title: "The Ultimate Guide to Customer Acquisition for Early-Stage Startups",
    type: "guide",
    status: "draft",
    lastEdited: "2023-10-18",
    completionPercentage: 75,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

// Content ideas that mentors can choose to create
const contentIdeas = [
  {
    title: "Financial Modeling for Seed-Stage Startups",
    type: "guide",
    description: "A comprehensive guide to creating financial projections that investors will take seriously."
  },
  {
    title: "How to Build a Minimum Viable Product",
    type: "webinar",
    description: "Practical strategies for creating an MVP that validates your business idea without breaking the bank."
  },
  {
    title: "Marketing Channels That Work for B2B Startups",
    type: "article",
    description: "Analysis of the most effective marketing channels for B2B startups based on industry and target audience."
  }
];

export const MentorContentHub = () => {
  const [filter, setFilter] = useState("all");
  
  const getContentIcon = (type: string) => {
    switch (type) {
      case "article":
        return <FileText className="h-6 w-6" />;
      case "webinar":
        return <Video className="h-6 w-6" />;
      case "guide":
        return <FileText className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500">Published</Badge>;
      case "draft":
        return <Badge className="bg-stargaze-100 text-stargaze-700 dark:bg-stargaze-800 dark:text-stargaze-300">Draft</Badge>;
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-500">Scheduled</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">
          Your Content Hub
        </h3>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={() => setFilter("all")}>
            All
          </Button>
          <Button variant="outline" size="sm" onClick={() => setFilter("article")}>
            Articles
          </Button>
          <Button variant="outline" size="sm" onClick={() => setFilter("webinar")}>
            Webinars
          </Button>
          <Button variant="outline" size="sm" onClick={() => setFilter("guide")}>
            Guides
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Create New Content Card */}
        <div className="border border-dashed border-stargaze-200 dark:border-stargaze-700 rounded-xl p-6 flex flex-col items-center justify-center text-center h-80">
          <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
            <FileText className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-semibold text-stargaze-900 dark:text-white mb-2">
            Create New Content
          </h4>
          <p className="text-stargaze-600 dark:text-stargaze-400 text-sm mb-6">
            Share your expertise by creating articles, guides, or hosting webinars for the startup community.
          </p>
          <Button>Create Content</Button>
        </div>
        
        {/* Existing Content Cards */}
        {contentItems.map((item) => (
          <div key={item.id} className="bg-white dark:bg-stargaze-900 border border-stargaze-100 dark:border-stargaze-800 rounded-xl overflow-hidden shadow-subtle h-80 flex flex-col">
            <div className="h-36 relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                {getStatusBadge(item.status)}
              </div>
              <div className="absolute top-3 right-3">
                <Badge className="bg-white/90 dark:bg-stargaze-800/90 text-stargaze-700 dark:text-stargaze-300">
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </Badge>
              </div>
            </div>
            
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="text-stargaze-900 dark:text-white font-semibold line-clamp-2 mb-2">
                {item.title}
              </h4>
              
              <div className="mt-auto">
                {item.status === "published" && (
                  <div className="flex justify-between text-sm text-stargaze-500 dark:text-stargaze-400 mb-3">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{item.views} views</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>{item.comments} comments</span>
                    </div>
                  </div>
                )}
                
                {item.status === "scheduled" && (
                  <div className="flex justify-between text-sm text-stargaze-500 dark:text-stargaze-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(item.scheduledFor).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                )}
                
                {item.status === "draft" && (
                  <div className="mb-3">
                    <div className="w-full bg-stargaze-100 dark:bg-stargaze-800 rounded-full h-1.5">
                      <div 
                        className="bg-primary h-1.5 rounded-full" 
                        style={{ width: `${item.completionPercentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-stargaze-500 dark:text-stargaze-400 mt-1">
                      {item.completionPercentage}% complete
                    </div>
                  </div>
                )}
                
                <div className="flex space-x-2">
                  {item.status === "draft" && (
                    <Button size="sm" className="flex-1">
                      <Edit className="h-4 w-4 mr-2" />
                      Continue Editing
                    </Button>
                  )}
                  
                  {item.status === "published" && (
                    <>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </>
                  )}
                  
                  {item.status === "scheduled" && (
                    <Button size="sm" className="flex-1">
                      <Users className="h-4 w-4 mr-2" />
                      {item.registrations} Registered
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Content Ideas Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-6">
          Content Ideas for Mentors
        </h3>
        
        <div className="bg-stargaze-50 dark:bg-stargaze-900/50 rounded-xl p-6">
          <p className="text-stargaze-600 dark:text-stargaze-300 mb-6">
            Here are some suggested topics that startups are interested in learning more about. Consider creating content on these topics to help the community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contentIdeas.map((idea, index) => (
              <div key={index} className="bg-white dark:bg-stargaze-900 rounded-lg p-4 shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="flex items-start mb-3">
                  {idea.type === "article" && <FileText className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />}
                  {idea.type === "webinar" && <Video className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />}
                  {idea.type === "guide" && <FileText className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />}
                  <h4 className="font-medium text-stargaze-900 dark:text-white">{idea.title}</h4>
                </div>
                <p className="text-sm text-stargaze-600 dark:text-stargaze-300 mb-4">{idea.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Create This Content
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
