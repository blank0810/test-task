import DashboardCard from '@/components/DashboardCard';
import { Coins, FolderOpen, Video, Clock } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex-1 space-y-6 p-6">
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
    </main>
  );
}
