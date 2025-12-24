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
  const [score, setScore] = useState(post.totalScore);

  return (
    <Card sx={{ mb: 3, borderRadius: 3 }}>
      <CardContent>
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar>{post.authorName[0]}</Avatar>
            <Box>
              <Typography fontWeight={600}>{post.authorName}</Typography>
              <Typography variant="body2" color="text.secondary">
                {post.timeAgo}
              </Typography>
            </Box>
          </Box>

          <Chip label={`${score} pts`} color="warning" size="small" />
        </Box>

        {/* CONTENT */}
        <Typography sx={{ my: 2 }}>{post.content}</Typography>

        {/* FOOTER */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          gap={2}
        >
          {/* ICONS */}
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
                  setScore(post.totalScore + run);
                }}
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
