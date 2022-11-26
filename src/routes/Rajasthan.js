import React from 'react';
import Navbar from "..//components/navbar.js";
import Hero from "..//components/Hero.js";
import RajasthanImg from "..//assets/Rajasthan.jpg";
import Footer from "..//components/Footer.js";
import Rajasthan from "..//components/RajasthanInfo.js";


function RajasthanPage (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={RajasthanImg}
        css="hero-mid"
        title="Rajashtan"
        url="/states/rajasthan"
        btnClass="hide"
        />
        <Rajasthan/>
        <Footer/>
        </>
    )
}

export default RajasthanPage;