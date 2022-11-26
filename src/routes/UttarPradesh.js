import React from 'react';
import Navbar from "../components/navbar.js";
import Hero from "../components/Hero.js";
import UttarPradeshImg from "..//assets/UttarPradesh.jpg";
import Footer from "../components/Footer.js";
import UttarPradesh from "../components/UttarPradeshInfo.js";


function UttarPradeshPage (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={UttarPradeshImg}
        css="hero-mid"
        title="UttarPradesh"
        url="/states/uttarpradesh"
        btnClass="hide"
        />
        <UttarPradesh/>
        <Footer/>
        </>
    )
}

export default UttarPradeshPage;