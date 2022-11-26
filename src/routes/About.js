import React from 'react';
import Navbar from "..//components/navbar.js";
import Hero from "..//components/Hero.js";
import AboutImg from "..//assets/About.jpg";
import Footer from "..//components/Footer.js";
import AboutUs from "..//components/AboutUs.js";


function About (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={AboutImg}
        css="hero-mid"
        title="About"
        url="/about"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;