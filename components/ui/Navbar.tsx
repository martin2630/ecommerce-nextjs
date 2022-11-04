import NextLink from "next/link";
import { AppBar, Toolbar, Link, Typography, Box, Button, IconButton, Badge } from "@mui/material";
import { ShoppingCartOutlined, SearchOutlined} from '@mui/icons-material';


export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>

        <NextLink href="/"  passHref>
          <Link display='flex' alignItems='center'>
            <Typography variant="h6">Tesla |</Typography>
            <Typography sx={{ marginLeft: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

          <Box sx={{ display: {xs: 'none', sm: 'block' }}}>
            <NextLink href="/category/men" passHref>
              <Link>
                <Button>Hombres</Button>
              </Link>
            </NextLink>
            <NextLink href="/category/women" passHref>
              <Link>
                <Button >Mujeres</Button>
              </Link>
            </NextLink>
            <NextLink href="/category/kid" passHref>
              <Link>
                <Button>Niños</Button>
              </Link>
            </NextLink>
          </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/category/kid"  passHref>
          <Link>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </NextLink>

        <Button>
          Menú
        </Button>

      </Toolbar>
    </AppBar>
  )
}
