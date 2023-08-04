import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ContainedButton, MenuButton } from "../styles/navTheme";

const pages = ["home", "about", "services", "shop"];

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#ffffff" }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/">
              <img src="/assets/logoBlack.png" alt="logo" />
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuButton
                key={page}
                component={HashLink}
                to={`#${page}`}
                onClick={handleCloseNavMenu}
              >
                {page}
              </MenuButton>
            ))}
            <ContainedButton
              variant="contained"
              color="secondary"
              onClick={() => {
                navigate("/bookingdetail");
              }}
            >
              Book now
            </ContainedButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <MenuButton
                    key={page}
                    component={HashLink}
                    to={`#${page}`}
                    onClick={handleCloseNavMenu}
                  >
                    {page}
                  </MenuButton>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Link to="/">
              <img src="/assets/logoBlack.png" alt="logo" />
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
