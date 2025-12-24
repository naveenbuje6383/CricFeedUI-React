import { Box, Typography } from "@mui/material";
import PostCard from "../../components/post/PostCard";
import type { Post } from "../../types/post";

const posts: Post[] = [
  {
    id: 1,
    authorName: "Sarah Chen",
    timeAgo: "2h ago",
    content:
      "Just completed an amazing tournament run! The final match was intense 🔥",
    totalScore: 28,
    likes: 12,
    comments: 8,
    shares: 7,
  },
  {
    id: 2,
    authorName: "Mike Rodriguez",
    timeAgo: "4h ago",
    content:
      "Training session highlights from today. Working on new strategies!",
    totalScore: 35,
    likes: 18,
    comments: 15,
    shares: 7,
  },
];

const FeedPage = () => {
  return (
    <Box sx={{ maxWidth: 900, width: "100%", mx: "auto" }}>
      <Typography variant="h5" textAlign="center" mb={3}>
        Latest Posts
      </Typography>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default FeedPage;
