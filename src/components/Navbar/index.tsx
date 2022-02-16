import React from "react";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
            <Button color="inherit">Pokedex</Button>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
