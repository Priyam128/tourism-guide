import React from 'react';
import Navbar from "..//components/navbar.js";
import Hero from "..//components/Hero.js";
import MaharashtraImg from "..//assets/Maharashtra.jpeg";
import Footer from "..//components/Footer.js";
import Maharashtra from "..//components/MaharashtraInfo.js";


function MaharashtraPage (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={MaharashtraImg}
        css="hero-mid"
        title="Maharashtra"
        url="/states/maharashtra"
        btnClass="hide"
        />
        <Maharashtra/>
        <Footer/>
        </>
    )
}

export default MaharashtraPage;