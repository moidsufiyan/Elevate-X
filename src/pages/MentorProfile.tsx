
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { MentorProfileForm } from "@/components/mentor/MentorProfileForm";
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  Users, 
  BookOpen, 
  Video, 
  Briefcase,
  Plus,
  X,
  Check,
  Trash2,
  Upload
} from "lucide-react";

const MentorProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [skills, setSkills] = useState<string[]>(["Digital Marketing", "Growth Strategy", "Brand Development"]);
  const [newSkill, setNewSkill] = useState("");
  
  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };
  
  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Create Your Mentor Profile
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl mx-auto">
              Share your expertise, experience, and availability to connect with founders who can benefit from your guidance.
            </p>
          </AnimatedSection>
          
          <AnimatedSection 
            animation="fade-up" 
            delay={100} 
            className="max-w-5xl mx-auto"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Mentor Profile Setup</CardTitle>
                    <CardDescription>
                      Complete your profile to start connecting with founders
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-stargaze-600 dark:text-stargaze-400">Profile visibility</span>
                    <Switch id="profile-visibility" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="profile" onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-4 mb-8">
                    <TabsTrigger value="profile">
                      <Users className="h-4 w-4 mr-2" />
                      Basic Profile
                    </TabsTrigger>
                    <TabsTrigger value="expertise">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Expertise
                    </TabsTrigger>
                    <TabsTrigger value="availability">
                      <Calendar className="h-4 w-4 mr-2" />
                      Availability
                    </TabsTrigger>
                    <TabsTrigger value="sessions">
                      <Video className="h-4 w-4 mr-2" />
                      Session Types
                    </TabsTrigger>
                  </TabsList>
                  
                  {/* Basic Profile Tab */}
                  <TabsContent value="profile">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="full-name">Full Name</Label>
                          <Input id="full-name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="job-title">Job Title</Label>
                          <Input id="job-title" placeholder="CEO / Founder / CTO" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" placeholder="Your Company Name" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="City, Country" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">Professional Bio</Label>
                        <Textarea 
                          id="bio" 
                          placeholder="Share your professional background, achievements, and why you want to mentor startups..."
                          className="min-h-32 resize-y"
                        />
                        <p className="text-sm text-stargaze-500">
                          Briefly describe your professional background, expertise, and mentoring style.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Profile Picture</Label>
                        <div className="flex items-center gap-4">
                          <div className="h-24 w-24 rounded-full bg-stargaze-100 dark:bg-stargaze-800 flex items-center justify-center overflow-hidden">
                            <Users className="h-12 w-12 text-stargaze-400" />
                          </div>
                          <Button variant="outline" className="gap-2">
                            <Upload className="h-4 w-4" />
                            Upload Photo
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="linkedin">LinkedIn Profile</Label>
                          <Input id="linkedin" placeholder="linkedin.com/in/yourprofile" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="twitter">Twitter/X Profile</Label>
                          <Input id="twitter" placeholder="twitter.com/yourusername" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Personal Website</Label>
                          <Input id="website" placeholder="yourwebsite.com" />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Expertise Tab */}
                  <TabsContent value="expertise">
                    <div className="space-y-6">
                      {/* Skills */}
                      <div className="space-y-3">
                        <Label>Expertise & Skills</Label>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {skills.map((skill) => (
                            <Badge key={skill} className="px-3 py-1 flex items-center gap-1">
                              {skill}
                              <button 
                                onClick={() => removeSkill(skill)}
                                className="ml-1 hover:text-red-500 transition-colors"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="Add a skill (e.g., Product Strategy)" 
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                          />
                          <Button onClick={addSkill} type="button">
                            <Plus className="h-4 w-4 mr-2" />
                            Add
                          </Button>
                        </div>
                        <p className="text-sm text-stargaze-500">
                          Add skills and areas of expertise that you can mentor founders in.
                        </p>
                      </div>
                      
                      <Separator />
                      
                      {/* Industries */}
                      <div className="space-y-3">
                        <Label>Industries</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {["SaaS", "FinTech", "E-commerce", "Health Tech", "AI/ML", "Marketplace", "Consumer Apps", "B2B", "EdTech"].map((industry) => (
                            <div key={industry} className="flex items-center space-x-2">
                              <input type="checkbox" id={`industry-${industry}`} className="rounded" />
                              <Label htmlFor={`industry-${industry}`} className="font-normal">{industry}</Label>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-stargaze-500">
                          Select industries where you have experience and can provide valuable guidance.
                        </p>
                      </div>
                      
                      <Separator />
                      
                      {/* Work Experience */}
                      <div className="space-y-3">
                        <Label>Work Experience</Label>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Add Experience</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="job-title">Job Title</Label>
                                <Input id="job-title" placeholder="CEO / Founder / CTO" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="company-name">Company</Label>
                                <Input id="company-name" placeholder="Company Name" />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
                              <div className="space-y-2">
                                <Label htmlFor="start-date">Start Date</Label>
                                <Input id="start-date" type="month" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="end-date">End Date</Label>
                                <Input id="end-date" type="month" />
                                <div className="flex items-center space-x-2 mt-1">
                                  <input type="checkbox" id="current-position" />
                                  <Label htmlFor="current-position" className="font-normal text-sm">I currently work here</Label>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2 mt-4">
                              <Label htmlFor="description">Description</Label>
                              <Textarea 
                                id="description" 
                                placeholder="Describe your responsibilities and achievements..."
                                className="resize-y"
                              />
                            </div>
                          </CardContent>
                          <CardFooter className="justify-between">
                            <Button variant="outline" className="gap-2">
                              <Trash2 className="h-4 w-4" />
                              Clear
                            </Button>
                            <Button>
                              <Plus className="h-4 w-4 mr-2" />
                              Add Experience
                            </Button>
                          </CardFooter>
                        </Card>
                        <Button variant="outline" className="w-full">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Another Experience
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Availability Tab */}
                  <TabsContent value="availability">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label>Weekly Availability</Label>
                        <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                          Select the days and times you're available for mentorship sessions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mt-4">
                          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                            <Card key={day} className="overflow-hidden">
                              <CardHeader className="py-3 px-4 bg-stargaze-50 dark:bg-stargaze-800/50">
                                <CardTitle className="text-md font-medium">{day}</CardTitle>
                              </CardHeader>
                              <CardContent className="pt-4 space-y-3">
                                <div className="flex items-center justify-between">
                                  <Label htmlFor={`${day.toLowerCase()}-available`} className="font-normal text-sm">
                                    Available
                                  </Label>
                                  <Switch id={`${day.toLowerCase()}-available`} />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`${day.toLowerCase()}-start`} className="text-xs">
                                    Start Time
                                  </Label>
                                  <select 
                                    id={`${day.toLowerCase()}-start`}
                                    className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                                  >
                                    {Array.from({ length: 24 }).map((_, i) => (
                                      <option key={i} value={`${i}:00`}>
                                        {i < 10 ? `0${i}:00` : `${i}:00`}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`${day.toLowerCase()}-end`} className="text-xs">
                                    End Time
                                  </Label>
                                  <select 
                                    id={`${day.toLowerCase()}-end`}
                                    className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                                  >
                                    {Array.from({ length: 24 }).map((_, i) => (
                                      <option key={i} value={`${i}:00`}>
                                        {i < 10 ? `0${i}:00` : `${i}:00`}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-3">
                        <Label>Timezone</Label>
                        <select 
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                        >
                          <option value="UTC-8">Pacific Time (UTC-8)</option>
                          <option value="UTC-5">Eastern Time (UTC-5)</option>
                          <option value="UTC+0">Greenwich Mean Time (UTC+0)</option>
                          <option value="UTC+1">Central European Time (UTC+1)</option>
                          <option value="UTC+5.5">Indian Standard Time (UTC+5:30)</option>
                          <option value="UTC+8">China Standard Time (UTC+8)</option>
                        </select>
                        <p className="text-sm text-stargaze-500">
                          All session times will be displayed in this timezone.
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-3">
                        <Label>Availability Status</Label>
                        <div className="flex items-center space-x-2">
                          <Switch id="availability-status" />
                          <Label htmlFor="availability-status" className="font-normal">
                            I'm currently accepting new mentees
                          </Label>
                        </div>
                        <p className="text-sm text-stargaze-500">
                          You can toggle this off if you need to temporarily pause accepting new mentees.
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-3">
                        <Label>Buffer Time Between Sessions</Label>
                        <select 
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                        >
                          <option value="0">No buffer</option>
                          <option value="5">5 minutes</option>
                          <option value="10">10 minutes</option>
                          <option value="15">15 minutes</option>
                          <option value="30">30 minutes</option>
                        </select>
                        <p className="text-sm text-stargaze-500">
                          This ensures you have time to prepare between consecutive sessions.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Session Types Tab */}
                  <TabsContent value="sessions">
                    <div className="space-y-6">
                      <p className="text-stargaze-600 dark:text-stargaze-400">
                        Define the types of mentorship sessions you offer to founders and startups.
                      </p>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Session Type #1</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="session-name">Session Name</Label>
                            <Input id="session-name" placeholder="e.g., Strategy Consultation" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="session-description">Description</Label>
                            <Textarea 
                              id="session-description" 
                              placeholder="Describe what founders can expect from this session..."
                              className="min-h-20 resize-y"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="space-y-2">
                              <Label htmlFor="session-duration">Duration</Label>
                              <select 
                                id="session-duration"
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                              >
                                <option value="30">30 minutes</option>
                                <option value="45">45 minutes</option>
                                <option value="60">60 minutes</option>
                                <option value="90">90 minutes</option>
                                <option value="120">2 hours</option>
                              </select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="session-price">Price (USD)</Label>
                              <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stargaze-500" />
                                <Input id="session-price" type="number" className="pl-9" placeholder="150" />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="session-format">Format</Label>
                              <select 
                                id="session-format"
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                              >
                                <option value="video">Video Call</option>
                                <option value="phone">Phone Call</option>
                                <option value="chat">Text Chat</option>
                                <option value="in-person">In Person</option>
                              </select>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label>Focus Areas</Label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {["Strategy", "Marketing", "Product", "Fundraising", "Operations", "Team Building", "Growth"].map((area) => (
                                <div key={area} className="flex items-center space-x-2">
                                  <input type="checkbox" id={`focus-${area}`} className="rounded" />
                                  <Label htmlFor={`focus-${area}`} className="font-normal">{area}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Button variant="outline" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Another Session Type
                      </Button>
                      
                      <Separator />
                      
                      <div className="space-y-3">
                        <Label>Session Policies</Label>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cancellation-policy">Cancellation Policy</Label>
                            <select 
                              id="cancellation-policy"
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
                            >
                              <option value="24">24 hours notice required</option>
                              <option value="48">48 hours notice required</option>
                              <option value="12">12 hours notice required</option>
                              <option value="flexible">Flexible (no strict policy)</option>
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="preparation">Pre-session Requirements</Label>
                            <Textarea 
                              id="preparation" 
                              placeholder="What information or preparation do you need from founders before sessions?"
                              className="resize-y"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline">Save Draft</Button>
                <div className="flex gap-3">
                  <Button variant="outline" className="gap-2">
                    <Check className="h-4 w-4" />
                    Preview Profile
                  </Button>
                  <Button size="lg">Publish Profile</Button>
                </div>
              </CardFooter>
            </Card>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentorProfile;
