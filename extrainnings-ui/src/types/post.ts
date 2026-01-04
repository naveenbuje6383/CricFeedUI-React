export interface Post {
  postId: string;
  author: string;           // ← matches API
  authorAvatar?: string;
  content: string;
  imageUrl?: string | null;
  score: number;
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
}
