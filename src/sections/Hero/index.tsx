import { Box, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <Box className='absolute w-screen h-screen max-w-screen max-h-screen px-[196px] flex flex-col justify-center border-solid border-white border-2'>
      <Typography className='text-[250px]'>PRENEZ LE CONTRÔLE</Typography>
      <Typography className='text-white font-alfa-slab text-[80px]'>Sur Les Réseaux</Typography>
    </Box>
  )
}

export default Hero