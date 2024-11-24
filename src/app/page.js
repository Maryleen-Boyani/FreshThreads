import {
  Box,
  Card,
  Button,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

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
              src="/images/laundry2.jpg"
              alt="Banner 1"
              sx={{ paddingTop: 8 }}
            />
          </Grid2>
        </Grid2>
      </Box>

      <Box
        sx={{
          position: "absolute",
          padding: 10,
          left: "15%",
          width: "70%",
          // Adjust height as needed
          bgcolor: "white",
          zIndex: 1, // Ensures it stays on top
          display: "flex",

          gap: 6,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px", // Rounded corners
        }}
      >
        {/* first card */}
        <Card sx={{ bgcolor: "white", fontWeight: 2, width: 500, height: 200 }}>
          <CardContent>
            <CardMedia
              component="img"
              sx={{ maxWidth: 345 }}
              image="/images/sorting.jpg"
              height="80"
              alt="Fetching..."
            />
            <Typography variant="subtitle1" sx={{ color: "black" }}>
              Sorting & pre-stain treatment
            </Typography>
          </CardContent>
        </Card>
        {/* second card */}
        <Card sx={{ bgcolor: "white", width: 600, height: 200 }}>
          <CardContent>
            <CardMedia
              component="img"
              sx={{ maxWidht: 345 }}
              height="80"
              image="/images/wash.jpg"
              alt="Fetching..."
            />
            <Typography variant="subtitle1" sx={{ color: "black" }}>
              Wash and Rinse
            </Typography>
          </CardContent>
        </Card>
        {/*third card */}
        <Card sx={{ bgcolor: "white", width: 500, height: 200 }}>
          <CardContent>
            <CardMedia
              component="img"
              sx={{ maxWidth: 345 }}
              image="/images/machineDry.jpg"
              height="80"
              alt="Fetching..."
            />
            <Typography variant="subtitle1" sx={{ color: "black" }}>
              Machine Dry
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: "white", width: 500, height: 200 }}>
          <CardContent>
            <CardMedia
              component="img"
              sx={{ maxWidth: 345 }}
              image="/images/airDry.jpg"
              height="80"
              alt="Fetching..."
            />
            <Typography variant="subtitle1" sx={{ color: "black" }}>
              Air Dry
            </Typography>
          </CardContent>
        </Card>
        {/*fourth card */}
        <Card sx={{ bgcolor: "white", width: 500, height: 200 }}>
          <CardContent>
            <CardMedia
              component="img"
              sx={{ maxWidth: 345 }}
              image="/images/iron.jpg"
              height="80"
              alt="Fetching..."
            />
            <Typography variant="subtitle1" sx={{ color: "black" }}>
              Iron & fold
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
