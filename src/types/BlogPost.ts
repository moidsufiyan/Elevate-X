
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  authorId: string;
  authorName: string;
  status: 'draft' | 'published' | 'pending' | 'rejected';
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  tags: string[];
  image: string;
}
