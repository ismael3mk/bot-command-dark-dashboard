
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ComponentType<{ className?: string }>;
}

export const StatCard = ({ title, value, change, changeType, icon: Icon }: StatCardProps) => {
  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-discord-blurple/10 rounded-lg">
          <Icon className="w-6 h-6 text-discord-blurple" />
        </div>
        <div className={`flex items-center space-x-1 text-sm ${
          changeType === 'increase' ? 'text-discord-green' : 'text-discord-red'
        }`}>
          {changeType === 'increase' ? (
            <ArrowUp className="w-4 h-4" />
          ) : (
            <ArrowDown className="w-4 h-4" />
          )}
          <span>{change}</span>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
        <p className="text-discord-text-dark text-sm">{title}</p>
      </div>
    </div>
  );
};
