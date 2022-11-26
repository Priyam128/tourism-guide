import React from 'react';
import Navbar from "..//components/navbar.js";
import Hero from "..//components/Hero.js";
import PunjabImg from "..//assets/Punjab.jpg";
import Footer from "..//components/Footer.js";
import Punjab from "..//components/PunjabInfo.js";


function PunjabPage (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={PunjabImg}
        css="hero-mid"
        title="Punjab"
        url="/states/punjab"
        btnClass="hide"
        />
        <Punjab/>
        <Footer/>
        </>
    )
}

export default PunjabPage;