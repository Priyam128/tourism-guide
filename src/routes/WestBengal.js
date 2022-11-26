import React from 'react';
import Navbar from "../components/navbar.js";
import Hero from "../components/Hero.js";
import WestBengalImg from "..//assets/WestBengal.webp";
import Footer from "../components/Footer.js";
import WestBengal from "../components/WestBengalInfo.js";


function WestBengalPage (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={WestBengalImg}
        css="hero-mid"
        title="West Bengal"
        url="/states/westbengal"
        btnClass="hide"
        />
        <WestBengal/>
        <Footer/>
        </>
    )
}

export default WestBengalPage;