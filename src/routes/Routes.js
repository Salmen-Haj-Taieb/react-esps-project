import React from 'react'
import { BrowserRouter, Routes as ComponentsRoutes, Route } from "react-router-dom"
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
export default function Routes(props) {
    return (
        <BrowserRouter>
            <ComponentsRoutes>
                <Route path='/' ><SignUp /></Route>
                <Route path='/signup' ><SignUp /></Route>
                <Route path='/signin'><SignIn /></Route>
            </ComponentsRoutes>
        </BrowserRouter>
    )
}
