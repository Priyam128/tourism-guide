import React from 'react';
import Navbar from "../components/navbar.js";
import Hero from "../components/Hero.js";
import TamilNaduImg from "..//assets/TamilNadu.jpg";
import Footer from "../components/Footer.js";
import TamilNadu from "../components/TamilNaduInfo.js";


function TamilNaduPage (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={TamilNaduImg}
        css="hero-mid"
        title="Tamil Nadu"
        url="/states/tamilnadu"
        btnClass="hide"
        />
        <TamilNadu/>
        <Footer/>
        </>
    )
}

export default TamilNaduPage;