import { FC } from "react";
import { ISizes } from "../../interfaces";
import { Box, Button } from '@mui/material'

interface Props {
  selectedSize?: string;
  sizes: ISizes[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes && sizes.map( size => (
        <Button
          key={size}
          size="small"
          color='primary'
        >
          {size}
        </Button>
      ))}
    </Box>
  )
}