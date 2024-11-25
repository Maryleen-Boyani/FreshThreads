"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ShirtIcon from "@mui/icons-material/Checkroom";
import LaundryBagIcon from "@mui/icons-material/ShoppingBag";
import HangerIcon from "@mui/icons-material/DryCleaning";

const PriceCard = ({ icon, price, description }) => (
  <Card
    sx={{
      textAlign: "center",
      boxShadow: "none",
      backgroundColor: "transparent",
    }}
  >
    <CardContent>
      {icon}
      <Typography variant="h6" sx={{ marginTop: "10px", color: "#024788" }}>
        {price}
      </Typography>
      <Typography variant="body2" sx={{ color: "gray", marginTop: "5px" }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const AffordablePrices = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/order"); // Navigate to the '/order' route
  };

  return (
    <Box sx={{ padding: "40px 20px", textAlign: "center" }}>
      {/* Title */}
      <Typography variant="h4" sx={{ marginBottom: "10px" }}>
        AFFORDABLE PRICES
      </Typography>
      <Box
        sx={{
          width: "50px",
          height: "4px",
          backgroundColor: "blue",
          margin: "10px auto",
        }}
      />

      {/* Grid for Cards */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ marginTop: "30px" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <PriceCard
            icon={<ShirtIcon sx={{ fontSize: "60px", color: "gray" }} />}
            price="From ₦750 per shirt"
            description="Shirt service"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PriceCard
            icon={<LaundryBagIcon sx={{ fontSize: "60px", color: "gray" }} />}
            price="₦200 per item"
            description="Laundry service"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PriceCard
            icon={<HangerIcon sx={{ fontSize: "60px", color: "gray" }} />}
            price="From ₦400 per item"
            description="Dry cleaning"
          />
        </Grid>
      </Grid>

      {/* Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: "30px",
          padding: "10px 30px",
          textTransform: "none",
        }}
        onClick={handleNavigate}
      >
        SEE ALL PRICES HERE
      </Button>
    </Box>
  );
};

export default AffordablePrices;
