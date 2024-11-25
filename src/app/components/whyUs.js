"use client"; // Required for Next.js App Router

import { Box, Typography, Grid } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PercentIcon from "@mui/icons-material/Percent";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import UpdateIcon from "@mui/icons-material/Update";

const WhyChooseUs = () => {
  const services = [
    {
      icon: <LightbulbIcon style={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Personalized Experience",
      description:
        "We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.",
    },
    {
      icon: <PercentIcon style={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Affordable Pricing",
      description:
        "Prices that suit your pocket is one of our USP. An option of choosing between 2 types of pricing is available.",
    },
    {
      icon: (
        <LocalLaundryServiceIcon style={{ fontSize: 40, color: "#1976d2" }} />
      ),
      title: "Convenience",
      description:
        "With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.",
    },
    {
      icon: <VerifiedIcon style={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Quality",
      description:
        "We use the best-in-class products to assure that your favorite clothes are always there for you to wear.",
    },
    {
      icon: <LocalShippingIcon style={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Express Delivery",
      description:
        "Forgot to wash your clothes for an interview/business meeting? Never mind. With our express delivery, we’ll get your laundry done in less than 8 hours.",
    },
    {
      icon: <UpdateIcon style={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Instant Order Update",
      description:
        "Regular updates of your order to help you keep track of your laundry and plan accordingly.",
    },
  ];

  return (
    <Box sx={{ padding: "50px 20px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
        WHY CHOOSE US
      </Typography>
      <Box sx={{ width: "50px", height: "4px", backgroundColor: "#1976d2", margin: "0 auto 30px" }} />
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ textAlign: "center", padding: "10px" }}
          >
            <Box>{service.icon}</Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", margin: "10px 0" }}>
              {service.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#555" }}>
              {service.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
