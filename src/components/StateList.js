import React from 'react';
import ImageGrid from "./ImageGrid";
import { Link } from 'react-router-dom';
import "./StateListStyles.css";

function StateList() {
    var links = [
        "bihar",
        "delhi",
        "goa",
        "kerala",
        "maharashtra",
        "punjab",
        "rajasthan",
        "tamilnadu",
        "uttarpradesh",
        "westbengal"
    ];
    var randIdx = Math.random() * links.length;
    randIdx = parseInt(randIdx, 10);
    var link = "/states/" + links[randIdx];
    return (
        <div className="states-container">
            <h1>Welcome To India!</h1>
            <p>I'm originally from India, and it's one of the most amazing countries in the world. There's so much to see and do, and the people are incredibly friendly and welcoming. India is a truly incredible country, and here are 10 reasons why. The Taj Mahal is one of the most incredible buildings in the world, and it's located in India. Kerala's backwaters are one of the most unique and relaxing places in the world. The food in India is absolutely amazing, and there's something for everyone. India is home to some of the most beautiful beaches in the world, including those in Goa. The city of Mumbai is an incredible place, with so much to see and do. India is home to some of the most amazing animals, including tigers, elephants, and monkeys. The ancient city of Varanasi is one of the most fascinating places in the world. The architecture in India is truly incredible, and there are some amazing buildings to see. The climate in India is very diverse, and there's something for everyone, whether you like it hot or cold. India is an incredibly welcoming and hospitable country, and you're guaranteed to have an amazing time if you visit.</p>
            <ImageGrid/>
            <Link to={link}><button>Take Me Anywhere!</button></Link>

        </div>
    )
}

export default StateList;