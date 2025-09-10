

import { Box, Card, CardMedia, CardContent, Typography, Button, Container, Divider, Chip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import  FetchProduct  from '../Services/FetchProduct';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

const Detail = () => {
 const {id}=useParams()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products",id],
    queryFn: async()=>{
      const FetchedData= await fetch(`https://dummyjson.com/products/${id}`)
      return FetchedData.json()
    },
   
  });

  const product=data ||[]
    console.log("data",data)
    
   
  if (!product) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h6" color="textSecondary" align="center">
          No product selected
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        {/* Product Image */}
        <CardMedia
          component="img"
          alt={product.title}
          height="400"
          image={product.images?.[0] || product.thumbnail}
          sx={{ objectFit: 'cover' }}
        />
        
        <CardContent sx={{ p: 3 }}>
          {/* Product Title */}
          <Typography variant="h4" component="h1" gutterBottom>
            {product.title}
          </Typography>
          
          {/* Category Chip */}
          <Chip 
            label={product.category} 
            color="primary" 
            variant="filled" 
            sx={{ mb: 2 }}
          />
          
          {/* Price */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h3" color="primary" component="span">
              ${product.price}
            </Typography>
            {product.discountPercentage && (
              <Typography variant="body2" color="textSecondary" sx={{ textDecoration: 'line-through', ml: 1 }}>
                ${((product.price * (100 + product.discountPercentage)) / 100).toFixed(2)}
              </Typography>
            )}
            {product.discountPercentage && (
              <Chip 
                label={`Save ${product.discountPercentage}%`} 
                color="success" 
                size="small" 
                sx={{ ml: 1 }}
              />
            )}
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          {/* Description */}
          <Typography variant="h6" gutterBottom>
            Description
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph sx={{ lineHeight: 1.6 }}>
            {product.description}
          </Typography>
          
          {/* Additional Details (Optional) */}
          {product.brand && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" color="textSecondary">
                Brand: {product.brand}
              </Typography>
            </Box>
          )}
          
          {product.rating && (
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2" color="textSecondary">
                Rating: {product.rating} / 5
              </Typography>
            </Box>
          )}
          
          <Divider sx={{ my: 3 }} />
          
          {/* Add to Cart Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<AddShoppingCartIcon />}
              sx={{ 
                px: 4, 
                py: 1.5, 
                fontSize: '1.1rem',
                boxShadow: 2,
                '&:hover': { boxShadow: 3 }
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Detail;
