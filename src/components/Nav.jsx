import React, { useEffect, useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default function Nav() {
    const [show, setshow] = useState(false);
    const offestY = window.scrollY;
    const transitionNavbar = () => {
        if( offestY > 100){
            setshow(true);
        } else {
            setshow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar)
    }, [])
    

  return (
    <>
    
  <Navbar bg="black" variant="dark" style={{ height: '80px' }}>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'
          width="80"
          height="80"
          className="d-inline-block align-top"
        />
        
      </Navbar.Brand>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/128009228/original/8e8ad34b012b46ebd403bd4157f8fef6bb2c076b/design-minimalist-flat-cartoon-caricature-avatar-in-6-hours.jpg'
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
        
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
  )
}
