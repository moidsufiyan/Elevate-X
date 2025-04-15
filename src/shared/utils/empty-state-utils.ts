
/**
 * Utility functions for handling empty states in the application
 * These ensure consistent messaging when no data is available
 */

// Mentor-related empty states
export const mentorEmptyStates = {
  noMentorsAvailable: {
    title: "No mentors available yet",
    description: "We're building our mentor network. Check back soon to connect with experienced professionals.",
    actionLabel: "Apply to be a Mentor"
  },
  noMentorsMatching: {
    title: "No matching mentors found",
    description: "Try adjusting your search criteria or preferences to see more mentors that might be a good fit.",
    actionLabel: "Adjust Preferences"
  },
  noMentorsBookmarked: {
    title: "No bookmarked mentors",
    description: "Bookmark mentors you're interested in to easily find them later.",
    actionLabel: "Explore Mentors"
  }
};

// Startup-related empty states
export const startupEmptyStates = {
  noStartupsAvailable: {
    title: "No startups available yet",
    description: "We're building our startup network. Check back soon to discover promising ventures.",
    actionLabel: "Add Your Startup"
  },
  noStartupsMatching: {
    title: "No matching startups found",
    description: "Try adjusting your search criteria to see more startups that might interest you.",
    actionLabel: "Adjust Filters"
  },
  noStartupsBookmarked: {
    title: "No bookmarked startups",
    description: "Bookmark startups you're interested in to easily find them later.",
    actionLabel: "Explore Startups"
  }
};

// Session-related empty states
export const sessionEmptyStates = {
  noSessionsScheduled: {
    title: "No sessions scheduled",
    description: "You don't have any upcoming mentorship sessions. Book a session with a mentor to get started.",
    actionLabel: "Find a Mentor"
  },
  noSessionsCompleted: {
    title: "No completed sessions",
    description: "Once you complete mentorship sessions, they will appear here for your reference.",
    actionLabel: "Schedule a Session"
  }
};

// Message-related empty states
export const messageEmptyStates = {
  noConversations: {
    title: "No conversations yet",
    description: "Your messages with mentors and founders will appear here once you start a conversation.",
    actionLabel: "Find Connections"
  },
  emptyConversation: {
    title: "Start the conversation",
    description: "Send a message to begin this mentorship conversation.",
    actionLabel: "Send First Message"
  }
};

// Resource-related empty states
export const resourceEmptyStates = {
  noResourcesAvailable: {
    title: "Resources coming soon",
    description: "We're building our resource library. Check back soon for helpful guides and templates.",
    actionLabel: "Submit a Resource"
  },
  noResourcesMatching: {
    title: "No matching resources",
    description: "Try adjusting your search terms to find resources that match your needs.",
    actionLabel: "Clear Filters"
  }
};

// File-related empty states
export const fileEmptyStates = {
  noFilesUploaded: {
    title: "No files uploaded",
    description: "Upload files to share them with your mentors or founders.",
    actionLabel: "Upload File"
  },
  noFilesShared: {
    title: "No files shared with you",
    description: "Files shared with you will appear here for easy access.",
    actionLabel: "Request Files"
  }
};
