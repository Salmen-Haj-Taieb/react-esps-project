import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
export default function SignUpComp (props) {
  const [value,setValue]=useState("")
  return (
    
    <Form.Group className="mb-3">
        {/* <Form.Label>{props.name}</Form.Label> */}
        <Form.Control type={props.type} placeholder={props.name} name={props.name} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
  )
}

SignUpComp.defaulProps={type : "text"}