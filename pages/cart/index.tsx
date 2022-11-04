import ShopLayout from "../../components/layouts/ShopLayout"
import { Box, Grid, Button, Typography, Card, CardContent, Divider } from "@mui/material"
import { CartList, OrderSummary } from "../../components/cart"


const CartPage = () => {
  return (
    <ShopLayout title="Carrito de compra " pageDescription="Carrito de compra de la tienda.">
      <Typography variant="h1">Carrito</Typography>

      <Grid container>

        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Orden</Typography>
              <Divider sx={{ my: 1 }} />

              {/* order summary */}
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

export default CartPage