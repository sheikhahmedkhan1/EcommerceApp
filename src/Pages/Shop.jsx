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
        Shop Our Products xs={12} sm={6} md={4} lg={3}
      </Typography>
      <Grid container justifyContent="center" spacing={7}>
        {products.map((product) => (
          <Grid
            sx={{
              height: 547,
              minHeight: 463,
              width: 412,
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
            key={product.id}
          >
            <Paper
              sx={{ minWidth: 345, height: 547, border: "2px solid #F7F7F7" }}
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
                  {product.title.slice(0, 36)}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Category: {product.category}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginY: 1 }}
                >
                  {product.description.slice(0, 123)}
                </Typography>
                <Typography variant="h6" color="primary">
                  {`Price : ${product.price}$`}
                </Typography>
              </CardContent>
              <Button
                variant="outlined"
                sx={{
                  background:
                    "linear-gradient(90deg, #3D78C3 0%, #1C98AD 100%)",

                  fontWeight: "bold",
                  borderRadius: "7px",
                  width: "95%",
                  height: "10%",
                  px: 3,
                  ml: 1.3,
                  mt: 8.5,
                  py: 1,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  textTransform: "none",
                  transition: "0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #3D78C3 0%, #1C98AD 100%)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <NavLink
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/product/${product.id}`}
                >
                  View Details
                </NavLink>
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Shop;
