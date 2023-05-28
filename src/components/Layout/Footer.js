import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          textAlign: "center",
          bgcolor: "#1A1A19",
          color: "white",
          p: 3,
          zIndex: 9999,
        }}
      >
        <Typography variant="h5">
          All Rights Reserved &copy; Crave Connect
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
