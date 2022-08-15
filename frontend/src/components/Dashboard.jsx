import React from "react";
// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import Link from "@material-ui/core/Link";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
//icons
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";

// import AccountMenu from "./AccountMenu";

const drawerWidth = 220;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h5" noWrap component="div">
          TRACKER
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {/* <Router> */}
        <List>
          <ListItem button component={Link} href="/">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} href="/AllProjects">
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary="All Projects" />
          </ListItem>
          <ListItem button component={Link} href="/MyTickets">
            <ListItemIcon>
              <ConfirmationNumberIcon />
            </ListItemIcon>
            <ListItemText primary="My Tickets" />
          </ListItem>
          <ListItem button component={Link} href="/ManageRole">
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Role" />
          </ListItem>
          <ListItem button component={Link} href="/MyTeam">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="My Team" />
          </ListItem>
          <ListItem button component={Link} href="/Chat">
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>
        </List>
        {/* Refactored to individually change icons */}

        {/* <Router>
          <Routes>
            <Route exact path="/">
              Home
            </Route>
            <Route exact path="/AllProjects">
              All Projects
            </Route>
          </Routes>
        </Router> */}
        {/* {[
          "Dashboard",
          "Manage Role",
          "Manage Team",
          "All Projects",
          "My Tickets",
          "Chat",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
      {/* <Divider /> */}
      {/* <List> */}
      {/* {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      {/* </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        {/* <AccountMenu /> */}
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              background: theme.palette.primary.dark,
              boxSizing: "border-box",
              color: "#ffffff",
              width: drawerWidth,
            },
            "& .MuiSvgIcon-root": {
              color: "#ffffff",
            },
            "& .MuiDivider-root": {
              borderColor: "#ffffff",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus
          in hendrerit gravida rutrum quisque non tellus. Convallis convallis
          tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
          commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing
          bibendum est ultricies integer quis. Cursus euismod quis viverra nibh
          cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
          lobortis feugiat vivamus at augue. At augue eget arcu dictum varius
          duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
          Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a. Consequat
          mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget
          nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed
          viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu
          facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate
          odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan
          in. In hendrerit gravida rutrum quisque non tellus orci ac.
          Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
          senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
          Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
          maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
          aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a. Consequat
          mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget
          nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed
          viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu
          facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate
          odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan
          in. In hendrerit gravida rutrum quisque non tellus orci ac.
          Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
          senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
          Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
          maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
          aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a. Consequat
          mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget
          nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed
          viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu
          facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate
          odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan
          in. In hendrerit gravida rutrum quisque non tellus orci ac.
          Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
          senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
          Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
          maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
          aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
  );
}

export default Dashboard;
