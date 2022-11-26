import React from 'react';
import Navbar from "../components/navbar.js";
import Hero from "../components/Hero.js";
import StatesImg from "..//assets/States.jpg";
import StateList from "../components/StateList.js";
import Footer from "../components/Footer.js";


function States (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero-alt"
        heroImg={StatesImg}
        css="hero-mid"
        title="States"
        url="/state"
        btnClass="hide"
        />
        <StateList/>
        <Footer/>
        </>
    )
}

export default States;