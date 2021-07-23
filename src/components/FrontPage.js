import React from 'react'
import { Navbar } from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Food from './Food/Food'

export const FrontPage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Services/>
            <Food/>
        </div>
    )
}
