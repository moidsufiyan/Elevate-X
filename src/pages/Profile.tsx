
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Settings, 
  Bell, 
  Briefcase, 
  BookOpen, 
  MessageSquare, 
  Calendar,
  CheckCircle2,
  PenLine,
  Globe,
  Twitter,
  Linkedin,
  Link,
  Plus,
  ChevronRight,
  Activity,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";

// Sample user data
const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  title: "Founder & CEO",
  company: "TechFlow Solutions",
  location: "San Francisco, CA",
  bio: "Serial entrepreneur building innovative solutions for the future. Previously founded two successful startups in the B2B SaaS space.",
  avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
  website: "https://alexjohnson.com",
  twitter: "alexjtech",
  linkedin: "alexjohnson",
  profileSections: {
    basicInfo: true,
    companyDetails: true,
    bio: true,
    expertise: false,
    socialMedia: true,
    profilePicture: true
  },
  expertise: ["Product Strategy", "SaaS", "Fundraising"],
  connections: 143,
  mentorshipRequests: 2,
  helpfulReplies: 27
};

// Sample notification data
const notifications = [
  {
    id: "1",
    type: "mentorship",
    title: "New Mentorship Request",
    message: "Sarah Johnson would like to schedule a mentorship session with you.",
    time: "2 hours ago",
    read: false
  },
  {
    id: "2",
    type: "message",
    title: "New Message",
    message: "Michael Chen replied to your question about fundraising strategies.",
    time: "5 hours ago",
    read: false
  },
  {
    id: "3",
    type: "community",
    title: "Community Update",
    message: "Your post in SaaS Founders received 12 new replies.",
    time: "1 day ago",
    read: true
  },
  {
    id: "4",
    type: "mentorship",
    title: "Session Reminder",
    message: "Your mentorship session with Elena Rodriguez is scheduled for tomorrow at 2:00 PM.",
    time: "1 day ago",
    read: true
  },
  {
    id: "5",
    type: "system",
    title: "Profile Completion",
    message: "Complete your profile to get more visibility in the mentor matching system.",
    time: "3 days ago",
    read: true
  }
];

// Sample activity data
const activityData = [
  {
    id: "1",
    type: "community",
    title: "Posted in SaaS Founders",
    content: "How do you approach pricing for enterprise customers vs. SMBs?",
    time: "2 days ago",
    engagement: "8 replies"
  },
  {
    id: "2",
    type: "mentorship",
    title: "Mentorship Session Completed",
    content: "Session with David Park on Operations Optimization",
    time: "1 week ago",
    engagement: "5/5 rating"
  },
  {
    id: "3",
    type: "resource",
    title: "Downloaded Resource",
    content: "Ultimate Pitch Deck Template",
    time: "1 week ago",
    engagement: ""
  },
  {
    id: "4",
    type: "community",
    title: "Replied in E-commerce Growth",
    content: "Shared your experience with customer retention strategies.",
    time: "2 weeks ago",
    engagement: "3 upvotes"
  }
];

// Sample upcoming sessions
const upcomingSessions = [
  {
    id: "1",
    title: "Growth Marketing Strategy",
    with: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    date: "July 15, 2023",
    time: "10:00 AM - 11:00 AM PST"
  }
];

