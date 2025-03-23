
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Upload, PlusCircle, Trash2, Clock, Calendar, FileText, User } from "lucide-react";

interface MentorFormData {
  name: string;
  title: string;
  company: string;
  bio: string;
  expertise: string;
  industries: string;
  experience: string;
  education: string;
  website: string;
  linkedIn: string;
}

const expertiseAreas = [
  "Marketing",
  "Finance",
  "Product Development",
  "Technology",
  "Operations",
  "Sales",
  "Leadership",
  "Strategy",
  "Legal",
  "Design",
  "Human Resources"
];

const industryOptions = [
  "SaaS",
  "Fintech",
  "Healthcare",
  "E-commerce",
  "AI/Machine Learning",
  "Blockchain",
  "Education",
  "Clean Energy",
  "Logistics",
  "Consumer Products",
  "Media & Entertainment"
];

export const MentorProfileForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<MentorFormData>();
  const [availableSlots, setAvailableSlots] = useState([{ day: "", startTime: "", endTime: "" }]);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [contentIdeas, setContentIdeas] = useState([{ title: "", description: "" }]);
  const [documents, setDocuments] = useState<{name: string; size: string}[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  const onSubmit = (data: MentorFormData) => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form data:", { 
        ...data, 
        expertiseAreas: selectedExpertise,
        industries: selectedIndustries,
        availableSlots,
        contentIdeas,
        documents
      });
      toast.success("Mentor profile saved successfully!");
      setIsSaving(false);
    }, 1500);
  };

  const handleAddTimeSlot = () => {
    setAvailableSlots([...availableSlots, { day: "", startTime: "", endTime: "" }]);
  };

  const handleTimeSlotChange = (index: number, field: string, value: string) => {
    const updatedSlots = [...availableSlots];
    updatedSlots[index] = { ...updatedSlots[index], [field]: value };
    setAvailableSlots(updatedSlots);
  };

  const handleRemoveTimeSlot = (index: number) => {
    const updatedSlots = [...availableSlots];
    updatedSlots.splice(index, 1);
    setAvailableSlots(updatedSlots);
  };

  const handleAddContentIdea = () => {
    setContentIdeas([...contentIdeas, { title: "", description: "" }]);
  };

  const handleContentIdeaChange = (index: number, field: string, value: string) => {
    const updatedIdeas = [...contentIdeas];
    updatedIdeas[index] = { ...updatedIdeas[index], [field]: value };
    setContentIdeas(updatedIdeas);
  };

  const handleRemoveContentIdea = (index: number) => {
    const updatedIdeas = [...contentIdeas];
    updatedIdeas.splice(index, 1);
    setContentIdeas(updatedIdeas);
  };

  const toggleExpertise = (area: string) => {
    if (selectedExpertise.includes(area)) {
      setSelectedExpertise(selectedExpertise.filter(item => item !== area));
    } else {
      setSelectedExpertise([...selectedExpertise, area]);
    }
  };

  const toggleIndustry = (industry: string) => {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(selectedIndustries.filter(item => item !== industry));
    } else {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
  };

  const handleDocumentUpload = () => {
    // Simulate file upload
    const newDocument = {
      name: "Professional_Resume.pdf",
      size: "1.2 MB"
    };
    setDocuments([...documents, newDocument]);
    toast.success(`${newDocument.name} uploaded successfully!`);
  };

  const removeDocument = (index: number) => {
    const updatedDocuments = [...documents];
    updatedDocuments.splice(index, 1);
    setDocuments(updatedDocuments);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Personal Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">Personal Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input 
              id="name" 
              {...register("name", { required: "Full name is required" })}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Professional Title *</Label>
            <Input 
              id="title" 
              {...register("title", { required: "Professional title is required" })}
              className={errors.title ? "border-destructive" : ""}
              placeholder="e.g. Marketing Director, VC Partner, Product Strategist"
            />
            {errors.title && (
              <p className="text-sm text-destructive">{errors.title.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company / Organization</Label>
            <Input 
              id="company" 
              {...register("company")}
              placeholder="e.g. TechVentures Inc."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="experience">Years of Experience *</Label>
            <Input 
              id="experience" 
              {...register("experience", { required: "Experience is required" })}
              className={errors.experience ? "border-destructive" : ""}
              placeholder="e.g. 10+ years in growth marketing"
            />
            {errors.experience && (
              <p className="text-sm text-destructive">{errors.experience.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input 
              id="website" 
              type="url"
              placeholder="https://yourwebsite.com"
              {...register("website")}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="linkedIn">LinkedIn Profile</Label>
            <Input 
              id="linkedIn" 
              placeholder="https://linkedin.com/in/yourprofile"
              {...register("linkedIn")}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="bio">Professional Bio *</Label>
          <Textarea 
            id="bio" 
            {...register("bio", { required: "Professional bio is required" })}
            className={errors.bio ? "border-destructive" : ""}
            placeholder="Share your professional background and accomplishments..."
            rows={4}
          />
          {errors.bio && (
            <p className="text-sm text-destructive">{errors.bio.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="education">Education & Certifications</Label>
          <Textarea 
            id="education" 
            {...register("education")}
            placeholder="List your degrees, certifications, and relevant education..."
            rows={2}
          />
        </div>
      </div>
      
      {/* Expertise & Industries */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">Expertise & Industries</h3>
        
        <div className="space-y-4">
          <Label>Areas of Expertise (Select all that apply) *</Label>
          <div className="flex flex-wrap gap-2">
            {expertiseAreas.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => toggleExpertise(area)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedExpertise.includes(area)
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-stargaze-800 text-stargaze-600 dark:text-stargaze-300 hover:bg-stargaze-100 dark:hover:bg-stargaze-700"
                } border border-stargaze-200 dark:border-stargaze-700`}
              >
                {area}
              </button>
            ))}
          </div>
          {selectedExpertise.length === 0 && (
            <p className="text-sm text-destructive">Please select at least one area of expertise</p>
          )}
        </div>
        
        <div className="space-y-4">
          <Label>Industries of Interest (Select all that apply) *</Label>
          <div className="flex flex-wrap gap-2">
            {industryOptions.map((industry) => (
              <button
                key={industry}
                type="button"
                onClick={() => toggleIndustry(industry)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedIndustries.includes(industry)
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-stargaze-800 text-stargaze-600 dark:text-stargaze-300 hover:bg-stargaze-100 dark:hover:bg-stargaze-700"
                } border border-stargaze-200 dark:border-stargaze-700`}
              >
                {industry}
              </button>
            ))}
          </div>
          {selectedIndustries.length === 0 && (
            <p className="text-sm text-destructive">Please select at least one industry</p>
          )}
        </div>
      </div>
      
      {/* Availability */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">Availability</h3>
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            onClick={handleAddTimeSlot}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Time Slot
          </Button>
        </div>
        
        {availableSlots.map((slot, index) => (
          <div key={index} className="p-5 bg-stargaze-50 dark:bg-stargaze-900 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Available Time Slot {index + 1}
              </h4>
              {index > 0 && (
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRemoveTimeSlot(index)}
                  className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Remove
                </Button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Day of Week</Label>
                <select
                  value={slot.day}
                  onChange={(e) => handleTimeSlotChange(index, 'day', e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label>Start Time</Label>
                <Input 
                  type="time"
                  value={slot.startTime}
                  onChange={(e) => handleTimeSlotChange(index, 'startTime', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label>End Time</Label>
                <Input 
                  type="time"
                  value={slot.endTime}
                  onChange={(e) => handleTimeSlotChange(index, 'endTime', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Content Contribution */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">Content Contribution</h3>
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            onClick={handleAddContentIdea}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Content Idea
          </Button>
        </div>
        
        <p className="text-stargaze-600 dark:text-stargaze-300 text-sm">
          Share topics you'd like to create content about (blog posts, webinars, guides, etc.)
        </p>
        
        {contentIdeas.map((idea, index) => (
          <div key={index} className="p-5 bg-stargaze-50 dark:bg-stargaze-900 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Content Idea {index + 1}
              </h4>
              {index > 0 && (
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRemoveContentIdea(index)}
                  className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Remove
                </Button>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Content Title</Label>
                <Input 
                  value={idea.title}
                  onChange={(e) => handleContentIdeaChange(index, 'title', e.target.value)}
                  placeholder="e.g. '5 Strategies for SaaS Startups to Acquire First 100 Customers'"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Brief Description</Label>
                <Textarea 
                  value={idea.description}
                  onChange={(e) => handleContentIdeaChange(index, 'description', e.target.value)}
                  placeholder="Briefly describe what you'll cover in this content..."
                  rows={2}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Resume/CV Upload */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">Professional Documents</h3>
        
        <button
          type="button"
          onClick={handleDocumentUpload}
          className="p-4 border-2 border-dashed border-stargaze-200 dark:border-stargaze-700 rounded-xl flex flex-col items-center justify-center space-y-2 hover:bg-stargaze-50 dark:hover:bg-stargaze-800/50 transition-colors w-full md:w-64"
        >
          <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <User className="h-6 w-6" />
          </div>
          <span className="font-medium">Resume or CV</span>
          <span className="text-xs text-stargaze-500 dark:text-stargaze-400">Upload PDF, DOC</span>
        </button>
        
        {/* Uploaded Documents List */}
        {documents.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-medium">Uploaded Documents</h4>
            <div className="space-y-2">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-stargaze-50 dark:bg-stargaze-900 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-xs text-stargaze-500 dark:text-stargaze-400">{doc.size}</p>
                    </div>
                  </div>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => removeDocument(index)}
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
          disabled={isSaving || selectedExpertise.length === 0 || selectedIndustries.length === 0}
        >
          {isSaving ? (
            <>Saving Profile...</>
          ) : (
            <>
              <Upload className="mr-2 h-5 w-5" />
              Save Mentor Profile
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
