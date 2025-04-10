
import { useState, useRef, useEffect } from 'react';
import { Message, User } from '@/shared/types/models';
import { timeFromNow } from '@/shared/utils/data-utils';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Paperclip, Image as ImageIcon, Link2, File, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MessageListProps {
  messages: Message[];
  currentUser: User;
  recipient: User;
  onSendMessage: (content: string, attachments?: File[]) => void;
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
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  // Scroll to bottom of messages when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!newMessage.trim() && selectedFiles.length === 0) return;
    
    onSendMessage(newMessage, selectedFiles.length > 0 ? selectedFiles : undefined);
    setNewMessage('');
    setSelectedFiles([]);
    
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
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: 'file' | 'image') => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      
      // Add file type metadata for UI rendering
      newFiles.forEach(file => {
        (file as any).uploadType = type;
      });
      
      setSelectedFiles(prev => [...prev, ...newFiles]);
      
      // Reset the input to allow selecting the same file again
      e.target.value = '';
    }
  };
  
  const removeSelectedFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (filename: string) => {
    const extension = filename.split('.').pop()?.toLowerCase();
    
    if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(extension || '')) {
      return <ImageIcon className="h-4 w-4" />;
    } else if (['pdf', 'doc', 'docx'].includes(extension || '')) {
      return <File className="h-4 w-4" />;
    } else {
      return <Paperclip className="h-4 w-4" />;
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
                            <ImageIcon className="h-3 w-3 mr-1" />
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
      
      {/* File inputs (hidden) */}
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        onChange={(e) => handleFileSelect(e, 'file')} 
        multiple
      />
      
      <input 
        type="file" 
        ref={imageInputRef} 
        accept="image/*" 
        className="hidden" 
        onChange={(e) => handleFileSelect(e, 'image')} 
        multiple
      />
      
      {/* Selected files preview */}
      {selectedFiles.length > 0 && (
        <div className="px-4 py-2 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Selected files:</p>
          <div className="flex flex-wrap gap-2">
            {selectedFiles.map((file, index) => (
              <div key={index} className="flex items-center bg-secondary rounded-full pl-2 pr-1 py-1 text-xs">
                {getFileIcon(file.name)}
                <span className="mx-1 max-w-32 truncate">{file.name}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-5 w-5 rounded-full hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => removeSelectedFile(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      
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
                onClick={() => fileInputRef.current?.click()}
              >
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button 
                type="button" 
                size="icon" 
                variant="ghost" 
                className="h-9 w-9 rounded-full"
                title="Add image"
                onClick={() => imageInputRef.current?.click()}
              >
                <ImageIcon className="h-5 w-5" />
              </Button>
              <Button 
                type="button" 
                className="rounded-full"
                onClick={handleSendMessage}
                disabled={!newMessage.trim() && selectedFiles.length === 0}
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
