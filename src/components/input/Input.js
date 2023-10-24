import React from 'react'
import PropTypes from 'prop-types' 
export default function Input(props) {
    let className=["default-input"]
    if(props.className){
        className.push(props.className)
    }
  return (
    <>
    {props.label && <label>{props.label}</label>}
    <input 
    value={props.value} 
    placeholder={props.placeholder}
    name={props.name}
    id={props.id}
    onChange={props.onChange}
    className={className.join(' ')}
    />
    </>  
  )
}

Input.defaultProps={
    value:"",
    className:"",
    name:"",
    id:"",
    placeholder:"Email",
    onChange:()=>{return}
}
Input.prototype={
    value: PropTypes.string

}
