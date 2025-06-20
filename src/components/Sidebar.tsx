
import { useState } from 'react';
import { 
  Activity, 
  Settings, 
  MessageSquare,
  Bell,
  ArrowDown,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
  { name: 'Dashboard', icon: Activity, active: true },
  { name: 'Bot Stats', icon: ArrowUp },
  { name: 'Users', icon: Bell },
  { name: 'Commands', icon: MessageSquare },
  { name: 'Settings', icon: Settings },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Mobile backdrop */}
      <div className={`lg:hidden fixed inset-0 bg-black/50 z-40 ${isCollapsed ? 'hidden' : 'block'}`} 
           onClick={() => setIsCollapsed(true)} />
      
      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-discord-dark border-r border-discord-dark-lighter transition-transform duration-300 ${
        isCollapsed ? 'lg:w-20 -translate-x-full lg:translate-x-0' : 'translate-x-0'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-discord-dark-lighter">
            <div className="flex items-center justify-between">
              <div className={`flex items-center space-x-3 ${isCollapsed ? 'lg:justify-center' : ''}`}>
                <div className="w-8 h-8 bg-gradient-discord rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DB</span>
                </div>
                {!isCollapsed && (
                  <div>
                    <h1 className="text-lg font-semibold text-white">Discord Bot</h1>
                    <p className="text-xs text-discord-text-dark">Management Panel</p>
                  </div>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="lg:hidden text-discord-text-light hover:text-white hover:bg-discord-dark-lighter"
              >
                ✕
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 group ${
                    item.active
                      ? 'bg-discord-blurple text-white shadow-lg shadow-discord-blurple/25'
                      : 'text-discord-text-light hover:text-white hover:bg-discord-dark-lighter'
                  } ${isCollapsed ? 'lg:justify-center' : ''}`}
                >
                  <IconComponent className={`w-5 h-5 ${item.active ? 'text-white' : 'group-hover:text-white'}`} />
                  {!isCollapsed && <span className="font-medium">{item.name}</span>}
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-discord-dark-lighter">
            <div className={`flex items-center space-x-3 ${isCollapsed ? 'lg:justify-center' : ''}`}>
              <div className="w-8 h-8 bg-discord-green rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              {!isCollapsed && (
                <div>
                  <p className="text-sm font-medium text-white">Bot Online</p>
                  <p className="text-xs text-discord-text-dark">Connected to Discord</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <Button
        onClick={() => setIsCollapsed(false)}
        className={`lg:hidden fixed top-4 left-4 z-30 btn-primary ${isCollapsed ? 'block' : 'hidden'}`}
      >
        ☰
      </Button>

      {/* Toggle button for desktop */}
      <Button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden lg:block fixed top-4 left-4 z-30 bg-discord-dark-light border border-discord-dark-lighter text-discord-text-light hover:text-white hover:bg-discord-dark-lighter"
        size="sm"
      >
        {isCollapsed ? '→' : '←'}
      </Button>
    </>
  );
};
