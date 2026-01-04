import { Box, Typography, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import PostCard from "../../components/post/PostCard";
import { getPosts } from "../../api/posts.api";
import type { Post } from "../../types/post";

const FeedPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!posts.length) {
    return (
      <Typography textAlign="center" sx={{ mt: 4 }}>
        No posts yet
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", px: { xs: 1, sm: 2 } }}>
      <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
        Latest Posts
      </Typography>

      {posts.map((post) => (
        <PostCard key={post.postId} post={post} />
      ))}
    </Box>
  );
};

export default FeedPage;
