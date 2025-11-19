import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: 'Summer Campaign', videos: 12 },
    { id: 2, name: 'Product Launch', videos: 5 },
    { id: 3, name: 'Brand Stories', videos: 23 },
    { id: 4, name: 'Social Media Series', videos: 8 },
  ];

  return (
    <main className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Projects</h2>
          <p className="text-sm text-muted-foreground">Manage your video projects</p>
        </div>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>
      <div className="space-y-2">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm font-medium">{project.name}</p>
                <p className="text-xs text-muted-foreground">{project.videos} videos</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
