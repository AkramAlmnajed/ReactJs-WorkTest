import React from "react";
import { Box } from "@mui/material";
import boxImage from "../assets/images/box.png";

const InsideBox = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "2px", marginTop: "1px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1px" }}>
        <img
          src={boxImage}
          alt="What's in the box?"
          style={{ width: "80%", maxWidth: "1200px", borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
};

export default InsideBox;
