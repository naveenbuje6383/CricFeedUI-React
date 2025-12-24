export interface Post {
  id: number;
  authorName: string;
  authorAvatar?: string;
  timeAgo: string;
  content: string;
  totalScore: number;

  likes: number;
  comments: number;
  shares: number;

}