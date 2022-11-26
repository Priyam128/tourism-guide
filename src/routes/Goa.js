import React from 'react';
import Navbar from "..//components/navbar.js";
import Hero from "..//components/Hero.js";
import GoaImg from "..//assets/Goa.jpg";
import Footer from "..//components/Footer.js";
import Goa from "..//components/GoaInfo.js";


function GoaPage (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={GoaImg}
        css="hero-mid"
        title="Goa"
        url="/states/goa"
        btnClass="hide"
        />
        <Goa/>
        <Footer/>
        </>
    )
}

export default GoaPage;