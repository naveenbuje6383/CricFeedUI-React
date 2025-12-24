import { Box, Typography, Paper } from "@mui/material";

const ProfilePage = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: "auto" }}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight={600} mb={2}>
          Profile
        </Typography>

        <Typography color="text.secondary">
          Profile page coming soon.
        </Typography>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
