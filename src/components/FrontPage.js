import React from 'react'
import { Navbar } from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Services from './Services/Services'

export const FrontPage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Services/>
        </div>
    )
}
