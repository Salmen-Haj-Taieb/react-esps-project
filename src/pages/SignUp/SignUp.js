import React, { useState } from 'react'
import Input from '../../components/input/Input'
//import {Api} from '../../api/Api' 
export default function SignUp() {
    const [state,setState]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })

    const onChange=(e,key)=>{
        setState({
            ...state,
            [key]:e.target.value
        })
    }
  return (
    <div>
        <Input placeholder={"firstName"}
        onChange={(e)=>onChange(e,"firstName")}/>
        <Input placeholder={"lastName"}
        onChange={(e)=>onChange(e,"lastName")}/>
        <Input placeholder={"Email"}
        onChange={(e)=>onChange(e,"email")}/>
        <Input placeholder={"Password"}
        onChange={(e)=>onChange(e,"password")}/>
    </div>
  )
}