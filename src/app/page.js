import { Box, Button, Grid2, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#aed6f1",
      }}
    >
      <Box>
        <Grid2 container spacing={2} alignItems="center">
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{ paddingLeft: 3, paddingRight: 2 }}
          >
            <Typography
              variant="h3"
              sx={{ mt: "15vh", fontSize: "5rem", fontWeight: "bold" }}
            >
              Nairobi's First Choice in Dry Cleaning
            </Typography>
            <Typography sx={{ mb: 2 }}>
              A tradition of unsurpassed customer service and unwavering
              commitment to quality has made us Nairobi's first choice in dry
              cleaning.
            </Typography>
            <Button variant="contained" color="primary">
              Sign Up For Free Pickup & Delivery
            </Button>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{ paddingLeft: 3, paddingRight: 2 }}
          >
            <Box
              component="img"
              src="img/laundry2.jpg"
              alt="Banner 1"
              sx={{ paddingTop: 8 }}
            />
          </Grid2>
        </Grid2>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "15%",
          width: "70%",
          height: "60vh", // Adjust height as needed
          bgcolor: "black",
          zIndex: 1, // Ensures it stays on top
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px", // Rounded corners
        }}
      >
        <Typography variant="h1" sx={{ color: "white" }}>
          FreshThreads
        </Typography>
      </Box>
    </Box>
  );
}
