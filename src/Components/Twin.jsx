import React from "react";
import TextZwintwo from "./TextZwintwo";
import { Box } from "@mui/material";

const Twin = () => {
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
        src="/assets/ImageComponent/xxa.jpg"
        sx={{
          width: "100%", // Full width
          height: { xs: "950px", sm: "650px", md: "900px" }, // Adjust height for different screen sizes
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
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust for true center
          padding: { xs: "8px", sm: "15px", md: "20px" }, // Reduce padding on small screens
          borderRadius: "10px", // Match image's border radius
          width: { xs: "80%", sm: "60%", md: "40%" }, // Adjust width based on screen size
          maxWidth: "90%", // Ensure it doesn't overflow the screen
          backgroundColor: "rgba(203, 211, 212, 0.7)", // Slight background for readability
        }}
      >
        <TextZwintwo />
      </Box>
    </Box>
  );
};

export default Twin;
