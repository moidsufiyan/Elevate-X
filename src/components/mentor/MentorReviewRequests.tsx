
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Calendar, Clock, ExternalLink, ChevronRight, 
  CheckCircle, AlertCircle, HelpCircle, MessageSquare 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

// Sample data for mentorship requests
const reviewRequests = [
  {
    id: "1",
    startupName: "GreenTech Solutions",
    requestType: "Pitch Deck Review",
    industry: "Clean Energy",
    requestedOn: "2023-10-15",
    deadline: "2023-10-22",
    status: "pending",
    description: "We're preparing for our seed round and would appreciate feedback on our pitch deck, especially regarding our go-to-market strategy and financial projections."
  },
  {
    id: "2",
    startupName: "MediConnect",
    requestType: "Business Model Feedback",
    industry: "Healthcare",
    requestedOn: "2023-10-14",
    deadline: "2023-10-21",
    status: "pending",
    description: "We've pivoted our business model recently and would like your insights on our new B2B approach targeting small clinics."
  },
  {
    id: "3",
    startupName: "DataSense AI",
    requestType: "Product Strategy",
    industry: "AI/Machine Learning",
    requestedOn: "2023-10-12",
    deadline: "2023-10-19",
    status: "pending",
    description: "We need guidance on prioritizing our product roadmap features as we prepare for our public beta launch next month."
  },
  {
    id: "4",
    startupName: "EduLearn",
    requestType: "Marketing Strategy",
    industry: "Education",
    requestedOn: "2023-10-10",
    deadline: "2023-10-17",
    status: "pending",
    description: "We're struggling with customer acquisition costs and would like advice on optimizing our marketing channels and messaging."
  },
  {
    id: "5",
    startupName: "FinEase",
    requestType: "Financial Model Review",
    industry: "Fintech",
    requestedOn: "2023-10-08",
    deadline: "2023-10-15",
    status: "pending",
    description: "We need help validating our financial projections and unit economics before our meeting with potential investors next week."
  }
];

export const MentorReviewRequests = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-500";
      case "completed":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500";
      case "rejected":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-500";
      default:
        return "bg-stargaze-100 text-stargaze-700 dark:bg-stargaze-800 dark:text-stargaze-300";
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">
          Review Requests
        </h3>
        
        <div className="flex space-x-2">
          <Button 
            variant={filter === "all" ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button 
            variant={filter === "pending" ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilter("pending")}
          >
            Pending
          </Button>
          <Button 
            variant={filter === "completed" ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilter("completed")}
          >
            Completed
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        {reviewRequests.map((request) => (
          <div 
            key={request.id} 
            className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-stargaze-900 dark:text-white mb-1">
                    {request.startupName}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge className={getStatusColor(request.status)}>
                      {request.status === "pending" && "Pending Review"}
                      {request.status === "completed" && "Completed"}
                      {request.status === "rejected" && "Declined"}
                    </Badge>
                    <span className="text-sm text-stargaze-500 dark:text-stargaze-400">
                      {request.industry}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">
                    Provide Feedback
                  </Button>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="font-medium text-stargaze-900 dark:text-white mb-2">
                  {request.requestType}
                </h5>
                <p className="text-stargaze-600 dark:text-stargaze-300 text-sm">
                  {request.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stargaze-500 dark:text-stargaze-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>Requested: {new Date(request.requestedOn).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1.5" />
                  <span>Deadline: {new Date(request.deadline).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
