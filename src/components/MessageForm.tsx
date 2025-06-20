
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message to send.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Your message has been sent to the Discord server.",
      });
      setMessage('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="gradient-card p-6 rounded-lg animate-fade-in">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-discord-blurple/10 rounded-lg">
          <MessageSquare className="w-5 h-5 text-discord-blurple" />
        </div>
        <h3 className="text-xl font-semibold text-white">Send Message to Server</h3>
      </div>
      
      <div className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here..."
          className="w-full h-32 px-4 py-3 bg-discord-dark-lighter border border-discord-dark-lighter rounded-lg text-white placeholder-discord-text-dark resize-none focus:outline-none focus:ring-2 focus:ring-discord-blurple focus:border-transparent transition-all duration-200"
          maxLength={2000}
        />
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-discord-text-dark">
            {message.length}/2000 characters
          </span>
          
          <Button
            onClick={handleSend}
            disabled={isLoading || !message.trim()}
            className="btn-primary"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </div>
    </div>
  );
};
