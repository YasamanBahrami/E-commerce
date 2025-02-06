import React from "react";
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box, Button, Divider } from "@mui/material";
import { Search, Person, FavoriteBorder, ShoppingBag } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledSearch = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  padding: "5px 10px",
  borderRadius: "4px",
  width: "300px",
}));

const TopNav = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#f8f8f8", color: "black", boxShadow: "none", padding: "5px 0" }}>
      <Toolbar sx={{ justifyContent: "flex-end", gap: 2 }}>
        <Button sx={{ color: "black", textTransform: "none" }}>Store Locator</Button>
        <Button sx={{ color: "black", textTransform: "none" }}>Gift Cards</Button>
        <Button sx={{ color: "black", textTransform: "none" }}>Get Help</Button>
      </Toolbar>
    </AppBar>
  );
};

const Navbar = () => {
  return (
    <>
      <TopNav />
      <Divider />
      <AppBar position="sticky" sx={{ backgroundColor: "white", color: "black", boxShadow: "none", padding: "5px 0" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
            lululemon
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button sx={{ color: "black", textTransform: "none" }}>Women</Button>
            <Button sx={{ color: "black", textTransform: "none" }}>Men</Button>
            <Button sx={{ color: "black", textTransform: "none" }}>Accessories</Button>
            <Button sx={{ color: "black", textTransform: "none" }}>Shoes</Button>
            <Button sx={{ color: "black", textTransform: "none" }}>What's New</Button>
            <Button sx={{ color: "red", textTransform: "none", fontWeight: "bold" }}>Valentine's Day</Button>
          </Box>

          {/* Search Bar and Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <StyledSearch>
              <Search sx={{ marginRight: "5px" }} />
              <InputBase placeholder="Search" fullWidth />
            </StyledSearch>
            <IconButton>
              <Person sx={{ color: "black" }} />
            </IconButton>
            <IconButton>
              <FavoriteBorder sx={{ color: "black" }} />
            </IconButton>
            <IconButton>
              <ShoppingBag sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
