import React from 'react'
import {Box,Button,Text} from '@chakra-ui/react'
import image1 from '../../assets/img/carousel-1.jpg'
import Carousel from './Carousel'
import Book from './Book'
import About from './About'
import Rooms from './Room'
import Services from './Services'

import Sliders from './Slider'
import Teams from './Team'
import SimpleSlider from './Slider'
import SimpleSlider2 from './a'
const Home = () => {
  return (
    <>
    <Carousel/> 
     <Book/>
    <About/>
    <Rooms/>
    <Services/>
    <SimpleSlider/>
    <Teams/>
    </>
  )
}

export default Home
