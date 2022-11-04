import { Typography, Grid, TextField, Select, FormControl,  MenuItem, Box, Button } from "@mui/material"
import ShopLayout from "../../components/layouts/ShopLayout"

const Address = () => {
 return (
   <ShopLayout title="Dirección checkout" pageDescription="confirmación la dirección destino">
     <Typography variant="h1">Dirección</Typography>

    <Grid
      container
      spacing={2}
      mt={2}
    >

      <Grid
        item
        xs={12}
        sm={6}
      >
        <TextField label="Nombre" variant="filled" fullWidth />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
      >
        <TextField label="Apellido" variant="filled" fullWidth />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
      >
        <TextField label="Dirección" variant="filled" fullWidth />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
      >
        <TextField label="Dirección 2" variant="filled" fullWidth />
      </Grid>


      <Grid
        item
        xs={12}
        sm={6}
      >
        <TextField label="Código postal" variant="filled" fullWidth />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
      >
        <TextField label="Ciudad" variant="filled" fullWidth />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
      >
        <FormControl fullWidth>
          <Select
            variant="filled"
            label="País"
            value="1"
          >
            <MenuItem value={1} >México</MenuItem>
            <MenuItem value={2} >Canada</MenuItem>
            <MenuItem value={3} >Estados Unidos</MenuItem>
            <MenuItem value={4} >Brazil</MenuItem>
          
          </Select>
        </FormControl>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
      >
        <TextField label="Teléfono" variant="filled" fullWidth />
      </Grid>

    </Grid>

    <Box mt={5} display="flex" justifyContent="center">
      <Button color="secondary" className="circular-btn" size="large">
        Revisar pedido
      </Button>
    </Box>

   </ShopLayout>
 )
}

export default Address