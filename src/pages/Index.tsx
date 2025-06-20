
import { Sidebar } from '@/components/Sidebar';
import { StatCard } from '@/components/StatCard';
import { ActivityChart } from '@/components/ActivityChart';
import { MessageForm } from '@/components/MessageForm';
import { RestartButton } from '@/components/RestartButton';
import { MessageSquare, Bell, Activity } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-discord-dark">
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 lg:ml-64 transition-all duration-300">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-discord-text-dark">Monitor and manage your Discord bot</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <StatCard
                title="Total Messages"
                value="12,847"
                change="+12.5%"
                changeType="increase"
                icon={MessageSquare}
              />
              <StatCard
                title="Unique Users"
                value="2,341"
                change="+8.2%"
                changeType="increase"
                icon={Bell}
              />
              <StatCard
                title="Commands Used"
                value="5,632"
                change="-2.1%"
                changeType="decrease"
                icon={Activity}
              />
            </div>

            {/* Chart */}
            <div className="mb-8">
              <ActivityChart />
            </div>

            {/* Actions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <MessageForm />
              </div>
              <div>
                <RestartButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
