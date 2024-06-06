import { FaBuilding, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import image1 from '../assets/img/carousel-1.jpg'
import image2 from '../assets/img/carousel-2.jpg'
import { FaPeopleGroup } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import room1 from '../assets/img/room-1.jpg'
import room2 from '../assets/img/room-2.jpg'
import room3 from '../assets/img/room-3.jpg'
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { MdOutlineFastfood } from "react-icons/md";
import { MdSpa } from "react-icons/md";
import { MdSportsSoccer } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
import team3 from '../assets/img/team-3.jpg'
import team4 from '../assets/img/team-4.jpg'
import test1 from '../assets/img/testimonial-1.jpg'
import test2 from '../assets/img/testimonial-2.jpg'
import test3 from '../assets/img/testimonial-3.jpg'
import test4 from '../assets/img/testimonial-4.jpg'

//import team7 from '../assets/img/team-7.jpg'
export const navList = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/services",
      text: "Services",
    },
    {
      id: 4,
      path: "/rooms",
      text: "Rooms",
    },
    {
      id: 5,
      path: "/page",
      text: "Page",
      subItems: [
        {
          id: 51,
          path: "/booking",
          text: "Booking",
        },
        {
          id: 52,
          path: "/team",
          text: "Our Team",
        },
        {
          id: 53,
          path: "/testimonial",
          text: "Testimonial",
        },
      ],
    },
    {
      id: 6,
      path: "/contact",
      text: "Contact",
    },
  ];
  export const socialIcons = [
    {
      icon:<FaFacebook/>,
    },
    {
      icon:<FaTwitter/>,
    },
    {
      icon: <FaInstagram/>,
    },
    {
      icon: <FaLinkedin/>,
    },
    {
      icon: <FaYoutube/>,
    },
  ];
  
  export const carouselData = [
    {
      img: image1,
      title: "Discover A Brand Luxurious Hotel",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
    {
      img: image2,
      title: "Discover A Brand Luxurious Hotel",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
  ];
  export const about = [
    {
      icon: <FaBuilding/>,
      text: "Rooms",
      count: "7861",
    },
    {
      icon: <GrGroup/>,
      text: "Staffs",
      count: "1234",
    },
    {
      icon: <FaPeopleGroup/>,
      text: "Clients",
      count: "4321",
    },
  ];
  
  export const services = [
    {
      icon: <FaBuilding/>,
      name: "Rooms & Appartment",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      icon: <MdOutlineFastfood/>,
      name: "Food & Restaurant",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      icon: <MdSpa/>,
      name: "Spa & Fitness",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
  
    {
      icon: <MdSportsSoccer/>,
      name: "Sports & Gaming",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      icon: <LuPartyPopper/>,
      name: "Event & Party",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
  
    {
      icon:<CgGym/>,
      name: "GYM & Yoga",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
  ];
  export const team = [
    {
      image: team1,
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: team2,
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: team3,
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: team4,
      name: "Full Name",
      designation: "Designation",
    },
  ];
  
  export const footerItem = [
    {
      id: 1,
      header: "Company",
      UnitItem: [
        {
          name: "About Us",
        },
        {
          name: "Contact Us",
        },
        {
          name: "Privacy Policy",
        },
        {
          name: "Terms & Condition",
        },
        {
          name: "Support",
        },
      ],
    },
    {
      id: 2,
      header: "Services",
      UnitItem: [
        {
          name: "Food & Restaurant",
        },
        {
          name: "Spa & Fitness",
        },
        {
          name: "Sports & Gaming",
        },
        {
          name: "Event & Party",
        },
        {
          name: "GYM & Yoga",
        },
      ],
    },
  ];
  
  export const footerContact = [
    {
      icon: <i className="fa fa-map-marker-alt me-3"></i>,
      name: "123 Street, New York, USA",
    },
    {
      icon: <i className="fa fa-phone-alt me-3"></i>,
      name: "+012 345 67890",
    },
    {
      icon: <i className="fa fa-envelope me-3"></i>,
      name: "info@example.com",
    },
  ];
  
  export const contact = [
    {
      icon: <IoIosMail/>,
      title: "Booking",
      email: "book@example.com",
    },
    {
      icon: <IoIosMail/>,
      title: "Technical",
      email: "tech@example.com",
    },
    {
      icon:<IoIosMail/>,
      title: "General",
      email: "info@example.com",
    },
  ];
  export const testimonial = [
    {
      description:
        "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
      name: "Client Name",
      profession: "Profession",
      icon: (
       <BsChatRightQuoteFill/>
      ),
      img: test1,
    },
    {
      description:
        "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
      name: "Client Name",
      profession: "Profession",
      icon: (
        <BsChatRightQuoteFill/>
      ),
      img: test2,
    },
    {
      description:
        "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
      name: "Client Name",
      profession: "Profession",
      icon: (
       <BsChatRightQuoteFill/>
      ),
      img: test3,
    },
  ];
  
  export const roomItems = [
    {
      img: room1,
      price: "$110/night",
      name: "Junior Suit",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
  
    {
      img: room2,
      price: "$110/night",
      name: "Executive Suite",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
    {
      img: room3,
      price: "$110/night",
      name: "Super Deluxe",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
  ];
  
  export const facility = [
    {
      icon: <FaBed/>,
      quantity: 3,
      facility: "bed",
    },
    {
      icon: <FaBath/>,
      quantity: 2,
      facility: "bath",
    },
    {
      icon: <FaWifi/>,
      facility: "Wifi",
    },
  ];
  