import React from 'react'
// pages/404.tsx
import ShopLayout from '../components/layouts/ShopLayout'
import { Box, Typography } from '@mui/material'

export default function Custom404() {
  return (
    <>
      <ShopLayout title="Page not found" pageDescription='page not found description'>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 200px)"
          sx={{
            flexDirection: { xs: 'column', sm: 'row' }
          }}
        >
            <Typography variant="h1" fontSize={80} fontWeight={200}> 404 | </Typography>
            <Typography marginLeft={2}> Page not found </Typography>
        </Box>
      </ShopLayout>
    </>
  )
}