import React from 'react'
import Button from 'react-bootstrap/Button';
export default function ButtonComp(props) {
  return (
    <div>
       <Button variant="success" onClick={
        ()=>{
            console.log(props.values)
            props.display()
        }
        
        }>Sign Up</Button>
    </div>
  )
}
