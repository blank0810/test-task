'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, MoreVertical, Play, Clock, CheckCircle, Trash2, Eye } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Summer Campaign 2024', videos: 12, status: 'active', progress: 75, lastUpdated: '2 hours ago', thumbnail: '🌞' },
    { id: 2, name: 'Product Launch Video', videos: 5, status: 'rendering', progress: 45, lastUpdated: '5 hours ago', thumbnail: '🚀' },
    { id: 3, name: 'Brand Story Series', videos: 23, status: 'completed', progress: 100, lastUpdated: '1 day ago', thumbnail: '📖' },
    { id: 4, name: 'Social Media Pack', videos: 15, status: 'active', progress: 30, lastUpdated: '3 hours ago', thumbnail: '📱' },
    { id: 5, name: 'Customer Testimonials', videos: 8, status: 'completed', progress: 100, lastUpdated: '2 days ago', thumbnail: '💬' },
    { id: 6, name: 'Q1 Marketing Videos', videos: 18, status: 'active', progress: 60, lastUpdated: '6 hours ago', thumbnail: '📊' },
  ]);

  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const [viewProjectOpen, setViewProjectOpen] = useState(false);
  const [deleteProjectOpen, setDeleteProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [newProjectData, setNewProjectData] = useState({ name: '', description: '' });

  const emojis = ['🎬', '📹', '🎥', '🎞️', '📽️', '🎭', '🎨', '✨', '🌟', '⭐'];

  const handleCreateProject = () => {
    if (newProjectData.name) {
      const newProject = {
        id: projects.length + 1,
        name: newProjectData.name,
        videos: 0,
        status: 'active',
        progress: 0,
        lastUpdated: 'Just now',
        thumbnail: emojis[Math.floor(Math.random() * emojis.length)],
      };
      setProjects([newProject, ...projects]);
      setNewProjectData({ name: '', description: '' });
      setNewProjectOpen(false);
    }
  };

  const handleViewProject = (project: any) => {
    setSelectedProject(project);
    setViewProjectOpen(true);
  };

  const handleDeleteProject = (project: any) => {
    setSelectedProject(project);
    setDeleteProjectOpen(true);
  };

  const confirmDeleteProject = () => {
    if (selectedProject) {
      setProjects(projects.filter(p => p.id !== selectedProject.id));
      setDeleteProjectOpen(false);
      setSelectedProject(null);
    }
  };

  return (
    <main className="flex-1 space-y-6 p-6 bg-gradient-to-br from-background to-muted/20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-sm text-muted-foreground">Manage your video projects</p>
        </div>
        <Button onClick={() => setNewProjectOpen(true)}>
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
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleDeleteProject(project)}
                  >
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={() => handleViewProject(project)}
                >
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* New Project Dialog */}
      <Dialog open={newProjectOpen} onOpenChange={setNewProjectOpen}>
        <DialogContent>
          <DialogClose onClick={() => setNewProjectOpen(false)} />
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
            <DialogDescription>
              Start a new video project. You can add videos and scripts later.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input
                id="project-name"
                placeholder="e.g., Summer Campaign 2024"
                value={newProjectData.name}
                onChange={(e) => setNewProjectData({ ...newProjectData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-description">Description (optional)</Label>
              <Textarea
                id="project-description"
                placeholder="Brief description of your project..."
                value={newProjectData.description}
                onChange={(e) => setNewProjectData({ ...newProjectData, description: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setNewProjectOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateProject}>
              Create Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Project Dialog */}
      <Dialog open={viewProjectOpen} onOpenChange={setViewProjectOpen}>
        <DialogContent>
          <DialogClose onClick={() => setViewProjectOpen(false)} />
          <DialogHeader>
            <DialogTitle>{selectedProject?.name}</DialogTitle>
            <DialogDescription>
              Project details and statistics
            </DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <div className="flex items-center justify-center h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg text-5xl">
                {selectedProject.thumbnail}
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="secondary" className="capitalize">{selectedProject.status}</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Videos</span>
                  <span className="font-medium">{selectedProject.videos}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{selectedProject.progress}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span className="font-medium">{selectedProject.lastUpdated}</span>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setViewProjectOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Project Dialog */}
      <Dialog open={deleteProjectOpen} onOpenChange={setDeleteProjectOpen}>
        <DialogContent>
          <DialogClose onClick={() => setDeleteProjectOpen(false)} />
          <DialogHeader>
            <DialogTitle>Delete Project</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{selectedProject?.name}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteProjectOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeleteProject}>
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
