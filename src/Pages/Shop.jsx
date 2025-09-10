import { useQuery } from "@tanstack/react-query";
import {
  Grid,
  Chip,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Paper,
  Button,
} from "@mui/material";

import { NavLink } from "react-router";
import FetchProduct from "../Services/FetchProduct";

const Shop = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: FetchProduct,
  });
  const products = data?.products || [];
  console.log(products);
  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography color="error">
          Failed to load products: {error?.message || "Something went wrong"}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Shop Our Products
      </Typography>
      <Grid container justifyContent="center" spacing={7}>
        {products.map((product) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Paper
              sx={{ maxWidth: 345, height: 467, border: "2px solid #F7F7F7" }}
              elevation={6}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.thumbnail}
                alt={product.title}
                sx={{ bgcolor: "#F7F7F7", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Category: {product.category}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginY: 1 }}
                >
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {`Price : ${product.price}$`}
                </Typography>
              </CardContent>
            </Paper>
            <Button
              variant="outlined"
              sx={{
                background:
                  "linear-gradient(90deg, #CECCD0FF 0%, #E6ECF7FF 100%)",
              
                fontWeight: "bold",
                borderRadius: "15px",
                px: 3,
                ml:13,
                py: 1,
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                textTransform: "none",
                transition: "0.3s",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #E2EAF8FF 0%, #F7F4FAFF 100%)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <NavLink style={{  color: "#0E0E0EFF",fontWeight: "normal",textDecoration:"none"}} to={`/product/${product.id}`}>View Details</NavLink>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Shop;
