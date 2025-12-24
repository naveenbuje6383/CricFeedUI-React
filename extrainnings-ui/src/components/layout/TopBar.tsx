import { Box, Button, TextField } from "@mui/material";

const TopBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <TextField
        placeholder="Search..."
        size="small"
        sx={{
          flex: 1,
          backgroundColor: "#f9fafb",
          borderRadius: 2,
        }}
      />

      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          fontWeight: 600,
          px: { xs: 1.5, sm: 3 },
          fontSize: { xs: "0.75rem", sm: "0.9rem" },
          whiteSpace: "nowrap",
        }}
      >
        Create
      </Button>
      
    </Box>
  );
};

export default TopBar;