// Calculate profile completion percentage
const calculateProfileCompletion = (profile) => {
  const totalSections = Object.keys(profile.profileSections).length;
  const completedSections = Object.values(profile.profileSections).filter(Boolean).length;
  return Math.round((completedSections / totalSections) * 100);
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(userData);
  const [profileCompletionPercentage, setProfileCompletionPercentage] = useState(0);
  const [userNotifications, setUserNotifications] = useState(notifications);
  const [isEditingSocial, setIsEditingSocial] = useState(false);
  const [socialInputs, setSocialInputs] = useState({
    website: user.website || "",
    twitter: user.twitter || "",
    linkedin: user.linkedin || ""
  });
  
  // Calculate profile completion on component mount
  useEffect(() => {
    const percentage = calculateProfileCompletion(user);
    setProfileCompletionPercentage(percentage);
  }, [user]);
  
  // Handle notification read status
  const markAllNotificationsAsRead = () => {
    setUserNotifications(prev => 
      prev.map(notification => ({
        ...notification,
        read: true
      }))
    );
    toast.success("All notifications marked as read");
  };
  
  // Handle social media update
  const handleSocialInputChange = (field, value) => {
    setSocialInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const saveSocialMedia = () => {
    setUser(prev => ({
      ...prev,
      website: socialInputs.website,
      twitter: socialInputs.twitter,
      linkedin: socialInputs.linkedin,
      profileSections: {
        ...prev.profileSections,
        socialMedia: true
      }
    }));
    
    setIsEditingSocial(false);
    
    // Recalculate profile completion
    const updatedUser = {
      ...user,
      website: socialInputs.website,
      twitter: socialInputs.twitter,
      linkedin: socialInputs.linkedin,
      profileSections: {
        ...user.profileSections,
        socialMedia: true
      }
    };
    const percentage = calculateProfileCompletion(updatedUser);
    setProfileCompletionPercentage(percentage);
    
    toast.success("Social media links updated successfully");
  };
  
  // Count unread notifications
  const unreadCount = userNotifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column - Profile Sidebar */}
              <div className="lg:w-1/3 space-y-6">
                {/* Profile Card */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col items-center w-full">
                        <Avatar className="h-24 w-24 mb-4">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-2xl text-center">{user.name}</CardTitle>
                        <p className="text-sm text-center text-stargaze-600 dark:text-stargaze-400 mt-1">
                          {user.title} at {user.company}
                        </p>
                        <p className="text-xs text-center text-stargaze-500 mt-1">
                          {user.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    {/* Profile Completion Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium">Profile Completion</h3>
                        <span className="text-sm text-primary font-medium">{profileCompletionPercentage}%</span>
                      </div>
                      <Progress value={profileCompletionPercentage} className="h-2" />
                      {profileCompletionPercentage < 100 && (
                        <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Complete your profile to increase visibility
                        </p>
                      )}
                    </div>
                    
                    {/* Incomplete Profile Sections */}
                    {profileCompletionPercentage < 100 && (
                      <div className="bg-stargaze-50 dark:bg-stargaze-800/40 rounded-lg p-3 mb-6">
                        <h4 className="text-sm font-medium mb-2">Sections to Complete</h4>
                        <ul className="space-y-2 text-sm">
                          {!user.profileSections.expertise && (
                            <li className="flex justify-between items-center">
                              <span className="text-stargaze-600 dark:text-stargaze-400">Add your expertise</span>
                              <Button variant="ghost" size="sm" className="h-7 text-xs">
                                Add <Plus className="ml-1 h-3 w-3" />
                              </Button>
                            </li>
                          )}
                          {Object.entries(user.profileSections)
                            .filter(([_, completed]) => !completed)
                            .map(([section]) => (
                              <li key={section} className="flex justify-between items-center">
                                <span className="text-stargaze-600 dark:text-stargaze-400">
                                  {section.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                </span>
                                <Button variant="ghost" size="sm" className="h-7 text-xs">
                                  Add <Plus className="ml-1 h-3 w-3" />
                                </Button>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Social Media Links */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium">Social Links</h3>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-7"
                          onClick={() => setIsEditingSocial(!isEditingSocial)}
                        >
                          {isEditingSocial ? "Cancel" : <PenLine className="h-3 w-3" />}
                        </Button>
                      </div>
                      
                      {isEditingSocial ? (
                        <div className="space-y-3">
                          <div className="space-y-2">
                            <Label htmlFor="website" className="text-xs">Website</Label>
                            <div className="flex items-center border rounded-md">
                              <Globe className="h-4 w-4 mx-2 text-stargaze-400" />
                              <Input
                                id="website"
                                value={socialInputs.website}
                                onChange={(e) => handleSocialInputChange('website', e.target.value)}
                                placeholder="https://your-website.com"
                                className="border-0 flex-1"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="twitter" className="text-xs">Twitter</Label>
                            <div className="flex items-center border rounded-md">
                              <Twitter className="h-4 w-4 mx-2 text-stargaze-400" />
                              <Input
                                id="twitter"
                                value={socialInputs.twitter}
                                onChange={(e) => handleSocialInputChange('twitter', e.target.value)}
                                placeholder="username"
                                className="border-0 flex-1"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="linkedin" className="text-xs">LinkedIn</Label>
                            <div className="flex items-center border rounded-md">
                              <Linkedin className="h-4 w-4 mx-2 text-stargaze-400" />
                              <Input
                                id="linkedin"
                                value={socialInputs.linkedin}
                                onChange={(e) => handleSocialInputChange('linkedin', e.target.value)}
                                placeholder="username"
                                className="border-0 flex-1"
                              />
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full mt-2" 
                            size="sm"
                            onClick={saveSocialMedia}
                          >
                            Save Social Links
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {user.website && (
                            <a 
                              href={user.website.startsWith('http') ? user.website : `https://${user.website}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400 hover:text-primary transition-colors"
                            >
                              <Globe className="h-4 w-4 mr-2" />
                              {user.website.replace(/^https?:\/\//, '')}
                            </a>
                          )}
                          
                          {user.twitter && (
                            <a 
                              href={`https://twitter.com/${user.twitter}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400 hover:text-primary transition-colors"
                            >
                              <Twitter className="h-4 w-4 mr-2" />
                              @{user.twitter}
                            </a>
                          )}
                          
                          {user.linkedin && (
                            <a 
                              href={`https://linkedin.com/in/${user.linkedin}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400 hover:text-primary transition-colors"
                            >
                              <Linkedin className="h-4 w-4 mr-2" />
                              {user.linkedin}
                            </a>
                          )}
                          
                          {!user.website && !user.twitter && !user.linkedin && (
                            <p className="text-sm text-stargaze-500 italic">No social links added yet</p>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="w-full">
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Stats Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">Connections</span>
                        </div>
                        <Badge variant="outline">{user.connections}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">Mentorship Requests</span>
                        </div>
                        <Badge variant="outline">{user.mentorshipRequests}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">Helpful Replies</span>
                        </div>
                        <Badge variant="outline">{user.helpfulReplies}</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-sm">View Full Statistics</Button>
                  </CardFooter>
                </Card>
                
                {/* Upcoming Sessions Card */}
                {upcomingSessions.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {upcomingSessions.map((session) => (
                        <div key={session.id} className="flex items-start space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={session.avatar} alt={session.with} />
                            <AvatarFallback>{session.with.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h4 className="font-medium">{session.title}</h4>
                            <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                              with {session.with}
                            </p>
                            <div className="flex items-center text-xs text-stargaze-500">
                              <Calendar className="h-3 w-3 mr-1" />
                              {session.date}, {session.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Sessions
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </div>
              
              {/* Right Column - Main Content */}
              <div className="lg:w-2/3">
                <Tabs defaultValue="profile" onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="profile">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="relative">
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                      {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                          {unreadCount}
                        </span>
                      )}
                    </TabsTrigger>
                    <TabsTrigger value="activity">
                      <Activity className="h-4 w-4 mr-2" />
                      Activity
                    </TabsTrigger>
                  </TabsList>
                  
                  {/* Profile Tab */}
                  <TabsContent value="profile">
                    <Card>
                      <CardHeader>
                        <CardTitle>About Me</CardTitle>
                        <CardDescription>
                          Tell others about yourself and your startup journey.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-stargaze-600 dark:text-stargaze-300 mb-6">
                          {user.bio}
                        </p>
                        
                        <h3 className="text-lg font-semibold mb-3">Expertise</h3>
                        {user.expertise && user.expertise.length > 0 ? (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {user.expertise.map((skill) => (
                              <Badge key={skill} variant="outline" className="bg-primary/10">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-stargaze-500 italic mb-6">
                            No expertise areas added yet
                          </p>
                        )}
                        
                        <h3 className="text-lg font-semibold mb-3">Company Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="text-sm font-medium text-stargaze-600 dark:text-stargaze-400">
                              Company Name
                            </h4>
                            <p>{user.company}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-stargaze-600 dark:text-stargaze-400">
                              Role
                            </h4>
                            <p>{user.title}</p>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-stargaze-600 dark:text-stargaze-400">
                              Email
                            </h4>
                            <p>{user.email}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-stargaze-600 dark:text-stargaze-400">
                              Location
                            </h4>
                            <p>{user.location}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">
                          <PenLine className="h-4 w-4 mr-2" />
                          Edit Details
                        </Button>
                        <Button>
                          View Public Profile
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  
                  {/* Notifications Tab */}
                  <TabsContent value="notifications">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>Notifications</CardTitle>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 text-xs"
                          onClick={markAllNotificationsAsRead}
                          disabled={unreadCount === 0}
                        >
                          Mark all as read
                        </Button>
                      </CardHeader>
                      <CardContent>
                        {userNotifications.length > 0 ? (
                          <div className="space-y-1">
                            {userNotifications.map((notification) => (
                              <div 
                                key={notification.id}
                                className={`p-3 rounded-lg border transition-colors ${
                                  notification.read 
                                    ? 'bg-transparent border-transparent' 
                                    : 'bg-primary/5 border-primary/10'
                                }`}
                              >
                                <div className="flex justify-between items-start">
                                  <h3 className={`font-medium ${notification.read ? 'text-stargaze-700 dark:text-stargaze-300' : 'text-stargaze-900 dark:text-white'}`}>
                                    {notification.title}
                                  </h3>
                                  <span className="text-xs text-stargaze-500">
                                    {notification.time}
                                  </span>
                                </div>
                                <p className={`text-sm ${notification.read ? 'text-stargaze-600 dark:text-stargaze-400' : 'text-stargaze-700 dark:text-stargaze-300'}`}>
                                  {notification.message}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-12">
                            <Bell className="h-12 w-12 text-stargaze-400 mx-auto mb-4 opacity-50" />
                            <h3 className="text-lg font-medium text-stargaze-600 dark:text-stargaze-400">
                              No notifications yet
                            </h3>
                            <p className="text-sm text-stargaze-500 max-w-sm mx-auto mt-1">
                              You'll receive notifications about mentorship requests, community activity, and more.
                            </p>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Notification Settings
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  
                  {/* Activity Tab */}
                  <TabsContent value="activity">
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                          Your recent actions and interactions on the platform.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {activityData.length > 0 ? (
                          <div className="space-y-6">
                            {activityData.map((activity, index) => (
                              <div key={activity.id} className="relative pl-6 pb-6 last:pb-0">
                                {/* Timeline connector */}
                                {index < activityData.length - 1 && (
                                  <div className="absolute left-2 top-2 w-0.5 h-full -ml-px bg-stargaze-200 dark:bg-stargaze-700"></div>
                                )}
                                
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary/50 bg-primary/20"></div>
                                
                                <div>
                                  <div className="flex justify-between items-start">
                                    <h3 className="font-medium">{activity.title}</h3>
                                    <span className="text-xs text-stargaze-500">{activity.time}</span>
                                  </div>
                                  <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mt-1">
                                    {activity.content}
                                  </p>
                                  {activity.engagement && (
                                    <div className="flex items-center mt-2">
                                      <Badge variant="outline" className="text-xs">
                                        {activity.engagement}
                                      </Badge>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-12">
                            <Activity className="h-12 w-12 text-stargaze-400 mx-auto mb-4 opacity-50" />
                            <h3 className="text-lg font-medium text-stargaze-600 dark:text-stargaze-400">
                              No activity yet
                            </h3>
                            <p className="text-sm text-stargaze-500 max-w-sm mx-auto mt-1">
                              Your interactions with communities, resources, and mentorship sessions will appear here.
                            </p>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View All Activity
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
