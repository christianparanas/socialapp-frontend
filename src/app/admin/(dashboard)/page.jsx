"use client";

import { 
  UsersIcon, 
  DocumentTextIcon, 
  ChartBarIcon, 
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon 
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  // Sample data - replace with your actual data
  const metrics = [
    { name: 'Total Users', value: '2,543', change: '+12%', trend: 'up', icon: UsersIcon },
    { name: 'Active Content', value: '1,287', change: '+3%', trend: 'up', icon: DocumentTextIcon },
    { name: 'Engagement Rate', value: '68%', change: '-2%', trend: 'down', icon: ChartBarIcon },
    { name: 'Avg. Session', value: '4.2m', change: '+8%', trend: 'up', icon: ClockIcon }
  ];

  const recentActivity = [
    { user: 'Alex Johnson', action: 'created new post', time: '5 min ago' },
    { user: 'Sam Wilson', action: 'updated settings', time: '12 min ago' },
    { user: 'Taylor Swift', action: 'deleted comment', time: '18 min ago' },
    { user: 'Jamie Lee', action: 'registered account', time: '25 min ago' }
  ];

  return (
    <div className="space-y-6 bg-gray-100 dark:bg-black p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: Just now</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-black p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <metric.icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.name}</p>
                  <p className="text-2xl font-semibold text-gray-800 dark:text-white">{metric.value}</p>
                </div>
              </div>
              <div className={`flex items-center ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {metric.trend === 'up' ? (
                  <ArrowUpIcon className="h-4 w-4" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4" />
                )}
                <span className="ml-1 text-sm">{metric.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity + Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-medium text-lg text-gray-800 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">
                    {activity.user} <span className="text-gray-500 dark:text-gray-400 font-normal">{activity.action}</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-medium text-lg text-gray-800 dark:text-white mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">New users today</p>
              <p className="text-sm font-medium text-gray-800 dark:text-white">42</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">Content published</p>
              <p className="text-sm font-medium text-gray-800 dark:text-white">18</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">Reports submitted</p>
              <p className="text-sm font-medium text-gray-800 dark:text-white">7</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg. response time</p>
              <p className="text-sm font-medium text-gray-800 dark:text-white">2h 15m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}