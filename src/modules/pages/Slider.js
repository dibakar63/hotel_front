import React,{useRef} from "react";
import { testimonial } from "../../components/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Text, Image,Button } from "@chakra-ui/react";

export default function SimpleSlider() {
//     const sliderRef = useRef(null);

//   const next = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   const previous = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
// }
//console.log(testimonial)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };


  return (
    <Box className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" display='flex' alignItems='center' justifyContent='center' p={10} data-wow-delay="0.1s">
      <Container width='80%'>
        <Slider    {...settings} >
          {testimonial.map((item, key) => (
            <Box key={key} p={10}  className="owl-carousel testimonial-item position-relative bg-white rounded overflow-hidden">
              <Text textAlign='left' fontSize='md'>{item.description}</Text>
              <Box display="flex" alignItems="center">
                <Image src={item.img} alt="avatar" boxSize="45px" mb={15} />
                <Box ps={3}>
                  <Text fontWeight="bold" mb={1} textAlign='left'>
                    {item.name}
                  </Text>
                  <Text fontSize="sm" textAlign='left'>{item.profession}</Text>
                </Box>
              </Box>

              <Text fontSize='25px' color='#FEA116'>{item.icon}</Text>
            </Box>
          ))}
        </Slider>
        
      </Container>
    </Box>
  );
}
