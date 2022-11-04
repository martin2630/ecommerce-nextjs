import { initialData } from "../../database/products"
import ShopLayout from "../../components/layouts/ShopLayout"
import { Grid, Box, Typography, Button } from '@mui/material'
import { ProductSlideShow } from "../../components/products"
import 'react-slideshow-image/dist/styles.css'
import { ItemCounter } from '../../components/ui'
import { SizeSelector } from "../../components/ui/SizeSelector"


const product = initialData.products[0]

const ProductPage = () => {

  return (
    <ShopLayout 
      title={`Producto: ${product.title}`}
      pageDescription={`Description ${product.description}`} 
    >
      <Grid container spacing={2}>

        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images}/>
        </Grid>

        <Grid item xs={12} sm={5}>

          <Box
            display="flex"
            flexDirection="column"
          >
            <Typography variant="h1">{product.title}</Typography>
            <Typography variant="subtitle2" component="h2">{`$${product.title}`}</Typography>
          </Box>

          <Box
            my={2}
          >
            <Typography variant="subtitle2">Cantidad</Typography>
            {/* ItemCounter */}
            <ItemCounter />
            <SizeSelector
              sizes={ product.sizes }
            />
          </Box>
          
          {/* Agregar al carrito */}
           <Button
            fullWidth
            color="secondary"
            className="circular-btn"
          >
            Agregar al carrito
          </Button>

          {/* <Chip label="No hay disponibles" color="error" variant="outlined"/> */}

          {/* Description */}
          <Box mt={3}>
            <Typography variant="subtitle2">Descripción</Typography>
            <Typography variant="body2">{product.description}</Typography>
          </Box>
        </Grid>

      </Grid>
    </ShopLayout>
  )
}

export default ProductPage