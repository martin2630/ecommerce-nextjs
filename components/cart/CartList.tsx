import { CardMedia, CardActionArea, Grid, Link, Box, Typography, Button} from '@mui/material'
import NextLink from 'next/link'
import { initialData } from "../../database/products"
import { ItemCounter } from '../ui'

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props{
  editable: boolean;
}

export const CartList = ({ editable = false }) => {
  return (
    <div>
      {productsInCart && productsInCart.map( (product) => (
        <Grid
          container
          key={product.slug}
          spacing={2}
          mb={1}
        >

          <Grid
            item
            xs={3}
          >
            <NextLink href="/product/slug" passHref>
              <Link>
                <CardActionArea>
                  <CardMedia 
                    image={`/products/${product.images[0]}`}
                    component="img"
                    sx={{ borderRadius: '5px'}}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>

          <Grid
            item
            xs={7}
          >
            <Box
              display="flex"
              flexDirection="column"
            >
              <Typography variant="body1">{ product.title }</Typography>
              <Typography variant="body1"> Talla: <strong>M</strong></Typography>

              {/* Conditional */}
              { editable ? (
                <ItemCounter />
              ) : (
                <Typography variant="h5">3 items</Typography>
              )}

            </Box>
          </Grid>

          { editable && (
            <Grid
              item
              xs={2}
            >
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Typography variant="subtitle2">{ `$${product.price}` }</Typography>
                <Button
                  variant="text"
                  color="secondary"
                >
                  Remover
                </Button>

              </Box>

            </Grid>
          )}

        </Grid>
      ))}
    </div>
  )
}