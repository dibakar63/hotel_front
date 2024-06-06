import { Flex, Box,Grid, IconButton, useDisclosure, Stack, Collapse, Text, Button, SimpleGrid, position } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate,Link } from "react-router-dom";
import {useState} from 'react'
import './nav.css'
import { Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons'
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [show,setShow]=useState(false)
  const { isOpen, onToggle } = useDisclosure();
   const navigate=useNavigate();

  return (
    <Flex
      align="center"
      justify="space-evenly"
      background="#0F172B"
      padding={{ base: "0.5rem 1rem", md: "1rem 2rem" }}
      borderBottom="1px"
      height='fit-content'
      width='full'
      gap={10}
      borderColor="gray.200"
    >
      <Box display='flex' p={4} gap={4} cursor='pointer' w='20%'>
        <Text fontSize='20px' mt={10} ml={35}  color='#FEA116' onClick={()=>navigate('/')} fontWeight="bold">HOTELIER</Text>
       
      </Box>
      {/* <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem  command='⌘T'>
      New Tab
    </MenuItem>
    <MenuItem  command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem  command='⌘O'>
      Open File...
    </MenuItem>
  </MenuList>
</Menu> */}

      <Box className="nav-link2" placeItems='center'>
        {/* <IconButton
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle navigation"
        /> */}
        <Link className="nav_link" to='/'>HOME</Link>
        <Link className="nav_link" to='/about'>ABOUT</Link>
        <Link className="nav_link" to='/services'>SERVICES</Link>
        <Link className="nav_link" to='/rooms'>ROOMS</Link>
       
        
        <Menu >
      <MenuButton className="nav_link" as="a"  rightIcon={<ChevronDownIcon />}  >
       
        MENU
        
       
      </MenuButton>
      <MenuList p={5} border='none' >
        <MenuItem className="menuItem" style={{cursor:"pointer", backgroundColor: "white", padding:"10px",width:"103px" ,color: "black",textAlign:"center",border:"none" }} >Booking</MenuItem>
        <MenuItem style={{cursor:"pointer", backgroundColor: "white", padding:"10px",width:"103px" ,color: "black",textAlign:"center",border:"none" }} onClick={()=>navigate('/team')}>Our Team</MenuItem>
        <MenuItem style={{cursor:"pointer", backgroundColor: "white", padding:"10px",width:"103px" ,color: "black",textAlign:"center",border:"none" }} onClick={()=>navigate('/testimonial')}>Testimonals</MenuItem>
      </MenuList>
    </Menu>

        
        <Link className="nav_link" to='/contact'>CONTACT</Link>
      </Box>
      {
        show ? <SimpleGrid  columns={1} className="nav-link" placeItems='center' w='70%'>
        {/* <IconButton
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle navigation"
        /> */}
        <Link className="nav_link" to='/'>HOME</Link>
        <Link className="nav_link" to='/about'>ABOUT</Link>
        <Link className="nav_link" to='/services'>SERVICES</Link>
        <Link className="nav_link" to='/rooms'>ROOMS</Link>
       
        
        <Menu >
      <MenuButton className="nav_link" as="a"  rightIcon={<ChevronDownIcon />}  >
       
        MENU
        
       
      </MenuButton>
      <MenuList p={5} border='none' >
        <MenuItem className="menuItem" style={{cursor:"pointer", backgroundColor: "white", padding:"10px",width:"103px" ,color: "black",textAlign:"center",border:"none" }} >Booking</MenuItem>
        <MenuItem style={{cursor:"pointer", backgroundColor: "white", padding:"10px",width:"103px" ,color: "black",textAlign:"center",border:"none" }} onClick={()=>navigate('/team')}>Our Team</MenuItem>
        <MenuItem style={{cursor:"pointer", backgroundColor: "white", padding:"10px",width:"103px" ,color: "black",textAlign:"center",border:"none" }} onClick={()=>navigate('/testimonial')}>Testimonals</MenuItem>
      </MenuList>
    </Menu>

        
        <Link className="nav_link" to='/contact'>CONTACT</Link>
      </SimpleGrid>
:""
      }

      <Box display={{ base: "none", lg: "block",md:'none' }} className="social" p={20} w='20%'>
        {/* Sidebar content */}
        <Stack spacing={14} direction="row">
          <FaFacebookF style={{color:'#FEA116',fontSize:"15px",cursor:"pointer"}}/>
          <FaTwitter style={{color:'#FEA116',fontSize:"15px",cursor:"pointer"}}/>
          <FaInstagram style={{color:'#FEA116',fontSize:"15px",cursor:"pointer"}}/>
          <FaLinkedin style={{color:'#FEA116',fontSize:"15px",cursor:"pointer"}}/>
          <FaYoutube style={{color:'#FEA116',fontSize:"15px",cursor:"pointer",marginRight:"60px"}}/>
          {/* Add more sidebar items as needed */}
        </Stack>
      </Box>
      <Box className="hamburger" color='white' onClick={()=>setShow(!show)} p={10}>
        {!show ? <HamburgerIcon/> : <CloseIcon/>}
      </Box>

      
    </Flex>
  );
};

export default Navbar;
