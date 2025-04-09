
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, BookOpen, Code, DollarSign, Layers, Lock, PlayCircle, Target, Users } from "lucide-react";

export const FounderLearningPaths = () => {
  // Sample data - in a real app, this would come from an API
  const learningPaths = [
    {
      id: "1",
      title: "First Fundraise",
      description: "Learn how to prepare for and execute your first fundraising round",
      progress: 60,
      modules: 5,
      completedModules: 3,
      estimatedHours: 8,
      category: "Fundraising",
      icon: DollarSign,
      featured: true
    },
    {
      id: "2",
      title: "Product-Market Fit",
      description: "Validate your product with real users and iterate based on feedback",
      progress: 25,
      modules: 4,
      completedModules: 1,
      estimatedHours: 6,
      category: "Product",
      icon: Target,
      featured: false
    },
    {
      id: "3",
      title: "Building Your MVP",
      description: "Create a minimum viable product that demonstrates your value proposition",
      progress: 0,
      modules: 6,
      completedModules: 0,
      estimatedHours: 10,
      category: "Product",
      icon: Code,
      featured: false
    },
    {
      id: "4",
      title: "Customer Acquisition",
      description: "Learn strategies to attract and retain your first customers",
      progress: 0,
      modules: 5,
      completedModules: 0,
      estimatedHours: 7,
      category: "Marketing",
      icon: Users,
      locked: true,
      featured: false
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white">Learning Paths</h2>
        <div className="flex gap-3">
          <Button variant="outline">Browse All</Button>
          <Button>
            <BookOpen className="h-4 w-4 mr-2" />
            Continue Learning
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {learningPaths.map(path => (
          <Card key={path.id} className={`overflow-hidden ${path.featured ? 'border-primary/50' : ''}`}>
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className={`h-10 w-10 rounded-full ${path.featured ? 'bg-primary/10 text-primary' : 'bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-500 dark:text-stargaze-400'} flex items-center justify-center mr-3`}>
                    <path.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl flex items-center">
                      {path.title}
                      {path.featured && <Badge className="ml-2 bg-primary/20 text-primary border-0">Featured</Badge>}
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm">{path.category} • {path.estimatedHours} hours</CardDescription>
                  </div>
                </div>
                {path.locked && (
                  <Lock className="h-5 w-5 text-stargaze-400 dark:text-stargaze-500" />
                )}
              </div>
            </CardHeader>
            
            <CardContent className="pb-4">
              <p className="text-sm text-stargaze-600 dark:text-stargaze-300 mb-4">{path.description}</p>
              
              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">{path.completedModules} of {path.modules} modules completed</span>
                  <span className="text-sm font-semibold">{path.progress}%</span>
                </div>
                <div className="w-full bg-stargaze-100 dark:bg-stargaze-800 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${path.locked ? 'bg-stargaze-300' : path.progress > 0 ? 'bg-primary' : 'bg-stargaze-200 dark:bg-stargaze-700'}`} 
                    style={{ width: `${path.progress}%` }}
                  ></div>
                </div>
              </div>
              
              {path.completedModules > 0 && (
                <p className="text-xs text-stargaze-500 dark:text-stargaze-400">
                  Last activity: 3 days ago
                </p>
              )}
            </CardContent>
            
            <CardFooter className="pt-2">
              {path.locked ? (
                <Button variant="outline" className="w-full" disabled>
                  <Lock className="h-4 w-4 mr-2" />
                  Unlock Path
                </Button>
              ) : path.progress > 0 ? (
                <Button className="w-full">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Continue Learning
                </Button>
              ) : (
                <Button variant="outline" className="w-full">
                  Start Path
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
