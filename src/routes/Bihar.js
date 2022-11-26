import React from 'react';
import Navbar from "..//components/navbar.js";
import Hero from "..//components/Hero.js";
import BiharImg from "..//assets/Bihar.jpg";
import Footer from "..//components/Footer.js";
import Bihar from "..//components/BiharInfo.js";


function BiharPage (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={BiharImg}
        css="hero-mid"
        title="Bihar"
        url="/states/bihar"
        btnClass="hide"
        />
        <Bihar/>
        <Footer/>
        </>
    )
}

export default BiharPage;