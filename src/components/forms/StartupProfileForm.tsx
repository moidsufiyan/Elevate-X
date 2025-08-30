
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Upload, PlusCircle, Trash2, FileText, Video, Image } from "lucide-react";

interface StartupFormData {
  name: string;
  mission: string;
  industry: string;
  stage: string;
  foundedYear: string;
  teamSize: string;
  website: string;
  description: string;
}

const growthStages = [
  "Idea Stage", 
  "Pre-Seed", 
  "Seed", 
  "Series A", 
  "Series B", 
  "Series C+", 
  "Growth", 
  "Established"
];

export const StartupProfileForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<StartupFormData>();
  const [teamMembers, setTeamMembers] = useState([{ name: "", role: "", bio: "" }]);
  const [uploads, setUploads] = useState<{type: string; name: string; size: string}[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  const onSubmit = (data: StartupFormData) => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form data:", { ...data, teamMembers, uploads });
      toast.success("Startup profile saved successfully!");
      setIsSaving(false);
    }, 1500);
  };

  const handleAddTeamMember = () => {
    setTeamMembers([...teamMembers, { name: "", role: "", bio: "" }]);
  };

  const handleTeamMemberChange = (index: number, field: string, value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setTeamMembers(updatedMembers);
  };

  const handleRemoveTeamMember = (index: number) => {
    const updatedMembers = [...teamMembers];
    updatedMembers.splice(index, 1);
    setTeamMembers(updatedMembers);
  };

  const handleFileUpload = (type: string) => {
    // In a real app, this would trigger a file selection dialog
    // For now, we'll just simulate adding a file
    const fileTypes = {
      'pitch': { name: 'Company_Pitch_Deck.pdf', size: '2.4 MB' },
      'video': { name: 'Product_Demo.mp4', size: '14.8 MB' },
      'image': { name: 'Team_Photo.jpg', size: '3.2 MB' }
    };
    
    const fileInfo = fileTypes[type as keyof typeof fileTypes];
    setUploads([...uploads, { type, ...fileInfo }]);
    toast.success(`${fileInfo.name} uploaded successfully!`);
  };

  const removeUpload = (index: number) => {
    const updatedUploads = [...uploads];
    updatedUploads.splice(index, 1);
    setUploads(updatedUploads);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Basic Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">Basic Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Startup Name *</Label>
            <Input 
              id="name" 
              {...register("name", { required: "Startup name is required" })}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="industry">Industry *</Label>
            <Input 
              id="industry" 
              {...register("industry", { required: "Industry is required" })}
              className={errors.industry ? "border-destructive" : ""}
              placeholder="e.g. Fintech, Healthcare, E-commerce"
            />
            {errors.industry && (
              <p className="text-sm text-destructive">{errors.industry.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="stage">Growth Stage *</Label>
            <select 
              id="stage" 
              {...register("stage", { required: "Growth stage is required" })}
              className={`flex h-10 w-full rounded-md border ${errors.stage ? "border-destructive" : "border-input"} bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
            >
              <option value="">Select a stage</option>
              {growthStages.map((stage) => (
                <option key={stage} value={stage}>{stage}</option>
              ))}
            </select>
            {errors.stage && (
              <p className="text-sm text-destructive">{errors.stage.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="foundedYear">Founded Year</Label>
            <Input 
              id="foundedYear" 
              type="number"
              placeholder="e.g. 2023"
              {...register("foundedYear")}
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="teamSize">Team Size</Label>
            <Input 
              id="teamSize" 
              {...register("teamSize")}
              placeholder="e.g. 5-10 employees"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input 
              id="website" 
              type="url"
              placeholder="https://yourstartup.com"
              {...register("website")}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="mission">Mission Statement *</Label>
          <Textarea 
            id="mission" 
            {...register("mission", { required: "Mission statement is required" })}
            className={errors.mission ? "border-destructive" : ""}
            placeholder="What is your startup's mission?"
            rows={2}
          />
          {errors.mission && (
            <p className="text-sm text-destructive">{errors.mission.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description *</Label>
          <Textarea 
            id="description" 
            {...register("description", { required: "Description is required" })}
            className={errors.description ? "border-destructive" : ""}
            placeholder="Describe your startup, product, and unique value proposition..."
            rows={5}
          />
          {errors.description && (
            <p className="text-sm text-destructive">{errors.description.message}</p>
          )}
        </div>
      </div>
      
      {/* Team Members */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">Team Members</h3>
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            onClick={handleAddTeamMember}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Team Member
          </Button>
        </div>
        
        {teamMembers.map((member, index) => (
          <div key={index} className="p-5 bg-stargaze-50 dark:bg-stargaze-900 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Team Member {index + 1}</h4>
              {index > 0 && (
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRemoveTeamMember(index)}
                  className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Remove
                </Button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input 
                  value={member.name}
                  onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                  placeholder="Full Name"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Role</Label>
                <Input 
                  value={member.role}
                  onChange={(e) => handleTeamMemberChange(index, 'role', e.target.value)}
                  placeholder="e.g. CEO, CTO, Marketing Lead"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Bio</Label>
              <Textarea 
                value={member.bio}
                onChange={(e) => handleTeamMemberChange(index, 'bio', e.target.value)}
                placeholder="Brief professional background..."
                rows={3}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Materials Upload */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">Upload Materials</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => handleFileUpload('pitch')}
            className="p-4 border-2 border-dashed border-stargaze-200 dark:border-stargaze-700 rounded-xl flex flex-col items-center justify-center space-y-2 hover:bg-stargaze-50 dark:hover:bg-stargaze-800/50 transition-colors"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <FileText className="h-6 w-6" />
            </div>
            <span className="font-medium">Pitch Deck</span>
            <span className="text-xs text-stargaze-500 dark:text-stargaze-400">Upload PDF, PPT</span>
          </button>
          
          <button
            type="button"
            onClick={() => handleFileUpload('video')}
            className="p-4 border-2 border-dashed border-stargaze-200 dark:border-stargaze-700 rounded-xl flex flex-col items-center justify-center space-y-2 hover:bg-stargaze-50 dark:hover:bg-stargaze-800/50 transition-colors"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Video className="h-6 w-6" />
            </div>
            <span className="font-medium">Demo Video</span>
            <span className="text-xs text-stargaze-500 dark:text-stargaze-400">Upload MP4, MOV</span>
          </button>
          
          <button
            type="button"
            onClick={() => handleFileUpload('image')}
            className="p-4 border-2 border-dashed border-stargaze-200 dark:border-stargaze-700 rounded-xl flex flex-col items-center justify-center space-y-2 hover:bg-stargaze-50 dark:hover:bg-stargaze-800/50 transition-colors"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Image className="h-6 w-6" />
            </div>
            <span className="font-medium">Product Images</span>
            <span className="text-xs text-stargaze-500 dark:text-stargaze-400">Upload JPG, PNG</span>
          </button>
        </div>
        
        {/* Uploaded Files List */}
        {uploads.length > 0 && (
          <div className="mt-6 space-y-4">
            <h4 className="font-medium">Uploaded Files</h4>
            <div className="space-y-2">
              {uploads.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-stargaze-50 dark:bg-stargaze-900 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {file.type === 'pitch' && <FileText className="h-5 w-5 text-primary" />}
                    {file.type === 'video' && <Video className="h-5 w-5 text-primary" />}
                    {file.type === 'image' && <Image className="h-5 w-5 text-primary" />}
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-xs text-stargaze-500 dark:text-stargaze-400">{file.size}</p>
                    </div>
                  </div>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => removeUpload(index)}
                    className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Submit Button */}
      <div className="flex justify-end">
        <Button 
          type="submit" 
          className="w-full md:w-auto" 
          size="lg"
          disabled={isSaving}
        >
          {isSaving ? (
            <>Saving Profile...</>
          ) : (
            <>
              <Upload className="mr-2 h-5 w-5" />
              Save Startup Profile
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
