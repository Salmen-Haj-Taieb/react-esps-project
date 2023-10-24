import React from 'react'
import PropTypes from 'prop-types'
export default function Button(props) {
    let className = ["default-btn"]
    if(props.className){
        className.push(props.className)
    }
  return (
    <button 
    className={className.join(' ')}
    onClick={props.onClick}>
        {props.text}
    </button>
  )
}

Button.defaultProps={
    className:'',
    text:'Button',
    onClick : ()=>null
}

Button.prototypes={
    text:PropTypes.string
}