// @ts-ignore
import ReactDOM from 'react-dom/client'
// @ts-ignore
import React from 'react'

import {Routes, Route, Navigate,BrowserRouter} from 'react-router-dom'
import {NotFound} from './Components/Error/NotFound'
import {Home} from './Components/Views/Home'
import {Groups} from './Components/Views/Groups'
import {Tasks} from './Components/Views/Tasks'
import {Login} from './Components/Views/Login'
import '../src/styles.css'

export default function Main() {

    return (
        <BrowserRouter>

        <Routes>
            <Route path ="/login" element ={<Login/>}/>
            <Route path="/app-tareas/" element={<Home/>}>

                <Route path="mis-grupos" element={<Groups/>}/>
                <Route path="mis-tareas" element={<Tasks/>}/>
            </Route>

            <Route path="/" element={<Navigate to="/app-tareas"/>}/>

            <Route path="*" element={<NotFound/>}/>

        </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>,
)

