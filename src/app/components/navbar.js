"use client";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  List,
  ListItem,
  Typography,
  IconButton,
  Button,
  Drawer,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
} from "@mui/material";

const drawerWidth = 240;
//An array of the nav items
const navItems = ["Home", "About", "Booking"];

export default function DrawerApp() {
  //setting the current state of the mobile to false
  const [isMobile, setIsMobile] = useState(false);
  // toggling the mobile drawer open/close state

  const handleDrawerApp = () => {
    setIsMobile((prevState) => !prevState);
  };

  //what one sees in the mobile view
  const drawer = (
    <Box
      onClick={handleDrawerApp}
      sx={{ bgcolor: "#aed6f1", height: "100vh", padding: 10 }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        FreshThreads
      </Typography>

      <List>
        {navItems.map(
          (
            item //the paranthesis are used to write js functions
          ) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    //in xl screens
    <Box sx={{ display: "flex", bgcolor: "#aed6f1" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerApp}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            FreshThreads
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "white" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={isMobile}
          onClose={handleDrawerApp}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
