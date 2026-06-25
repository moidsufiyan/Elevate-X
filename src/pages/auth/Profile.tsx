import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
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
  AlertCircle,
  LayoutDashboard,
  Rocket,
  Users,
  Save,
  X,
  Star,
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

// ── Onboarding notifications shown to every user on first login ──────────────
const getOnboardingNotifications = (role: string) => [
  {
    id: "onb-1",
    type: "system",
    title: "👋 Welcome to Elevate-X!",
    message: `You've successfully joined as a ${role}. Explore the platform and update your profile to get started.`,
    time: "Just now",
    read: false,
  },
  {
    id: "onb-2",
    type: "community",
    title: "🌍 Join a Community",
    message: "Connect with like-minded founders, mentors and investors in our community hubs.",
    time: "Just now",
    read: false,
  },
  {
    id: "onb-3",
    type: "resource",
    title: "📚 Explore Resources",
    message: "Browse pitch deck templates, fundraising guides, and growth playbooks in the Resource Library.",
    time: "Just now",
    read: false,
  },
  ...(role === "founder"
    ? [
        {
          id: "onb-4",
          type: "mentorship",
          title: "🎯 Find a Mentor",
          message: "Browse expert mentors who can guide you through fundraising, product strategy, and scaling.",
          time: "Just now",
          read: false,
        },
      ]
    : []),
  ...(role === "mentor"
    ? [
        {
          id: "onb-4",
          type: "mentorship",
          title: "📅 Set Up Your Profile",
          message: "Complete your mentor profile so founders can discover and book sessions with you.",
          time: "Just now",
          read: false,
        },
      ]
    : []),
  ...(role === "investor"
    ? [
        {
          id: "onb-4",
          type: "investment",
          title: "🚀 Discover Startups",
          message: "Browse the startup showcase to find promising teams building the next big thing.",
          time: "Just now",
          read: false,
        },
      ]
    : []),
];

// ── Profile completion check ──────────────────────────────────────────────────
const getCompletionSections = (user: any) => ({
  name: !!user?.name,
  email: !!user?.email,
  bio: !!user?.bio,
  location: !!user?.location,
  avatar: !!user?.avatar,
});

