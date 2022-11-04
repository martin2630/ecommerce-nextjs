import { FC, useEffect, useState, useMemo } from "react"
import NextLink from 'next/link'
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Link,
} from '@mui/material'
import { IProduct } from '../../interfaces'

interface Props {
  product: IProduct,
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)

  const productImage = useMemo( () => {
    return isHovered ? `products/${product.images[1] }`: `products/${product.images[0]}`
  }, [isHovered])

  return (
    <>
      <Grid
        item
        xs={6}
        sm={4}
        onMouseEnter={()=> setIsHovered(true) }
        onMouseLeave={()=> setIsHovered(false) }
        mt={2}
      >
        <Card>
          <NextLink
            href={`product/${product.slug}`}
            passHref
            prefetch={false}
          >
            <Link>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={productImage}
                  alt={ product.title }
                  sx={{ transition: 'all 0.5s ease-out'}}
                  className="fadeIn"
                />
              </CardActionArea>
            </Link>
          </NextLink>
        </Card>

        <Box
          mt={1} 
          className="fadeIn"
        >
          <Typography> {product.title} </Typography>
          <Typography> {`$${product.price}`} </Typography>
        </Box>
      </Grid>

    </>
  )
}