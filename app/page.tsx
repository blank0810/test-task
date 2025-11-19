import DashboardCard from '@/components/DashboardCard';

export default function Home() {
  const dashboardData = [
    {
      title: 'Credits Remaining',
      value: '2,450',
      icon: '💰',
      description: 'Available credits',
      trend: { value: '12%', isPositive: true },
    },
    {
      title: 'Projects',
      value: '24',
      icon: '📁',
      description: 'Active projects',
      trend: { value: '8%', isPositive: true },
    },
    {
      title: 'Videos Created',
      value: '156',
      icon: '🎬',
      description: 'Total videos',
      trend: { value: '23%', isPositive: true },
    },
    {
      title: 'Render Queue',
      value: '3',
      icon: '⏳',
      description: 'Videos in queue',
      trend: { value: '2%', isPositive: false },
    },
  ];

  return (
    <main className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Track your activity and manage your content</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardData.map((data, index) => (
          <DashboardCard
            key={index}
            title={data.title}
            value={data.value}
            icon={data.icon}
            description={data.description}
            trend={data.trend}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                ✓
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Video Rendered</p>
                <p className="text-sm text-gray-500">Project: Summer Campaign</p>
              </div>
              <span className="text-sm text-gray-400">2h ago</span>
            </div>
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                +
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Credits Added</p>
                <p className="text-sm text-gray-500">500 credits purchased</p>
              </div>
              <span className="text-sm text-gray-400">5h ago</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                📝
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">New Script Created</p>
                <p className="text-sm text-gray-500">Product Demo Script</p>
              </div>
              <span className="text-sm text-gray-400">1d ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <span className="text-3xl mb-2">➕</span>
              <span className="font-medium text-gray-800">New Project</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <span className="text-3xl mb-2">📝</span>
              <span className="font-medium text-gray-800">Write Script</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <span className="text-3xl mb-2">📤</span>
              <span className="font-medium text-gray-800">Upload Media</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <span className="text-3xl mb-2">⚡</span>
              <span className="font-medium text-gray-800">Render Video</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
