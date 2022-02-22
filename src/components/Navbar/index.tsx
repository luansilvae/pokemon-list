import React from "react";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
              <Button color="inherit">Pokedex</Button>
            </Link>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
