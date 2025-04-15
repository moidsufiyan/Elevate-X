
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MessageList } from "@/components/chat/MessageList";
import { Message, User, Conversation } from "@/shared/types/models";
import { timeFromNow } from "@/shared/utils/data-utils";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, MessageSquare, Users, Bell, Settings } from "lucide-react";

// Mock current user - would come from auth context in real app
const MOCK_CURRENT_USER: User = {
  id: "user-1",
  name: "Alex Johnson",
  email: "alex@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  role: "founder",
  createdAt: new Date().toISOString()
};

// Mock conversations and recipients
const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: "conv-1",
    participants: ["user-1", "user-2"],
    lastMessageId: "msg-3",
    lastMessageTimestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    unreadCount: 2
  },
  {
    id: "conv-2",
    participants: ["user-1", "user-3"],
    lastMessageId: "msg-6",
    lastMessageTimestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    unreadCount: 0
  },
  {
    id: "conv-3",
    participants: ["user-1", "user-4"],
    lastMessageId: "msg-8",
    lastMessageTimestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    unreadCount: 0
  }
];

const MOCK_USERS: {[key: string]: User} = {
  "user-1": MOCK_CURRENT_USER,
  "user-2": {
    id: "user-2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    role: "mentor",
    createdAt: new Date().toISOString()
  },
  "user-3": {
    id: "user-3",
    name: "Michael Chen",
    email: "michael@example.com",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    role: "mentor",
    createdAt: new Date().toISOString()
  },
  "user-4": {
    id: "user-4",
    name: "Elena Rodriguez",
    email: "elena@example.com",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    role: "mentor",
    createdAt: new Date().toISOString()
  }
};

// Mock messages
const MOCK_MESSAGES: {[key: string]: Message[]} = {
  "conv-1": [
    {
      id: "msg-1",
      senderId: "user-1",
      receiverId: "user-2",
      content: "Hi Sarah, I was hoping to get your feedback on our marketing strategy for the new product launch.",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      read: true
    },
    {
      id: "msg-2",
      senderId: "user-2",
      receiverId: "user-1",
      content: "Hello Alex! I'd be happy to help. Could you share some details about your target audience and goals?",
      timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString(),
      read: true
    },
    {
      id: "msg-3",
      senderId: "user-2",
      receiverId: "user-1",
      content: "Also, it would be helpful to see your current marketing materials if you have any.",
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
      read: false,
      attachments: [
        {
          id: "att-1",
          type: "document",
          url: "#",
          name: "Marketing_Guide.pdf",
          size: 2500000
        }
      ]
    }
  ],
  "conv-2": [
    {
      id: "msg-4",
      senderId: "user-1",
      receiverId: "user-3",
      content: "Hi Michael, do you have time for a quick call this week to discuss our technical architecture?",
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      read: true
    },
    {
      id: "msg-5",
      senderId: "user-3",
      receiverId: "user-1",
      content: "Hey Alex, sure thing. I'm available on Thursday afternoon. Would 2pm work for you?",
      timestamp: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(),
      read: true
    },
    {
      id: "msg-6",
      senderId: "user-1",
      receiverId: "user-3",
      content: "Thursday at 2pm works perfectly. I'll send you a calendar invite with the meeting details.",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      read: true
    }
  ],
  "conv-3": [
    {
      id: "msg-7",
      senderId: "user-1",
      receiverId: "user-4",
      content: "Hello Elena, I wanted to thank you for the great advice during our last session. It really helped us structure our fundraising approach.",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      read: true
    },
    {
      id: "msg-8",
      senderId: "user-4",
      receiverId: "user-1",
      content: "I'm glad to hear that, Alex! It was my pleasure. How has the investor outreach been going so far?",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      read: true
    }
  ]
};

const Messaging = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState<string>(MOCK_CONVERSATIONS[0].id);
  
  // Get the other participant in the conversation
  const getRecipient = (conversation: Conversation): User => {
    const recipientId = conversation.participants.find(id => id !== MOCK_CURRENT_USER.id);
    return recipientId ? MOCK_USERS[recipientId] : MOCK_CURRENT_USER;
  };
  
  // Get last message preview for conversation list
  const getLastMessagePreview = (conversation: Conversation): string => {
    const messages = MOCK_MESSAGES[conversation.id] || [];
    if (messages.length === 0) return "No messages yet";
    
    const lastMessage = messages[messages.length - 1];
    return lastMessage.content.length > 40 
      ? lastMessage.content.substring(0, 37) + "..." 
      : lastMessage.content;
  };
  
  // Handle sending a new message
  const handleSendMessage = (content: string) => {
    console.log("Sending message:", content, "to conversation:", selectedConversation);
    // In a real app, this would send the message to the API
    // and update the UI optimistically
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Messages
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
              Connect directly with mentors and founders to discuss ideas, get feedback, and schedule sessions.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Conversations List */}
              <Card className="md:col-span-1 h-[calc(80vh-10rem)]">
                <CardHeader className="pb-3">
                  <CardTitle>Conversations</CardTitle>
                  <CardDescription>Your recent message threads</CardDescription>
                  <div className="relative mt-2">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search messages..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[calc(80vh-16rem)]">
                    <div className="px-4 py-2">
                      {MOCK_CONVERSATIONS.map((conversation) => {
                        const recipient = getRecipient(conversation);
                        return (
                          <div
                            key={conversation.id}
                            className={`flex items-start p-3 mb-2 rounded-lg cursor-pointer transition-colors ${
                              selectedConversation === conversation.id 
                                ? 'bg-primary/10' 
                                : 'hover:bg-muted'
                            }`}
                            onClick={() => setSelectedConversation(conversation.id)}
                          >
                            <Avatar className="h-10 w-10 mr-3 flex-shrink-0">
                              <AvatarImage src={recipient.avatar} alt={recipient.name} />
                              <AvatarFallback>{recipient.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="font-medium text-sm truncate">{recipient.name}</h4>
                                <span className="text-xs text-muted-foreground">
                                  {timeFromNow(conversation.lastMessageTimestamp)}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground truncate">
                                {getLastMessagePreview(conversation)}
                              </p>
                            </div>
                            {conversation.unreadCount > 0 && (
                              <Badge className="ml-2 flex-shrink-0 flex items-center justify-center bg-primary h-5 w-5 p-0 text-[10px]">
                                {conversation.unreadCount}
                              </Badge>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
              
              {/* Selected Conversation */}
              <Card className="md:col-span-2 h-[calc(80vh-10rem)] overflow-hidden">
                {selectedConversation ? (
                  <MessageList
                    messages={MOCK_MESSAGES[selectedConversation] || []}
                    currentUser={MOCK_CURRENT_USER}
                    recipient={getRecipient(MOCK_CONVERSATIONS.find(c => c.id === selectedConversation)!)}
                    onSendMessage={handleSendMessage}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center p-6">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">No conversation selected</h3>
                    <p className="text-muted-foreground">
                      Select a conversation from the list or start a new one.
                    </p>
                  </div>
                )}
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Messaging;
