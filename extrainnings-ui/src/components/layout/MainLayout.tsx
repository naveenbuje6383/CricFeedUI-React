import {
  Box,
  Drawer,
  IconButton,
  Paper,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SidebarContent from "./Sidebar";
import TopBar from "./TopBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const drawerWidth = collapsed ? 72 : 260;

  // ✅ AUTO-CLOSE SIDEBAR ON ROUTE CHANGE (MOBILE)
  useEffect(() => {
    if (isMobile) {
      setMobileOpen(false);
    }
  }, [location.pathname, isMobile]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fb" }}>
      {/* SIDEBAR */}
      {isMobile ? (
        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          <SidebarContent collapsed={false} />
        </Drawer>
      ) : (
        <Paper
          elevation={0}
          sx={{
            width: drawerWidth,
            transition: "width 0.3s",
            borderRight: "1px solid #e5e7eb",
          }}
        >
          <SidebarContent
            collapsed={collapsed}
            onToggle={() => setCollapsed(!collapsed)}
          />
        </Paper>
      )}

      {/* MAIN AREA */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* TOP BAR */}
        <Paper
          elevation={0}
          sx={{
            height: 64,
            display: "flex",
            alignItems: "center",
            px: 2,
            borderBottom: "1px solid #e5e7eb",
            backgroundColor: "#fff",
          }}
        >
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
          )}
          <TopBar />
        </Paper>

        {/* CONTENT */}
        <Box
          sx={{
            flex: 1,
            py: 3,
            px: { xs: 0, sm: 2 }, // ✅ NO GAP ON MOBILE
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
