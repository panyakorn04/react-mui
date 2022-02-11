import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled, alpha, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../Assets/Frame copy.png";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AvatarGroup from "@mui/material/AvatarGroup";
import { deepPurple } from "@mui/material/colors";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Logout, Settings } from "@mui/icons-material/";

const pages = ["Live คอร์ส", "แพ็กเกจสุดพิเศษ", "สมาชิกรายปี"];
const settings = [
  "ข้อมูลบัญชีผู้ใช้",
  "รายการโปรด",
  "คอร์สของฉัน",
  "ออกจากระบบ",
];
const menuDropdown = ["คอร์สเรียน"];
const dropdownList = [
  "เทคโนโลยี",
  "ธุรกิจ",
  "ไลฟสไตล์",
  "พัฒนาตัวเอง",
  "ความคิดสร้างสรรค์",
  "ภาษา",
  "สายอาชีพ",
  "คอร์สทั้งหมด",
];

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

const NavBar = () => {
  const theme = useTheme();
  const [anchorProfile, setAnchorProfile] = useState(null);
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const isMenuOpen = Boolean(anchorMenu);
  const isProfileOpen = Boolean(anchorProfile);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowSidebar({ ...showSidebar, [anchor]: open });
  };

  const handleMenuClick = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleProfileOpen = (event) => {
    setAnchorProfile(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorMenu(null);
    setAnchorProfile(null);
    setShowSidebar(false);
    setMobileMoreAnchorEl(null);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 230 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ paddingTop: "4px" }}>
        <DrawerHeader>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "40px",
              height: "36px",
            }}
          />
        </DrawerHeader>
        <Divider />
        {menuDropdown.map((menuDropdown, index) => (
          <ListItem button key={index}>
            <ListItemText
              primary={menuDropdown}
              style={{ paddingLeft: "1.5rem" }}
            />
            <IconButton onClick={handleMenuClose}>
              {theme.direction === "ltr" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </ListItem>
        ))}
        {pages.map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} style={{ paddingLeft: "1.5rem" }} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {settings.map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} style={{ paddingLeft: "1.5rem" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const dropdownId = "demo-customized-menu";
  const dropdownMenu = (
    <StyledMenu
      id={dropdownId}
      MenuListProps={{
        "aria-labelledby": "demo-customized-button",
      }}
      anchorEl={anchorMenu}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {dropdownList.map((dropdownList) => (
        <MenuItem key={dropdownList} onClick={handleMenuClose} disableRipple>
          <Typography textAlign="center">{dropdownList}</Typography>
        </MenuItem>
      ))}
    </StyledMenu>
  );
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <StyledMenu
      anchorEl={anchorProfile}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isProfileOpen}
      onClose={handleMenuClose}
    >
      {settings.map((setting, index) => (
        <MenuItem key={index} onClick={handleMenuClose}>
          <ListItemIcon>
            {index % 2 === 0 ? <Settings /> : <Logout />}
          </ListItemIcon>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </StyledMenu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#051837" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Box>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <MenuIcon
                    onClick={toggleDrawer(anchor, true)}
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                    aria-label="mailbox folders"
                  />

                  <Drawer
                    anchor={anchor}
                    open={showSidebar[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </Box>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            style={{ cursor: "pointer" }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "40px", height: "36px", marginTop: "10px" }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menuDropdown.map((menuDropdown) => (
              <Button
                key={menuDropdown}
                sx={{ my: 2, color: "white", display: "flex", ml: 2 }}
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleMenuClick}
                aria-expanded={isMenuOpen ? "true" : undefined}
                aria-controls="demo-customized-menu"
                id="demo-customized-button"
                aria-haspopup="true"
              >
                {menuDropdown}
              </Button>
            ))}
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block", ml: 2 }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <Button
              component={Link}
              to="/Signin"
              sx={{ my: 2, color: "white", display: "block", ml: 2 }}
            >
              เข้าสู่ระบบ
            </Button>
            <Button
              variant="contained"
              sx={{ my: 2, color: "white", display: "block", ml: 2 }}
            >
              สมัคสมาชิก
            </Button>
            {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileOpen}
              color="inherit"
            >
              <AvatarGroup>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>P</Avatar>
              </AvatarGroup>
            </IconButton> */}
          </Box>
        </Toolbar>
      </AppBar>
      {dropdownMenu}
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
export default NavBar;
