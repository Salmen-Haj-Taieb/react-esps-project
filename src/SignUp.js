import React, { useState } from 'react'
import ButtonComp from './ButtonComp'
import SignUpComp from './SignUpComp'
import Card from 'react-bootstrap/Card'
import { URL } from './config/Config'
export default function SignUp() {
    const [first, setFisrt] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const display = () => {
        fetch(URL,
            {
                method: "POST",
                body: JSON.stringify({
                    firstName: first,
                    lastName: last,
                    email: email,
                    password: pwd
                }),
                headers: {
                    "Content-type": "application/json", Accept: "application/json"
                },
            }
        ).then((res) => res.json())
            .then((resJson) =>
                console.log(resJson))
            .catch((error) => console.log(error))
    }

    return (
        <Card style={{ width: '18rem' }}>
            <SignUpComp setValue={setFisrt} name="First Name" />
            <SignUpComp setValue={setLast} name="Last Name" />
            <SignUpComp setValue={setEmail} name="E-mail" />
            <SignUpComp setValue={setPwd} name="Password" type="password" />
            <ButtonComp values={{
                'first': first,
                'last': last,
                'email': email,
                'pwd': pwd
            }} display={display} />
        </Card>
    )


}
