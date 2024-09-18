import React from "react";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Pinterest,
} from "@mui/icons-material";
import footerLogo from "../assets/images/footerlogo.png";
import footerimg from "../assets/images/footer.png";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#12151A", color: "white" }}>
      <Box
        sx={{
          width: "100%",
          height: "7px",
          background: "linear-gradient(to right, #8BF2B5, #35C8EB)",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "40px 20px",
          backgroundColor: "#12151A",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "50px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Box sx={{ marginRight: "80px" }}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography>Home</Typography>
            <Typography>Product</Typography>
          </Box>

          <Box sx={{ marginRight: "150px" }}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Typography>Activate</Typography>
            <Typography>Login</Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Find Us On
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <IconButton sx={{ color: "white" }} href="#">
                <YouTube />
              </IconButton>
              <IconButton sx={{ color: "white" }} href="#">
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "white" }} href="#">
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "white" }} href="#">
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "white" }} href="#">
                <Pinterest />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "gray", width: "100%" }} />

      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${footerimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <img
            src={footerLogo}
            alt="firebee-logo"
            width="214px"
            height="50px"
            style={{ display: "block" }}
          />
          <Typography variant="body2" sx={{ color: "gray" }}>
            Privacy Policy | Terms of Service
          </Typography>
        </Box>

        <Box sx={{ textAlign: "left", padding: "0 20px" }}>
          <Typography variant="body2" sx={{ marginBottom: "5px" }}>
            Copyright © 2020 Firebee Technologies, Inc. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: "gray" }}>
            The statements on this page have not been evaluated by the FDA. This
            product is not intended to diagnose, treat, cure, or prevent any
            disease.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
