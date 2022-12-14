import { Typography, Grid } from "@mui/material"

export const OrderSummary = () => {
  return (
    <Grid container>

      <Grid item xs={6}>
        <Typography>No. productos</Typography>
      </Grid>

      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="end"
      >
        <Typography>3 items</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="end"
      >
        { '$130.45' }
      </Grid>

      <Grid item xs={6}>
        <Typography>Impuestos (15%)</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="end"
      >
        <Typography>{ '$13' }</Typography>
        
      </Grid>

      <Grid item xs={6} mt={2}>
        <Typography variant="subtitle1">Total</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="end"
        mt={2}
      >
        <Typography variant="subtitle1">{ '$133.45' }</Typography>
      </Grid>

    </Grid>
  )
}