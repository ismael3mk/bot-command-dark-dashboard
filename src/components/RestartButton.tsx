
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export const RestartButton = () => {
  const [isRestarting, setIsRestarting] = useState(false);

  const handleRestart = async () => {
    setIsRestarting(true);
    
    // Simulate restart process
    setTimeout(() => {
      toast({
        title: "Bot Restarted!",
        description: "Your Discord bot has been successfully restarted.",
      });
      setIsRestarting(false);
    }, 3000);
  };

  return (
    <div className="gradient-card p-6 rounded-lg animate-fade-in">
      <div className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-discord-red/10 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-discord-red rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">⟳</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Restart Bot</h3>
          <p className="text-discord-text-dark text-sm mb-6">
            This will restart your Discord bot. The bot will be offline for a few seconds.
          </p>
        </div>
        
        <Button
          onClick={handleRestart}
          disabled={isRestarting}
          className={`btn-danger w-full py-4 text-lg ${isRestarting ? 'animate-pulse-glow' : ''}`}
        >
          {isRestarting ? 'Restarting Bot...' : 'Restart Bot'}
        </Button>
      </div>
    </div>
  );
};
