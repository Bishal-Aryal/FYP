import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import { Button,Col,Row, Image, Card,Form, Lable } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormContainer from '../FormContainer'
import CheckoutSteps from "../CheckoutSteps";


function EmiForm(){
  const navigate = useNavigate()
  const checkoutHandler = () => {
    navigate(`/login?redirect=/shipping`)
}
    return (
        <div >
         <FormContainer>
         <CheckoutSteps step1/>
          <h1>EMI FORM</h1>
          <Col className="mb-2">
          <Link to='/cart'>Go Back</Link>
          </Col>

         
<Form>
              <Form.Group className="mb-2">
                <Form.Label>Name </Form.Label>
                <Form.Control required type='text' placeholder='Full Name' ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Name </Form.Label>
                <Form.Control required type='email' placeholder='Your Email' ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Contact No.</Form.Label>
                <Form.Control required type='number' placeholder='Phone Number'></Form.Control>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Product Name</Form.Label>
                <Form.Control required type='text' placeholder='Product Name'></Form.Control>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Address</Form.Label>
                <Form.Control required type='text' placeholder='Address'></Form.Control>
              </Form.Group>
              
              <Form.Group  className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control required type='number' placeholder='Price of camera'></Form.Control>
              </Form.Group>

              <Form.Group >
                <Form.Label>Tenure</Form.Label>
                <Form.Control required type='number' placeholder='in months(max=12)'></Form.Control>
              </Form.Group>

              <Form.Group >
                <Form.Label>Intrest</Form.Label>
                <Form.Control required type='number' placeholder='rate%'></Form.Control>
              </Form.Group>


            <Button className='mt-4 mb-4' type='submit' variant='primary'>Apply</Button>
            <Button
                            type='button'
                            className='btn-block ms-5'
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>

            </Form>
                        
         </FormContainer>
         
         
        </div>
    )
}

export default EmiForm;
