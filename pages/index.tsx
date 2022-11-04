import type { NextPage } from 'next'
import ShopLayout from '../components/layouts/ShopLayout'
import { Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material';
import { initialData } from '../database/products';
import { ProductList } from '../components/products';

const Home: NextPage = () => {
  return (
    <ShopLayout title="Home Tesla Shop" pageDescription='Los mejores productos de tesla'> 
      <Typography variant="h1"> Tienda</Typography>
      <Typography variant="h2"> Todos los productos</Typography>

      <Grid
        container 
        spacing={2}
      >
        <ProductList products={initialData.products as any} />
      </Grid>

    </ShopLayout>
  )
}

export default Home
