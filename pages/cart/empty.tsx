import ShopLayout from "../../components/layouts/ShopLayout"
import NextLink from 'next/link'
import { Box, Typography, Link } from '@mui/material'
import { RemoveShoppingCartOutlined } from "@mui/icons-material"


const EmptyCartPage = () => {
  return (
    <ShopLayout title="carrito vacio" pageDescription="No hay articulos en el carrito.">
      <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 200px)"
          sx={{
            flexDirection: { xs: 'column', sm: 'row' }
          }}
        >
            <RemoveShoppingCartOutlined sx={{ fontSize: 70}} />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography ml={2}> Su carrito esta vació.</Typography>
              <NextLink href="/" passHref>
                <Link typography="h4" color="secondary">
                  Regresar
                </Link>
              </NextLink>
            </Box>
        </Box>
    </ShopLayout>
  )
}

export default EmptyCartPage