import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'

export default function LogNav() {
  return (
    <Navbar  variant="dark" style={{ height: '80px' }}>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          width="80"
          height="80"
          className="d-inline-block align-top"
        />
        
      </Navbar.Brand>
      <Button variant="danger" 
      style={{borderRadius: "0"}}
      >Sign In</Button>
        
    </Container>
  </Navbar>
  )
}
