
import { useState, useRef, useEffect } from 'react';
import { Message, User } from '@/shared/types/models';
import { timeFromNow } from '@/shared/utils/data-utils';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Paperclip, Image, Link2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MessageListProps {
  messages: Message[];
  currentUser: User;
  recipient: User;
  onSendMessage: (content: string) => void;
  isLoading?: boolean;
}

export const MessageList = ({
  messages,
  currentUser,
  recipient,
  onSendMessage,
  isLoading = false
}: MessageListProps) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Scroll to bottom of messages when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    onSendMessage(newMessage);
    setNewMessage('');
    
    // Show toast confirmation
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully.",
    });
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col h-full">
      {/* Recipient header */}
      <div className="py-3 px-4 border-b flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={recipient.avatar} alt={recipient.name} />
          <AvatarFallback>{recipient.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">{recipient.name}</h3>
          <p className="text-xs text-muted-foreground">
            {recipient.role === 'mentor' ? 'Mentor' : 'Founder'}
          </p>
        </div>
      </div>
      
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-muted-foreground mb-2">No messages yet</p>
            <p className="text-sm">Start the conversation by sending a message below.</p>
          </div>
        ) : (
          messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.senderId === currentUser.id ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${message.senderId === currentUser.id ? 'order-2' : 'order-1'}`}>
                {message.senderId !== currentUser.id && (
                  <Avatar className="h-8 w-8 mb-1">
                    <AvatarImage src={recipient.avatar} alt={recipient.name} />
                    <AvatarFallback>{recipient.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                <div 
                  className={`rounded-2xl px-4 py-2 ${
                    message.senderId === currentUser.id 
                      ? 'bg-primary text-primary-foreground ml-auto' 
                      : 'bg-secondary'
                  }`}
                >
                  <p>{message.content}</p>
                  
                  {/* Render attachments if any */}
                  {message.attachments && message.attachments.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {message.attachments.map(attachment => (
                        <div key={attachment.id} className="flex items-center text-xs">
                          {attachment.type === 'image' ? (
                            <Image className="h-3 w-3 mr-1" />
                          ) : (
                            <Paperclip className="h-3 w-3 mr-1" />
                          )}
                          <a 
                            href={attachment.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="underline"
                          >
                            {attachment.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">
                  {timeFromNow(message.timestamp)}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Message input */}
      <Card className="mt-auto border-t rounded-none">
        <CardContent className="p-3">
          <div className="flex items-end">
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="min-h-10 resize-none flex-1 mr-2"
              rows={1}
            />
            <div className="flex space-x-1">
              <Button 
                type="button" 
                size="icon" 
                variant="ghost" 
                className="h-9 w-9 rounded-full"
                title="Add attachment"
              >
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button 
                type="button" 
                size="icon" 
                variant="ghost" 
                className="h-9 w-9 rounded-full"
                title="Add image"
              >
                <Image className="h-5 w-5" />
              </Button>
              <Button 
                type="button" 
                className="rounded-full"
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
