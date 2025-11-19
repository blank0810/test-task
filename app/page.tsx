import React from 'react';
import DashboardCard from '@/components/DashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Coins, FolderOpen, Video, Clock, TrendingUp, Play, Plus, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Home() {
  const recentProjects = [
    { id: 1, name: 'Summer Campaign 2024', status: 'active', progress: 75, videos: 12, updated: '2 hours ago' },
    { id: 2, name: 'Product Launch Video', status: 'rendering', progress: 45, videos: 3, updated: '5 hours ago' },
    { id: 3, name: 'Brand Story Series', status: 'completed', progress: 100, videos: 8, updated: '1 day ago' },
    { id: 4, name: 'Social Media Pack', status: 'active', progress: 30, videos: 15, updated: '3 hours ago' },
  ];

  const renderQueue = [
    { id: 1, name: 'Hero_Video_Final_v3.mp4', progress: 67, status: 'rendering' },
    { id: 2, name: 'Testimonial_Compilation.mp4', progress: 23, status: 'rendering' },
    { id: 3, name: 'Product_Demo_Short.mp4', progress: 0, status: 'queued' },
  ];

  const recentActivity = [
    { id: 1, action: 'Video rendered successfully', project: 'Summer Campaign', time: '2 hours ago', type: 'success' },
    { id: 2, action: 'New project created', project: 'Q1 Marketing', time: '4 hours ago', type: 'info' },
    { id: 3, action: 'Credits purchased', project: '1,000 credits', time: '1 day ago', type: 'success' },
    { id: 4, action: 'Render failed - retrying', project: 'Brand Video', time: '2 days ago', type: 'warning' },
  ];

  return (
    <main className="flex-1 space-y-6 p-6 bg-gradient-to-br from-background to-muted/20">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Credits Remaining"
          value="2,450"
          icon={Coins}
          change="+12% from last month"
        />
        <DashboardCard
          title="Projects"
          value="24"
          icon={FolderOpen}
          change="+8% from last month"
        />
        <DashboardCard
          title="Videos Created"
          value="156"
          icon={Video}
          change="+23% from last month"
        />
        <DashboardCard
          title="Render Queue"
          value="3"
          icon={Clock}
          change="2 in progress"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Projects */}
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">Recent Projects</CardTitle>
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4 mr-1" />
              New
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{project.name}</p>
                    <p className="text-xs text-muted-foreground">{project.videos} videos • {project.updated}</p>
                  </div>
                  <Badge
                    variant={project.status === 'completed' ? 'default' : project.status === 'rendering' ? 'secondary' : 'outline'}
                    className="ml-2"
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={project.progress} className="h-1.5" />
                  <span className="text-xs text-muted-foreground w-10">{project.progress}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Render Queue */}
        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <Play className="h-4 w-4" />
              Render Queue
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderQueue.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1 min-w-0">
                    <p className="text-sm font-medium leading-none truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.status === 'rendering' ? 'Rendering...' : 'In queue'}
                    </p>
                  </div>
                </div>
                {item.status === 'rendering' ? (
                  <div className="flex items-center gap-2">
                    <Progress value={item.progress} className="h-1.5" />
                    <span className="text-xs text-muted-foreground w-10">{item.progress}%</span>
                  </div>
                ) : (
                  <div className="h-1.5 w-full rounded-full bg-secondary/50" />
                )}
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-2">
              View All
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed & Quick Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Recent Activity */}
        <Card className="col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <React.Fragment key={activity.id}>
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-1 ${
                      activity.type === 'success' ? 'bg-green-100 text-green-600' :
                      activity.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {activity.type === 'success' ? (
                        <CheckCircle2 className="h-3 w-3" />
                      ) : activity.type === 'warning' ? (
                        <AlertCircle className="h-3 w-3" />
                      ) : (
                        <TrendingUp className="h-3 w-3" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.project} • {activity.time}</p>
                    </div>
                  </div>
                  {index < recentActivity.length - 1 && <Separator />}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Storage Used</span>
                <span className="font-medium">45.2 GB</span>
              </div>
              <Progress value={65} className="h-2" />
              <p className="text-xs text-muted-foreground">65% of 70 GB</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Render Time</span>
                <span className="font-medium">28.5 hrs</span>
              </div>
              <p className="text-xs text-muted-foreground">This month</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Success Rate</span>
                <span className="font-medium text-green-600">98.2%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
