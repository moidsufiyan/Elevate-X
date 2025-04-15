
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/Button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { UserPreferences } from "@/shared/types/models";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Save, Filter, Sliders, Sparkles } from "lucide-react";

// Available options for form selections
const INDUSTRY_OPTIONS = [
  "SaaS", "FinTech", "HealthTech", "EdTech", "E-commerce", "AI/ML", 
  "Marketplace", "Consumer", "Hardware", "Gaming", "Sustainability", "Manufacturing"
];

const SKILL_OPTIONS = [
  "Sales", "Marketing", "Product Development", "UX/UI Design", "Engineering", 
  "Finance", "Fundraising", "Legal", "HR", "Strategy", "Operations", "Leadership"
];

const STAGE_OPTIONS = [
  "Idea", "Pre-seed", "Seed", "Series A", "Series B", "Series C+", "Growth", "Mature"
];

const LANGUAGE_OPTIONS = ["English", "Spanish", "French", "German", "Mandarin", "Hindi", "Portuguese", "Japanese"];

const STYLE_OPTIONS = [
  "Hands-on", "Strategic", "Advisory", "Technical", "Coaching", "Challenging", "Supportive"
];

// Form schema for validation
const formSchema = z.object({
  skillsNeeded: z.array(z.string()).min(1, "Select at least one skill"),
  industries: z.array(z.string()),
  startupStage: z.string().optional(),
  goals: z.array(z.string()),
  availability: z.array(z.string()),
  preferredLanguages: z.array(z.string()),
  preferredMentorshipStyle: z.array(z.string()),
  locationPreference: z.enum(["local", "remote", "any"]),
  sessionFrequency: z.enum(["weekly", "biweekly", "monthly"]),
  budgetRange: z.object({
    min: z.number().min(0),
    max: z.number().min(0)
  }),
});

interface MentorMatchConfigurationProps {
  initialPreferences?: Partial<UserPreferences>;
  onSavePreferences: (preferences: UserPreferences) => void;
}

export const MentorMatchConfiguration = ({ 
  initialPreferences, 
  onSavePreferences 
}: MentorMatchConfigurationProps) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(initialPreferences?.skillsNeeded || []);
  
  // Initialize form with default or provided values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skillsNeeded: initialPreferences?.skillsNeeded || [],
      industries: initialPreferences?.industries || [],
      startupStage: initialPreferences?.startupStage || "Seed",
      goals: initialPreferences?.goals || [],
      availability: initialPreferences?.availability || [],
      preferredLanguages: initialPreferences?.preferredLanguages || ["English"],
      preferredMentorshipStyle: initialPreferences?.preferredMentorshipStyle || ["Supportive"],
      locationPreference: initialPreferences?.locationPreference || "any",
      sessionFrequency: initialPreferences?.sessionFrequency || "biweekly",
      budgetRange: initialPreferences?.budgetRange || { min: 50, max: 200 },
    },
  });
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onSavePreferences(values as UserPreferences);
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-primary" />
          Mentor Matching Preferences
        </CardTitle>
        <CardDescription>Customize your preferences to find the perfect mentor match</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Skills Needed */}
            <FormField
              control={form.control}
              name="skillsNeeded"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Skills & Expertise Needed</FormLabel>
                  <FormDescription>
                    Select the areas where you need mentorship
                  </FormDescription>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {SKILL_OPTIONS.map((skill) => (
                      <FormItem key={skill} className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(skill)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...field.value, skill]
                                : field.value?.filter((s) => s !== skill);
                              field.onChange(updatedValue);
                              setSelectedSkills(updatedValue);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-sm cursor-pointer">
                          {skill}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedSkills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Industries */}
            <FormField
              control={form.control}
              name="industries"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Industry Focus</FormLabel>
                  <FormDescription>
                    Select industries where you need specific expertise
                  </FormDescription>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {INDUSTRY_OPTIONS.map((industry) => (
                      <FormItem key={industry} className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(industry)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...field.value, industry]
                                : field.value?.filter((i) => i !== industry);
                              field.onChange(updatedValue);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-sm cursor-pointer">
                          {industry}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Startup Stage */}
            <FormField
              control={form.control}
              name="startupStage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Current Startup Stage</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your startup stage" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {STAGE_OPTIONS.map((stage) => (
                        <SelectItem key={stage} value={stage}>
                          {stage}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Budget Range */}
            <FormField
              control={form.control}
              name="budgetRange.max"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Budget Range ($ per hour)</FormLabel>
                  <FormDescription>
                    Maximum hourly rate you're willing to pay
                  </FormDescription>
                  <div className="pt-2">
                    <Slider
                      min={25}
                      max={500}
                      step={25}
                      value={[form.watch("budgetRange.min"), field.value]}
                      onValueChange={([min, max]) => {
                        form.setValue("budgetRange.min", min);
                        field.onChange(max);
                      }}
                    />
                    <div className="flex justify-between mt-2 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <span>${form.watch("budgetRange.min")}</span>
                      <span>${field.value}</span>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Mentorship Style */}
            <FormField
              control={form.control}
              name="preferredMentorshipStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Preferred Mentorship Style</FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {STYLE_OPTIONS.map((style) => (
                      <FormItem key={style} className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(style)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...field.value, style]
                                : field.value?.filter((s) => s !== style);
                              field.onChange(updatedValue);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-sm cursor-pointer">
                          {style}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Session Frequency */}
            <FormField
              control={form.control}
              name="sessionFrequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Preferred Session Frequency</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="How often would you like to meet?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end pt-4">
              <Button type="submit" rightIcon={<Save className="h-4 w-4" />}>
                Save Preferences
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="bg-stargaze-50 dark:bg-stargaze-900/50 border-t">
        <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
          <Filter className="h-4 w-4 mr-2 text-primary" />
          Mentors will be matched based on these preferences, but you can still connect with any mentor
        </div>
      </CardFooter>
    </Card>
  );
};
