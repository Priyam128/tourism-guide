import React from 'react';
import Navbar from "..//components/navbar.js";
import Hero from "..//components/Hero.js";
import DelhiImg from "..//assets/Delhi.jpg";
import Footer from "..//components/Footer.js";
import Delhi from "..//components/DelhiInfo.js";


function DelhiPage (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={DelhiImg}
        css="hero-mid"
        title="Delhi"
        url="/states/delhi"
        btnClass="hide"
        />
        <Delhi/>
        <Footer/>
        </>
    )
}

export default DelhiPage;