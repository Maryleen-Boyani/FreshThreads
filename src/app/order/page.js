import React from "react";
import {
  Grid2,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

// Array of unique card data
const items = [
  {
    id: 1,
    title: "Suit 3pc (Trouser)",
    description: "Blazer, Waistcoat and Trousers",
    price: "₦ 3,000",
    image: "/images/2.jpg",
  },
  {
    id: 2,
    title: "Jacket (Fur)",
    description: "Jacket made of fur",
    price: "₦ 4,500",
    image: "/images/Fur jacket.jpg",
  },
  {
    id: 3,
    title: "Pillow",
    description: "Pillow",
    price: "₦ 600",
    image: "/images/pillow.jpg",
  },
  {
    id: 4,
    title: "Shirts",
    description: "Folded Formal or Casual Dress Shirt",
    price: "₦ 900",
    image: "/images/shirt.jpg",
  },
  {
    id: 5,
    title: "Suit 2pc (Skirt)",
    description: "Blazer/Jacket and Skirt",
    price: "₦ 2,500",
    image: "/images/skirt.jpg",
  },
  {
    id: 6,
    title: "Bou-Bou (Silk)",
    description: "All Boubou made of silk material",
    price: "₦ 1,900",
    image: "/images/boubou.jpg",
  },
  {
    id: 7,
    title: "Shorten/Lengthen Skirt",
    description: "Shorten/Lengthen Plain Skirt",
    price: "₦ 1,200",
    image: "/images/shorten.jpg",
  },
  {
    id: 8,
    title: "Cardigan/Knitwear",
    description: "Cardigan or Knitwear",
    price: "₦ 1,000",
    image: "/images/knitwear.jpg",
  },
  {
    id: 9,
    title: "Head Gear (Native)",
    description: "Native Igele, Ipele or Iborun from all Fabrics",
    price: "₦ 700",
    image: "/images/headgear.jpg",
  },
  {
    id: 10,
    title: "Table Cloth (Luxury)",
    description: "Luxury table covers",
    price: "₦ 1,600",
    image: "/images/table.jpg",
  },
  {
    id: 11,
    title: "Chasuble",
    description: "Religious clerical agbada-like wear",
    price: "₦ 2,000",
    image: "/images/chasuble.jpg",
  },
  {
    id: 12,
    title: "Bath Curtain",
    description: "Bathroom curtain",
    price: "₦ 1,500",
    image: "/images/curtain.jpg",
  },
  {
    id: 13,
    title: "Academic Gown",
    description: "Lawyer's robe, choir robe, convocation gown",
    price: "₦ 1,500",
    image: "/images/academic gown.jpg",
  },
  {
    id: 14,
    title: "Sweater",
    description: "Includes sweater for babies",
    price: "₦ 300",
    image: "/images/sweater.jpg",
  },
  {
    id: 15,
    title: "Jacket",
    description: "All non-delicate jacket",
    price: "₦ 1,500",
    image: "/images/jacket.jpg",
  },
  {
    id: 16,
    title: "Boxers",
    description: "Men underwear below the stomach",
    price: "₦ 400",
    image: "/images/boxers.jpg",
  },
  {
    id: 17,
    title: "T-Shirt",
    description: "All T-shirts & Men polo",
    price: "₦ 750",
    image: "/images/t-shirt.jpg",
  },
  {
    id: 18,
    title: "Suit 2pc",
    description: "Suit Jacket & Trouser",
    price: "₦ 2,500",
    image: "/images/suit2.jpg",
  },
  {
    id: 19,
    title: "Jumpsuit/Catsuit",
    description: "All jumpsuits or Catsuits",
    price: "₦ 1,300",
    image: "/images/jumpsuit.jpg",
  },
  {
    id: 20,
    title: "Bath Towel",
    description: "Body bath towel",
    price: "₦ 800",
    image: "/images/towel.jpg",
  },
  {
    id: 21,
    title: "Day Dress",
    description: "Day dress for babies 0-2 years",
    price: "₦ 450",
    image: "/images/dress.jpg",
  },
  {
    id: 22,
    title: "Special Buttons",
    description: "Special Buttons",
    price: "₦ 1,800",
    image: "/images/botton.jpg",
  },
  {
    id: 23,
    title: "Top/Polo",
    description: "For girls 2-10 years",
    price: "₦ 400",
    image: "/images/polo.jpg",
  },
  {
    id: 24,
    title: "Ishiagu",
    description: "Traditional cloth worn mostly in eastern Nigeria",
    price: "₦ 2,500",
    image: "/images/Ishiagu.jpg",
  },
  {
    id: 25,
    title: "Skirt (Ankara)",
    description: "Female skirt made with Ankara fabric",
    price: "₦ 750",
    image: "/images/skirt2.jpg",
  },
];

const ItemCard = ({ title, description, price, image }) => (
  <Card
    sx={{
      height: "100%", // Ensures cards fill available height
      width: "100%", // Ensures cards fill available width
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardMedia
      component="img"
      height="150"
      image={image}
      alt={title}
      sx={{ objectFit: "cover" }}
    />
    <CardContent>
      <Typography variant="h6" component="div" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2, // Limit description to 2 lines
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </Typography>
      <Typography
        variant="body1"
        color="text.primary"
        sx={{ margin: "10px 0" }}
      >
        Price: {price}
      </Typography>
      <Button variant="contained" color="primary">
        Add
      </Button>
    </CardContent>
  </Card>
);

const CardGrid = () => (
  <Grid2
    container
    spacing={3}
    sx={{
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto", // Center grid on the screen
    }}
  >
    {items.map((item) => (
      <Grid2
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        key={item.id}
        sx={{ display: "flex" }}
      >
        <ItemCard {...item} />
      </Grid2>
    ))}
  </Grid2>
);

export default CardGrid;
