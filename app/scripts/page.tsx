import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus } from 'lucide-react';

export default function ScriptsPage() {
  return (
    <main className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Scripts</h2>
          <p className="text-sm text-muted-foreground">Write and manage your video scripts</p>
        </div>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Script
        </Button>
      </div>
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-12 text-center">
          <FileText className="h-8 w-8 text-muted-foreground mb-4" />
          <p className="text-sm font-medium mb-1">No scripts yet</p>
          <p className="text-xs text-muted-foreground">Create your first script to get started</p>
        </CardContent>
      </Card>
    </main>
  );
}
