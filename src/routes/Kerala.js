import React from 'react';
import Navbar from "..//components/navbar.js";
import Hero from "..//components/Hero.js";
import KeralaImg from "..//assets/Kerala.jpg";
import Footer from "..//components/Footer.js";
import Kerala from "..//components/KeralaInfo.js";


function KeralaPage (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={KeralaImg}
        css="hero-mid"
        title="Kerala"
        url="/states/kerala"
        btnClass="hide"
        />
        <Kerala/>
        <Footer/>
        </>
    )
}

export default KeralaPage;