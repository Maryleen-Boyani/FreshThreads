import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        py: 4,
        px: 2,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        textAlign: "center",
      }}
    >
      {/* Logo and Tagline */}
      <Typography
        variant="h4"
        component="div"
        sx={{ fontWeight: "bold", mb: 1 }}
      >
        FreshThreads
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Laundry and dry-cleaning services offer convenient, professional care
        for clothing. We ensure garments are cleaned, pressed, and ready to
        wear!
      </Typography>

      {/* Links */}
      <Grid container justifyContent="center" spacing={2} sx={{ mb: 3 }}>
        {["Home", "About", "Booking"].map((item, index) => (
          <Grid item key={index}>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "white", fontWeight: "500" }}
            >
              {item}
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* Footer Bottom */}
      <Typography
        variant="caption"
        sx={{ display: "block", mt: 2, fontSize: "0.9rem" }}
      >
        © Copyright FreshThreads 2024
      </Typography>
      <Typography variant="caption">
        <Link
          href="#"
          underline="hover"
          sx={{ color: "white", mx: 1, fontWeight: "500" }}
        >
          Privacy Policy
        </Link>
        |
        <Link
          href="#"
          underline="hover"
          sx={{ color: "white", mx: 1, fontWeight: "500" }}
        >
          Terms & Conditions
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
