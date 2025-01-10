import React from "react";
import TextZwintwo from "./TextZwintwo";
import { Box,useMediaQuery } from "@mui/material";

const Twin = () => {
    const isMobile = useMediaQuery('(max-width:768px)');
  
  return (
    <Box
      sx={{
        position: "relative", // Enable absolute positioning for children
        width: "100%",
        textAlign: "center",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/assets/ImageComponent/fast-clean.png"
        sx={{
          width: "100%", // Full width
          height: { xs: "550px", sm: "650px", md: "500px" }, // Adjust height for different screen sizes
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
          left: isMobile?'50%':"30%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust for true center
          padding: { xs: "8px", sm: "15px", md: "10px" }, // Reduce padding on small screens
          borderRadius: "4px", // Match image's border radius
          width: { xs: "80%", sm: "60%", md: "30%" }, // Adjust width based on screen size
          backgroundColor: "rgba(203, 211, 212, 0.92)", // Slight background for readability
        }}
      >
        <TextZwintwo />
      </Box>
    </Box>
  );
};

export default Twin;
