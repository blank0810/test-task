import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string;
}

export default function DashboardCard({
  title,
  value,
  icon: Icon,
  change,
}: DashboardCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1 space-y-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold tracking-tight">{value}</p>
            {change && (
              <p className="text-xs text-muted-foreground">{change}</p>
            )}
          </div>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  );
}
