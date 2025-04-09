
import { AnimatedSection } from "@/components/AnimatedSection";
import { BarChart, Clock, Users, BookOpen } from "lucide-react";

export const FounderKPIs = () => {
  return (
    <AnimatedSection animation="fade-up" delay={100} className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-stargaze-900 dark:text-white">Total Sessions</h3>
          </div>
          <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">8</p>
          <p className="text-sm text-stargaze-500 dark:text-stargaze-400">
            <span className="text-green-500">+2</span> in last 30 days
          </p>
        </div>
        
        <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mr-3">
              <BarChart className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-stargaze-900 dark:text-white">Growth Metrics</h3>
          </div>
          <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">65%</p>
          <p className="text-sm text-stargaze-500 dark:text-stargaze-400">Completion rate</p>
        </div>
        
        <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mr-3">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-stargaze-900 dark:text-white">Network Size</h3>
          </div>
          <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">12</p>
          <p className="text-sm text-stargaze-500 dark:text-stargaze-400">Mentors connected</p>
        </div>
        
        <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mr-3">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-stargaze-900 dark:text-white">Learning</h3>
          </div>
          <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">2/5</p>
          <p className="text-sm text-stargaze-500 dark:text-stargaze-400">Paths in progress</p>
        </div>
      </div>
    </AnimatedSection>
  );
};
