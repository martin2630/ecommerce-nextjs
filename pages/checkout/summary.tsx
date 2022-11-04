import NextLink from 'next/link'
import ShopLayout from "../../components/layouts/ShopLayout"
import { Link, Box, Grid, Button, Typography, Card, CardContent, Divider } from "@mui/material"
import { CartList, OrderSummary } from "../../components/cart"


const SummaryPage = () => {
  return (
    <ShopLayout title="resumen de orden " pageDescription="Resumen de la orden.">
      <Typography variant="h1">Resumen de la orden</Typography>

      <Grid container mt={2}>

        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>

              <Divider sx={{ my: 1 }} />


              <Box
                display="flex"
                justifyContent="space-between"
                alignContent="center"
              >
                <Typography variant='subtitle1'>Dirección de entrega</Typography>
                <NextLink href="/checkout/address" passHref>
                    <Link underline="always">
                        Editar
                    </Link>
                </NextLink>
              </Box>

              
              <Typography>Martín Castillo</Typography>
              <Typography>reg 102</Typography>
              <Typography>Mz 70 lt 23</Typography>
              <Typography>Código postal 77500</Typography>
              <Typography>Quintana Roo, México</Typography>
              <Typography>9981200388</Typography>

              <Divider sx={{ my: 1 }} />

              {/* order summary */}

              <Box
                display="flex"
                justifyContent="end"
                alignContent="center"
              >
                <NextLink href="/cart" passHref>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box mt={3}>
                <Button
                  color="secondary"
                  className="circular-btn"
                  fullWidth
                >
                  Checkout
                </Button>
              </Box>

              
            </CardContent>

          </Card>

        </Grid>

      </Grid>

    </ShopLayout>
  )
}

export default SummaryPage