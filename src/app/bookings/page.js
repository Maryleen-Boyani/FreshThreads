"use client";
import { Box, Typography, Container, Button, Grid2 } from "@mui/material";
import ServiceCard from "../components/serviceCard";
import { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import foldImage from "../../../public/images/fold.png";

export default function BookingsPage() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleComplete = () => {
    if (!selectedDate) {
      alert("Please select a date and time for laundry pickup!");
      return;
    }
    alert(`Laundry pickup scheduled for: ${selectedDate}`);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "teal", color: "#fff" }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Welcome to FreshThreads Bookings Page
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Schedule your laundry pickup and explore our premium services!
        </Typography>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg">
        <Grid2 container spacing={2} sx={{ marginTop: 4 }}>
          <Grid2 size={4}>
            <ServiceCard
              title={"Stain Pre-Treatment"}
              image={foldImage}
              subtitle={"This is the stain pre-treatment process"}
              label={"Choose"}
            />
          </Grid2>
          <Grid2 size={4}>
            <ServiceCard
              title={"Wash"}
              subtitle={"This is the second step"}
              label={"Choose"}
            />
          </Grid2>
          <Grid2 size={4}>
            <ServiceCard
              title={"Air-Dry"}
              subtitle={"This is a specific task"}
              label={"Choose"}
            />
          </Grid2>
          <Grid2 size={4}>
            <ServiceCard
              title={"Machine dry"}
              subtitle={"This is the alternative step"}
              label={"Choose"}
            />
          </Grid2>
          <Grid2 size={4}>
            <ServiceCard
              title={"Iron and fold"}
              subtitle={"This is the second last step"}
              label={"Choose"}
            />
          </Grid2>
          <Grid2 size={4}>
            <ServiceCard
              title={"Quality checks"}
              subtitle={"This is the last step"}
              label={"Choose"}
            />
          </Grid2>
        </Grid2>
        
      </Container>

      {/* Date and Time Picker Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" textAlign="center" sx={{ marginBottom: 2 }}>
          Schedule Pickup
        </Typography>
        <Box
          sx={{
            maxWidth: "400px",
            margin: "0 auto",
            backgroundColor: "#ffffff22",
            padding: 3,
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Select Date & Time"
              disablePast
              value={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#80cbc4", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#004d40", // Border color when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff", // Default label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fff", // Label color when focused
                },
                "& .MuiInputBase-input": {
                  color: "#fff", // Input text color
                },
              }}
            />
          </LocalizationProvider>
        </Box>
      </Box>

      {/* Complete Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#00695c",
            "&:hover": { backgroundColor: "#004d40" },
            paddingX: 3,
            paddingY: 1.5,
          }}
          onClick={handleComplete}
        >
          <Typography sx={{ fontSize: "1rem" }}>Complete Booking</Typography>
        </Button>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          textAlign: "center",
          padding: 2,
          backgroundColor: "teal",
          color: "#fff",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} FreshThreads. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
