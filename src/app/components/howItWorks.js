import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const steps = [
  {
    step: "Step 1",
    title: "Schedule a Wash with us",
    image: "/images/step1.png", // Replace with your image path
    description: "",
  },
  {
    step: "Step 2",
    title: "We pick up your clothes",
    image: "/images/step2.jpg", // Replace with your image path
    description: "",
  },
  {
    step: "Step 3",
    title: "We clean your clothes",
    image: "/images/step3.png", // Replace with your image path
    description: "",
  },
  {
    step: "Step 4",
    title: "We deliver clean, hanged or folded clothes",
    image: "images/step4.jpg", // Replace with your image path
    description: "",
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ backgroundColor: "white", py: 8, px: 4 }}>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ color: "#024788", mb: 6, fontWeight: "bold" }}
      >
        HOW IT WORKS: IN 4 EASY STEPS
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: "transparent",
                textAlign: "center",
                boxShadow: "none",
              }}
            >
              <Box
                component="img"
                src={step.image}
                alt={step.title}
                sx={{
                  width: "100%",
                  maxHeight: 150,
                  objectFit: "contain",
                  mb: 2,
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{ color: "gray", fontWeight: "medium" }}
              >
                {step.step}
              </Typography>
              <Typography variant="h6" sx={{ color: "teal", mt: 1 }}>
                {step.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
