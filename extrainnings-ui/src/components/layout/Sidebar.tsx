import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  collapsed: boolean;
  onToggle?: () => void;
}

const menuItems = [
  { label: "Feed", path: "/feed" },
  { label: "Profile", path: "/profile" },
  { label: "Teams", path: "/teams" },
];

const SidebarContent = ({ collapsed, onToggle }: Props) => {
  const location = useLocation();

  return (
    <Box sx={{ p: 2 }}>
      {/* BRAND */}
      <Box mb={3}>
        <Typography fontWeight={800} fontSize="1.1rem">
          <span style={{ color: "#4f46e5" }}>Extra</span>
          <span style={{ color: "#111827" }}>Innings</span>
        </Typography>
      </Box>

      {/* MENU */}
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              "&.active": {
                backgroundColor: "#eef2ff",
                color: "#4f46e5",
                fontWeight: 600,
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default SidebarContent;
