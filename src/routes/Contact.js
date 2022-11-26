import React from 'react';
import Navbar from "..//components/navbar.js";
import Hero from "..//components/Hero.js";
import ContactImg from "..//assets/Contact.jpg";
import Footer from "..//components/Footer.js";
import ContactUs from "..//components/Contact.js";

function Contact (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={ContactImg}
        css="hero-mid"
        title="Contact"
        url="/states"
        btnClass="hide"
        />
        <ContactUs/>
        <Footer/>
        </>
    )
}

export default Contact;