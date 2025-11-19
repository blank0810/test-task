interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: string;
  description?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export default function DashboardCard({
  title,
  value,
  icon,
  description,
  trend,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
      {description && (
        <p className="text-gray-500 text-sm mb-2">{description}</p>
      )}
      {trend && (
        <div className="flex items-center gap-1">
          <span
            className={`text-sm font-semibold ${
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {trend.isPositive ? '↑' : '↓'} {trend.value}
          </span>
          <span className="text-gray-500 text-sm">vs last month</span>
        </div>
      )}
    </div>
  );
}
