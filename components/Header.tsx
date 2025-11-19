import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-medium">
          Welcome to ClipFactory AI
        </h1>
        <Badge variant="secondary" className="hidden md:inline-flex">
          Pro Plan
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-600" />
        </Button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-semibold text-white">
          CF
        </div>
      </div>
    </header>
  );
}
