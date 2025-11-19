'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Film,
  CreditCard,
  Settings,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const menuItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Projects', href: '/projects', icon: FolderOpen, badge: '24' },
  { name: 'Scripts', href: '/scripts', icon: FileText },
  { name: 'Media Library', href: '/media-library', icon: Film },
  { name: 'Billing', href: '/billing', icon: CreditCard },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r bg-gradient-to-b from-background to-muted/10">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ClipFactory AI
            </span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-accent",
                  isActive
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="border-t p-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-3 space-y-2">
            <p className="text-xs font-semibold">Upgrade to Pro+</p>
            <p className="text-xs text-muted-foreground">Get unlimited renders and priority support</p>
            <button className="w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 text-xs font-medium text-white hover:opacity-90 transition-opacity">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
