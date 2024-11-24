import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const ServiceCard = ({ title, subtitle, label }) => (
  <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
    <CardActionArea>
      {/* <CardMedia component="img" height="140">
        {image}
      </CardMedia> */}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {subtitle}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button
        sx={{ justifyContent: "center", alignItems: "center" }}
        size="small"
        color="primary"
      >
        Choose
      </Button>
    </CardActions>
  </Card>
);
ServiceCard.PropTypes = {
  title: PropTypes.string.isRequired,

  subtitle: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ServiceCard;
