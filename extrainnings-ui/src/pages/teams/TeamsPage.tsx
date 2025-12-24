import { Box, Typography, Paper } from "@mui/material";

const TeamsPage = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: "auto" }}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight={600} mb={2}>
          Teams
        </Typography>

        <Typography color="text.secondary">
          Teams page coming soon.
        </Typography>
      </Paper>
    </Box>
  );
};

export default TeamsPage;
