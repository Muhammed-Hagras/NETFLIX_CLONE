import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import LogNav from "../components/LogNav";
import SignUp from "../components/SignUp";
import "./log.css";

export default function Login() {
  const [signIn, setsignIn] = useState(false);
  return (
    <>
      <div className="loginPage">
        <div className="login__background">
          <LogNav />
          <div className="login__gradient" />
          <div className="login__body">
            {signIn ? (
                <SignUp/>
            ):
            (<>
              <h1>Unlimited films, TV Programs and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
            
            <div className="login__input d-flex justify-content-center">
              <Form className="d-flex">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" style={{borderRadius: "0"}} />
                  
                </Form.Group>
                <Button onClick={()=> setsignIn(true)}
                variant="danger" className=""   style={{borderRadius: "0", height:"70%"}} >
                  Get Started
                </Button>
              </Form>
            </div>
            </>)}
          </div>
        </div>
      </div>
    </>
  );
}

