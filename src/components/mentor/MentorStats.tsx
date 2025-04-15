
import { BarChart2, Clock, DollarSign, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MentorStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          <Star className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.8/5</div>
          <p className="text-xs text-muted-foreground">
            From 24 reviews
          </p>
          <div className="mt-3 flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`h-3 w-3 ${star <= 4 ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
          <DollarSign className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$3,240</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500">+$520</span> this month
          </p>
          <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
            <div className="h-full w-4/5 rounded-full bg-green-500"></div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Session Duration</CardTitle>
          <Clock className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">76 min</div>
          <p className="text-xs text-muted-foreground">
            Average per session
          </p>
          <div className="mt-3 grid grid-cols-7 gap-1">
            {[35, 55, 70, 85, 65, 75, 90].map((height, index) => (
              <div key={index} className="flex h-10 flex-col justify-end">
                <div 
                  className="w-full rounded-sm bg-blue-500" 
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Founders Helped</CardTitle>
          <Users className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18</div>
          <p className="text-xs text-muted-foreground">
            Across 12 startups
          </p>
          <div className="mt-3">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-6 w-6 rounded-full bg-purple-100 border border-white flex items-center justify-center text-xs font-medium text-purple-500"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-xs font-medium text-white">
                +13
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
