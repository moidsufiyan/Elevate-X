// Empty state configurations for different sections of the application

import { EmptyStateConfig } from "@/shared/types/models";

export const mentorEmptyStates: {
  noMentorsAvailable: EmptyStateConfig;
  noMentorsMatching: EmptyStateConfig;
  noSessions: EmptyStateConfig;
  noResults: EmptyStateConfig;
} = {
  noMentorsAvailable: {
    title: "No Mentors Available",
    description:
      "We're currently building our mentor network. Be the first to join and help shape the future of entrepreneurship!",
    actionLabel: "Apply as Mentor",
  },
  noMentorsMatching: {
    title: "No Mentors Match Your Criteria",
    description:
      "Try adjusting your filters or broadening your search criteria to find mentors that match your needs.",
    actionLabel: "Clear All Filters",
  },
  noSessions: {
    title: "No Sessions Yet",
    description:
      "You haven't scheduled any mentorship sessions yet. Browse our mentors to get started on your journey.",
    actionLabel: "Find Mentors",
  },
  noResults: {
    title: "No Results Found",
    description:
      "Your search didn't return any results. Try using different keywords or filters.",
    actionLabel: "Clear Search",
  },
};

export const startupEmptyStates: {
  noStartups: EmptyStateConfig;
  noStartupsMatching: EmptyStateConfig;
  noApplications: EmptyStateConfig;
} = {
  noStartups: {
    title: "No Startups Found",
    description:
      "No startups are currently showcased. Check back later or be the first to showcase your startup!",
    actionLabel: "Add Your Startup",
  },
  noStartupsMatching: {
    title: "No Startups Match Your Filters",
    description:
      "Try adjusting your search criteria to discover more startups in our network.",
    actionLabel: "Clear Filters",
  },
  noApplications: {
    title: "No Applications Yet",
    description:
      "You haven't applied to any startups yet. Browse our startup showcase to find opportunities.",
    actionLabel: "Browse Startups",
  },
};

export const messageEmptyStates: {
  noConversations: EmptyStateConfig;
  noMessages: EmptyStateConfig;
} = {
  noConversations: {
    title: "No Conversations",
    description:
      "Start connecting with mentors and founders to begin meaningful conversations.",
    actionLabel: "Find Connections",
  },
  noMessages: {
    title: "No Messages",
    description:
      "Select a conversation to start messaging, or begin a new conversation with a mentor or founder.",
    actionLabel: "Start Conversation",
  },
};

export const sessionEmptyStates: {
  noSessions: EmptyStateConfig;
  noUpcomingSessions: EmptyStateConfig;
  noCompletedSessions: EmptyStateConfig;
} = {
  noSessions: {
    title: "No Sessions Scheduled",
    description:
      "You don't have any mentorship sessions scheduled. Book a session with a mentor to get started.",
    actionLabel: "Book a Session",
  },
  noUpcomingSessions: {
    title: "No Upcoming Sessions",
    description:
      "You don't have any sessions coming up. Schedule a new session to continue your mentorship journey.",
    actionLabel: "Schedule Session",
  },
  noCompletedSessions: {
    title: "No Completed Sessions",
    description:
      "Complete your first mentorship session to see your session history here.",
    actionLabel: "Find Mentors",
  },
};

export const blogEmptyStates: {
  noPosts: EmptyStateConfig;
  noPostsFound: EmptyStateConfig;
  noDrafts: EmptyStateConfig;
} = {
  noPosts: {
    title: "No Blog Posts",
    description:
      "No blog posts have been published yet. Check back later for insights and stories.",
    actionLabel: "Write First Post",
  },
  noPostsFound: {
    title: "No Posts Found",
    description:
      "Your search didn't return any blog posts. Try different keywords or browse all posts.",
    actionLabel: "Browse All Posts",
  },
  noDrafts: {
    title: "No Drafts",
    description:
      "You don't have any draft posts. Start writing to share your insights with the community.",
    actionLabel: "Create New Post",
  },
};