const Profile = () => {
  const navigate = useNavigate();
  const { user, isLoading, refetchUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || "",
    bio: user?.bio || "",
    location: user?.location || "",
  });
  const [userNotifications, setUserNotifications] = useState(
    () => getOnboardingNotifications(user?.role || "founder")
  );

  const completionSections = getCompletionSections(user);
  const completedCount = Object.values(completionSections).filter(Boolean).length;
  const totalSections = Object.keys(completionSections).length;
  const profileCompletionPercentage = Math.round((completedCount / totalSections) * 100);

  const unreadCount = userNotifications.filter((n) => !n.read).length;

  const markAllNotificationsAsRead = () => {
    setUserNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    toast.success("All notifications marked as read");
  };

  const getInitials = (name: string) => {
    return name?.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) || "?";
  };

  const getDashboardLink = () => {
    if (user?.role === "founder") return "/founder-dashboard";
    if (user?.role === "mentor") return "/mentor-dashboard";
    return "/profile";
  };

  // ── Save profile mutation ────────────────────────────────────────────────────
  const saveMutation = useMutation({
    mutationFn: async () => {
      const { data } = await api.patch("/users/me", {
        name: editForm.name,
        bio: editForm.bio,
        location: editForm.location,
      });
      return data;
    },
    onSuccess: async () => {
      await refetchUser();
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to update profile.");
    },
  });

  const handleEditToggle = () => {
    if (!isEditing) {
      setEditForm({
        name: user?.name || "",
        bio: user?.bio || "",
        location: user?.location || "",
      });
    }
    setIsEditing(!isEditing);
  };

  // ── Loading skeleton ─────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col items-center">
                    <Skeleton className="h-24 w-24 rounded-full mb-4" />
                    <Skeleton className="h-6 w-40 mb-2" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            </div>
            <div className="lg:w-2/3">
              <Skeleton className="h-10 w-full mb-6" />
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!user) return null;

  return (
    <>
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">

              {/* ── Left Column: Sidebar ── */}
              <div className="lg:w-1/3 space-y-6">

                {/* Profile Card */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center w-full">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="text-xl bg-primary/20 text-primary font-bold">
                          {getInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>

                      {isEditing ? (
                        <div className="w-full space-y-3">
                          <div>
                            <Label htmlFor="profile-name" className="text-xs">Full Name</Label>
                            <Input
                              id="profile-name"
                              value={editForm.name}
                              onChange={(e) => setEditForm((p) => ({ ...p, name: e.target.value }))}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="profile-location" className="text-xs">Location</Label>
                            <Input
                              id="profile-location"
                              value={editForm.location}
                              onChange={(e) => setEditForm((p) => ({ ...p, location: e.target.value }))}
                              placeholder="e.g. Hyderabad, India"
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="profile-bio" className="text-xs">Bio</Label>
                            <Textarea
                              id="profile-bio"
                              value={editForm.bio}
                              onChange={(e) => setEditForm((p) => ({ ...p, bio: e.target.value }))}
                              placeholder="Tell others about yourself..."
                              className="mt-1 resize-none"
                              rows={3}
                            />
                          </div>
                          <div className="flex gap-2 pt-1">
                            <Button
                              size="sm"
                              className="flex-1"
                              onClick={() => saveMutation.mutate()}
                              disabled={saveMutation.isPending}
                            >
                              <Save className="h-4 w-4 mr-1" />
                              {saveMutation.isPending ? "Saving..." : "Save"}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={handleEditToggle}
                              disabled={saveMutation.isPending}
                            >
                              <X className="h-4 w-4 mr-1" />Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <CardTitle className="text-2xl text-center">{user.name}</CardTitle>
                          <Badge variant="outline" className="mt-1 capitalize">{user.role}</Badge>
                          {user.location && (
                            <p className="text-xs text-center text-stargaze-500 mt-1">{user.location}</p>
                          )}
                          {user.bio && (
                            <p className="text-sm text-center text-stargaze-600 dark:text-stargaze-400 mt-2 px-2">
                              {user.bio}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-2">
                    {/* Profile Completion */}
                    <div className="mb-4">
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

                    {/* Missing sections hint */}
                    {profileCompletionPercentage < 100 && !isEditing && (
                      <div className="bg-stargaze-50 dark:bg-stargaze-800/40 rounded-lg p-3 mb-4">
                        <h4 className="text-xs font-medium mb-2 text-stargaze-600 dark:text-stargaze-400">Complete your profile:</h4>
                        <ul className="space-y-1 text-xs text-stargaze-500">
                          {!completionSections.bio && <li>• Add a bio</li>}
                          {!completionSections.location && <li>• Add your location</li>}
                          {!completionSections.avatar && <li>• Upload a profile picture</li>}
                        </ul>
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium mb-2">Quick Actions</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => navigate(getDashboardLink())}
                      >
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Go to Dashboard
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => navigate("/mentors")}
                      >
                        <Users className="h-4 w-4 mr-2" />
                        Browse Mentors
                      </Button>
                      {user.role === "founder" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => navigate("/startup-profile")}
                        >
                          <Rocket className="h-4 w-4 mr-2" />
                          My Startup Profile
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => navigate("/community")}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Community Hub
                      </Button>
                    </div>
                  </CardContent>

                  {!isEditing && (
                    <CardFooter className="pt-0">
                      <Button variant="outline" className="w-full" onClick={handleEditToggle}>
                        <PenLine className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    </CardFooter>
                  )}
                </Card>

                {/* Account Info Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Account Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">Email</span>
                      </div>
                      <span className="text-sm text-stargaze-500 truncate max-w-[150px]">{user.email}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">Role</span>
                      </div>
                      <Badge variant="secondary" className="capitalize">{user.role}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">Verified</span>
                      </div>
                      <Badge variant={user.isVerified ? "default" : "secondary"}>
                        {user.isVerified ? "✓ Yes" : "Pending"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* ── Right Column: Tabs ── */}
              <div className="lg:w-2/3">
                <Tabs defaultValue="profile" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="profile">
                      <User className="h-4 w-4 mr-2" />Profile
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="relative">
                      <Bell className="h-4 w-4 mr-2" />Notifications
                      {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                          {unreadCount}
                        </span>
                      )}
                    </TabsTrigger>
                    <TabsTrigger value="activity">
                      <Activity className="h-4 w-4 mr-2" />Activity
                    </TabsTrigger>
                  </TabsList>

                  {/* ── Profile Tab ── */}
                  <TabsContent value="profile">
                    <Card>
                      <CardHeader>
                        <CardTitle>About Me</CardTitle>
                        <CardDescription>
                          Your public profile information visible to others on the platform.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Bio Section */}
                        <div>
                          <h3 className="text-sm font-semibold text-stargaze-500 uppercase tracking-wider mb-2">Bio</h3>
                          {user.bio ? (
                            <p className="text-stargaze-700 dark:text-stargaze-300">{user.bio}</p>
                          ) : (
                            <div className="flex items-center gap-2 text-sm text-stargaze-400 italic">
                              <AlertCircle className="h-4 w-4" />
                              No bio yet. Click "Edit Profile" to add one.
                            </div>
                          )}
                        </div>

                        {/* Contact */}
                        <div>
                          <h3 className="text-sm font-semibold text-stargaze-500 uppercase tracking-wider mb-3">Contact Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-xs font-medium text-stargaze-500 mb-1">Email</h4>
                              <p className="text-sm">{user.email}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-stargaze-500 mb-1">Location</h4>
                              <p className="text-sm">{user.location || <span className="text-stargaze-400 italic">Not set</span>}</p>
                            </div>
                          </div>
                        </div>

                        {/* Platform Guide */}
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-4">
                          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                            <Star className="h-4 w-4 text-primary" />
                            Get the most out of Elevate-X
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div
                              className="flex items-start gap-2 cursor-pointer hover:text-primary transition-colors"
                              onClick={() => navigate("/mentors")}
                            >
                              <Users className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                              <span>Browse 50+ expert mentors ready to help</span>
                            </div>
                            <div
                              className="flex items-start gap-2 cursor-pointer hover:text-primary transition-colors"
                              onClick={() => navigate("/resources")}
                            >
                              <BookOpen className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                              <span>Access pitch decks, guides & templates</span>
                            </div>
                            <div
                              className="flex items-start gap-2 cursor-pointer hover:text-primary transition-colors"
                              onClick={() => navigate("/investors")}
                            >
                              <Briefcase className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                              <span>Connect with active investors</span>
                            </div>
                            <div
                              className="flex items-start gap-2 cursor-pointer hover:text-primary transition-colors"
                              onClick={() => navigate("/community")}
                            >
                              <MessageSquare className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                              <span>Join founder & mentor communities</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-3">
                        <Button variant="outline" onClick={handleEditToggle}>
                          <PenLine className="h-4 w-4 mr-2" />
                          Edit Details
                        </Button>
                        <Button onClick={() => navigate(getDashboardLink())}>
                          <LayoutDashboard className="h-4 w-4 mr-2" />
                          Go to Dashboard
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  {/* ── Notifications Tab ── */}
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
                        <div className="space-y-1">
                          {userNotifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`p-3 rounded-lg border transition-colors ${
                                notification.read
                                  ? "bg-transparent border-transparent"
                                  : "bg-primary/5 border-primary/10"
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                <h3 className={`font-medium text-sm ${notification.read ? "text-stargaze-700 dark:text-stargaze-300" : "text-stargaze-900 dark:text-white"}`}>
                                  {notification.title}
                                </h3>
                                <span className="text-xs text-stargaze-500 shrink-0 ml-2">{notification.time}</span>
                              </div>
                              <p className={`text-sm mt-0.5 ${notification.read ? "text-stargaze-500" : "text-stargaze-600 dark:text-stargaze-300"}`}>
                                {notification.message}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* ── Activity Tab ── */}
                  <TabsContent value="activity">
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                          Your interactions on the platform will appear here.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-16">
                          <Activity className="h-12 w-12 text-stargaze-300 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-stargaze-600 dark:text-stargaze-400">
                            No activity yet
                          </h3>
                          <p className="text-sm text-stargaze-500 max-w-sm mx-auto mt-2">
                            Start by booking a mentorship session, joining a community, or exploring resources.
                          </p>
                          <div className="flex gap-3 justify-center mt-6">
                            <Button variant="outline" size="sm" onClick={() => navigate("/mentors")}>
                              Browse Mentors
                            </Button>
                            <Button size="sm" onClick={() => navigate("/community")}>
                              Join Community
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </>
  );
};

export default Profile;
