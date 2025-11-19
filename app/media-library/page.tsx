import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Film, Upload } from 'lucide-react';

export default function MediaLibraryPage() {
  return (
    <main className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Media Library</h2>
          <p className="text-sm text-muted-foreground">Manage your media assets</p>
        </div>
        <Button size="sm">
          <Upload className="mr-2 h-4 w-4" />
          Upload Media
        </Button>
      </div>
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-12 text-center">
          <Film className="h-8 w-8 text-muted-foreground mb-4" />
          <p className="text-sm font-medium mb-1">Your media library is empty</p>
          <p className="text-xs text-muted-foreground">Upload videos, images, and audio files</p>
        </CardContent>
      </Card>
    </main>
  );
}
