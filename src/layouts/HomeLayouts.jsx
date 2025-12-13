import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home/Home'



const HomeLayouts = () => {
  return (
    <div>
        <header >
            <nav className='w-11/12 mx-auto '>
                <Navbar></Navbar>
            </nav>
            <hr className='h-0.5 bg-gray-100 border-none ' />
        </header>

        <Outlet>
            <Home></Home>
        </Outlet>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}

export default HomeLayouts