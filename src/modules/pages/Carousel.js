import React, { useRef } from "react";
import { Box, Button, Container, Image, Link,Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../../components/data";

export default function Carousel() {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container  maxW='full' p={0} mb={5} >
      <Box id="header-carousel" className="carousel slide" data-bs-ride="carousel" >
        <Slider ref={sliderRef} {...settings}>
          {carouselData.map((val, index) => (
            <Box className="carousel-item" key={index}>
              <Image src={val.img} alt="Image" className="w-100" />
              <Box className="carousel-caption d-flex flex-column align-items-center justify-content-center" >
                <Box p={3} maxW="700px">
                  <Box className="section-title" color="white" textTransform="uppercase" mb={3}>
                    {val.subtitle}
                  </Box>
                  <Box as="h1" className="display-3" color="white" mb={4}>
                    {val.title}
                  </Box>
                  <Button href="#" bg='#FEA116' color="white" _hover={{color:"black"}} p={8} width='123px' borderRadius='6px' mr={3} className="animated slideInLeft" >
                  {val.btn1}
                  </Button>
                  <Button href="#" bg="white" p={8} width='123px' borderRadius='6px' className="animated slideInRight " >
                    {val.btn2}
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
        <Button className="carousel-control-prev" onClick={previous} position="absolute" left={0} top="50%" transform="translateY(-50%)">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </Button>
        <Button className="carousel-control-next" onClick={next} position="absolute" right={0} top="50%" transform="translateY(-50%)">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </Button>
      </Box>
    </Container>
  );
}
