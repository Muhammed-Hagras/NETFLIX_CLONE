import React, { useRef } from 'react'
import { Form , Button} from 'react-bootstrap'
// import { auth } from '../myDB';
import "./signUp.css"

export default function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    // auth
    // .createUserWithEmailAndPassword(
    //   emailRef.current.value,
    //   passwordRef.current.value
    // )
    // .then(authUser =>{
    //   console.log(authUser)
    // })
    // .catch(error => {
    //   alert(error.message)
    // })
  }

  return (
    <div className="d-flex justify-content-center">
      <Form className="mySignUp" onSubmit={register}>
        <h2 className="">Sign Up</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="danger" className="w-100" type="submit">
          Sign In
        </Button>
        <h4 className="mt-4">
          <span className="signUp__gray">New to Netflix? </span>
          <span className="signUp_link">Sign Up now.</span>
        </h4>
      </Form>
    </div>
  )
}

















