import React from 'react';
import Navbar from "..//components/navbar.js";
import Hero from "..//components/Hero.js";
import HomeImg from "..//assets/Home.jpg";
import Destination from "..//components/Destination.js";
import Footer from "..//components/Footer.js";

function Home (){
    return(
        <>
        <Navbar/>
        <Hero cName="hero"
        heroImg={HomeImg}
        css="hero-text"
        title="We Travel Not To Escape Life, But For Life Not To Escape Us."
        text="Choose Your Favorite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Footer/>
        </>
    )
}

export default Home;