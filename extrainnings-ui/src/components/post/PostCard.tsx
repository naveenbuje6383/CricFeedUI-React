import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
  Chip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useState } from "react";
import type { Post } from "../../types/post";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [score, setScore] = useState<number>(post.score);

  const authorInitial = post.author?.charAt(0).toUpperCase() ?? "U";

  return (
    <Card sx={{ mb: 3, borderRadius: 3 }}>
      <CardContent>
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src={post.authorAvatar || undefined}>
              {authorInitial}
            </Avatar>

            <Box>
              <Typography fontWeight={600}>
                {post.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(post.createdAt).toLocaleString()}
              </Typography>
            </Box>
          </Box>

          <Chip label={`${score} pts`} color="warning" size="small" />
        </Box>

        {/* CONTENT */}
        <Typography sx={{ my: 2 }}>
          {post.content}
        </Typography>

        {/* IMAGE (CONDITIONAL) */}
        {post.imageUrl && (
          <Box
            component="img"
            src={post.imageUrl}
            alt="Post"
            sx={{
              width: "100%",
              maxHeight: 420,
              objectFit: "cover",
              borderRadius: 2,
              my: 2,
            }}
          />
        )}

        {/* FOOTER */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          gap={2}
        >
          {/* LEFT ICONS */}
          <Box display="flex" gap={3} color="text.secondary">
            <Box display="flex" alignItems="center" gap={0.5}>
              <FavoriteBorderIcon fontSize="small" />
              <Typography variant="body2">{post.likes}</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={0.5}>
              <ChatBubbleOutlineIcon fontSize="small" />
              <Typography variant="body2">{post.comments}</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={0.5}>
              <ShareOutlinedIcon fontSize="small" />
              <Typography variant="body2">{post.shares}</Typography>
            </Box>
          </Box>

          {/* SCORE BUTTONS */}
          <Box display="flex" gap={1} flexWrap="wrap">
            {[1, 2, 3, 4, 6].map((run) => (
              <Button
                key={run}
                size="small"
                variant={selectedScore === run ? "contained" : "outlined"}
                onClick={() => {
                  setSelectedScore(run);
                  setScore((prev) => prev + run);
                }}
                sx={{ minWidth: 36 }}
              >
                {run}
              </Button>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
