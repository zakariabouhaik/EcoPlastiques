import React from "react";
import TextZwintwo from "./TextZwintwo";
import { Box } from "@mui/material";

const Twin = () => {
  return (
    <Box
      sx={{
        position: "relative", // Enables absolute positioning for children
        width: "100%",
        textAlign: "center",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/assets/ImageComponent/xxa.jpg"
        sx={{
          width: "100%", // Full width
          maxHeight: "600px", // Limit height
          objectFit: "cover", // Preserve aspect ratio
          borderRadius: "10px", // Slightly rounded corners
        }}
        alt="Image description"
      />

      {/* Overlay Text */}
      <Box
        sx={{
          position: "absolute", // Overlay on top of the image
          top: "50%", // Center vertically
          left: "20%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust for true center
        
          padding: "20px",
          borderRadius: "10px", // Match image's border radius
          width: { xs: "10%", md: "30%" }, // Responsive width
        }}
      >
        <TextZwintwo />
      </Box>
    </Box>
  );
};

export default Twin;
