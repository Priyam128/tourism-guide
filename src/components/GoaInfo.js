import React from 'react';
import "./InfoStyles.css";
import Places from "../assets/Goa-Places.jpg";
import Food from "../assets/Goa-Food.jpg";
import Dress from "../assets/Goa-Dress.jpg";
import Art from "../assets/Goa-Art.webp";

function GoaInfo() {
    return (
        <div className="container">
            <h1>Rahu Main Malang!</h1>
            <div className="start">
            <h2>Foreign Tourist Arrival -933,841</h2>
            <p>Goa is one of the most popular tourist destinations in India. It is known for its beautiful beaches, Portuguese architecture, and delicious food. There is so much to do and see in Goa that it can be hard to know where to start. In this blog post, we will show you how to make the most of your time in Goa and give you some recommendations for what to do and where to eat.</p>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Places} alt="Places"></img>
            <div className="invisible"></div>
            <p>Goa is popularly known as the Pearl of the orient and tourist paradise. It is located in India’s coastal belt on the western called the Konkan coast. It has an alarming scenic beauty. The architectural work done Goan Temples, Churches and old houses has brought great laurels to Goa. Some of these characteristics make Goa to be occupied by tourists. It is the most preferred option by the people who are planning their holidays.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Food} alt="Food"></img>
            <div className="invisible"></div>
            <p>Goa is known for its amazing variety of seafood dishes, many of which carry influences of Portuguese cuisine. Rice with fish curry is one of the staple items in the region and you will get it across all restaurants in Goa. Other popular Goan food items include Pork Vindalho, Goan Fish Curry, Xacuti, Sorpotel, Chorizo (pork sausage), Feijoada, Chicken Cafreal, Fish Reacheado, Sorak, Samarachi Kodi, Sannas, Ros Omelette, and Khatkhate, to mention a few. The must-try sweet dishes of Goa include Bebinca, Dodol, and Patolea while Feni is the most popular alcoholic beverage in the state.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Dress} alt="Dress"></img>
            <div className="invisible"></div>
            <p>The traditional costume of the womenfolk in Goa comprises that of a 9-yard sari also referred to as the ‘Pano Bhaju’ and some jewellery to balance out the entire outfit. The fishermen do not have any particular attire but are usually seen adorning bright cotton shirts with half pants. The attire of the tribal people in Goa comprises of a loincloth known as ‘Kashti’, with
            a blanket draped around their shoulders. The women wear a traditional sari with a tied knot using their ‘Kunbi palloo’ and have a very distinctive dressing style.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Art} alt="Art"></img>
            <div className="invisible"></div>
            <p>Goan art colorfully illustrates the unity in diversity of Goan heritage. Various art forms pertaining to different religious beliefs and life styles have mingled into one unique identity that has developed into Goan art. Thus one finds Hindu artists chiseling out Christian images in villages and cities. Goan art, developed around religious requirements, represents this process of assimilation, interdependence and mutual acceptability.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/L0eV39QDeVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="invisible"></div>
            <p>Goa trance is an electronic dance music style that originated in the early 1990s in the Indian state of Goa. Goa trance often has drone-like basslines, similar to the techno minimalism of 21st century psychedelic trance (psytrance). Psychedelic trance developed from Goa trance.A popular element of Goa trance is the use of vocal samples, often from science fiction movies. Those samples mostly contain references to drugs, parapsychology, extraterrestrial life, existentialism, out-of-body experiences, dreams, science, time travel, spirituality and similarly mysterious and unconventional topics.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dfvDJapWU7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>           
            <div className="invisible"></div>
            <p>Goans have a particular fondness for performing arts. A beautiful blend of Indian and western dance forms, Goan dances include Fugdi, Dhalo, and the Kunbi that date back to the 
            Portuguese era in Goa. The folk dances and music in the state are performed for both
            religious festivals and cheerful events.
            Some of the most popular traditional Folk dances of Goa are - Ghode Modni, Dhangar
            Dance, Goff Talgadi, Shigmo and Mussel khel etc.</p>
            <div className="invisible"></div>
            </div>

        </div>
    )
}

export default GoaInfo;


