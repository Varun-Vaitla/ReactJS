import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Product from './Product'
import Cart from './Cart'
let router=createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/signup",
        element:<Signup></Signup>
    },
    {
        path:"/product",
        element:<Product></Product>
    },
    {
        path:"/cart",
        element:<Cart></Cart>
    }
   
])

const App = () => {
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default App
