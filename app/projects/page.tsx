import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Plus, MoreVertical, Play, Clock, CheckCircle } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: 'Summer Campaign 2024', videos: 12, status: 'active', progress: 75, lastUpdated: '2 hours ago', thumbnail: '🌞' },
    { id: 2, name: 'Product Launch Video', videos: 5, status: 'rendering', progress: 45, lastUpdated: '5 hours ago', thumbnail: '🚀' },
    { id: 3, name: 'Brand Story Series', videos: 23, status: 'completed', progress: 100, lastUpdated: '1 day ago', thumbnail: '📖' },
    { id: 4, name: 'Social Media Pack', videos: 15, status: 'active', progress: 30, lastUpdated: '3 hours ago', thumbnail: '📱' },
    { id: 5, name: 'Customer Testimonials', videos: 8, status: 'completed', progress: 100, lastUpdated: '2 days ago', thumbnail: '💬' },
    { id: 6, name: 'Q1 Marketing Videos', videos: 18, status: 'active', progress: 60, lastUpdated: '6 hours ago', thumbnail: '📊' },
  ];

  return (
    <main className="flex-1 space-y-6 p-6 bg-gradient-to-br from-background to-muted/20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-sm text-muted-foreground">Manage your video projects</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-5xl">
              {project.thumbnail}
            </div>
            <CardContent className="p-4 space-y-3">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-sm leading-tight">{project.name}</h3>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{project.videos} videos</span>
                  <span>•</span>
                  <span>{project.lastUpdated}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-1.5" />
              </div>

              <div className="flex items-center justify-between pt-2">
                <Badge
                  variant={
                    project.status === 'completed' ? 'default' :
                    project.status === 'rendering' ? 'secondary' :
                    'outline'
                  }
                  className="capitalize"
                >
                  {project.status === 'active' && <Play className="h-3 w-3 mr-1" />}
                  {project.status === 'rendering' && <Clock className="h-3 w-3 mr-1" />}
                  {project.status === 'completed' && <CheckCircle className="h-3 w-3 mr-1" />}
                  {project.status}
                </Badge>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
