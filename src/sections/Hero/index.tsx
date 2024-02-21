import { Box, Typography } from '@mui/material'
import classNames from 'classnames'
import React from 'react'

const HeroTitle = ({ title, gradient = false }: { title: string, gradient?: boolean}) => <Typography className={classNames('font-alfa-slab text-[25px] tablet:text-[35px] minLaptop:text-[56px] laptopView:text-[80px]', { "text-gradient": gradient})}>{title}</Typography> 

const Hero = () => {
  return (
    <Box>
      <HeroTitle title='PRENEZ LE CONTRÔLE' gradient />
      <HeroTitle title='Sur Les Réseaux' />
    </Box>
  )
}

export default Hero