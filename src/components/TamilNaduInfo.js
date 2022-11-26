import React from 'react';
import "./InfoStyles.css";
import Places from "../assets/TamilNadu-Places.jpg";
import Food from "../assets/TamilNadu-Food.jpg";
import Dress from "../assets/TamilNadu-Dress.jpg";
import Art from "../assets/TamilNadu-Art.jpg";

function TamilNaduInfo() {
    return (
        <div className="container">
            <h1>There is no ‘We’ in Idli, only ‘I’!</h1>
            <div className="start">
            <h2>Foreign Tourist Arrival - 6,074,345</h2>
            <p>If you're looking for a culturally rich and diverse state in India, look no further than Tamil Nadu. From their vibrant festivals to stunning temples and heritage sites, there's plenty to see and do in Tamil Nadu. Here are 10 things you absolutely must do in Tamil Nadu before you die!</p>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Places} alt="Places"></img>
            <div className="invisible"></div>
            <p>Have you ever been to the south? If yes, you’d know what a gem Tamil Nadu is. If you haven’t, it’s time you think about taking a trip now because the state is home to a lot of beautiful places. In fact, even drop dead gorgeous would be an underexpression to describe the beauty of the best tourist places in Tamil Nadu. These places are brimming with beautiful temples, serene beaches, spectacular forts & waterfalls, and more, which only means that there are multiple excuses for you to pack your bags and head for a tour!</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Food} alt="Food"></img>
            <div className="invisible"></div>
            <p>Tamil Nadu cuisine is quite versatile and is an amalgam of different cultures and cooking styles. A typical vegetarian meal consists of rice, sambar, kara kuzhambu, rasam, curd, poriyal, varuval, kootu, keerai masiyal, aviyal, pachadi, appalam, oorukai and payasam. However, different parts of the state have developed their own unique regional cuisines.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Dress} alt="Dress"></img>
            <div className="invisible"></div>
            <p>Tamil Nadu traditional costumes are very famous for every traditional activity. The temples, rich culture of Tamil Nadu are well respected by all Indians. Especially Tamilians give 
            respect to wear their traditional dresses. The traditional dress of Men in Tamil Nadu is Lungi.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Art} alt="Art"></img>
            <div className="invisible"></div>
            <p>Tamil Nadu's most signature handicraft is its dramatic Thanjavur paintings. Characterised by rich, vivid colours, stark compositions and devotional themes, these gilded paintings, often inlaid with coloured glass or, more rarely, semi-precious gems, are informed by the rich artistic heritage of Thanjavur.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ws_KeCYnxP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>Tamil Nadu is synonymous with the Indian musical maestro of the 18th century, Tyagaraja. The land of Carnatic music, Tamil Nadu is the birthplace of many other music legends as well. Devotional songs in praise of religious deities are commonplace in Tamil Nadu. The main instruments used here are the Violin, Wooden Flute, Veena, Gottuvadayam, Mridangam, Nadaswaram and Ghatam.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/L3tYULyzD1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>Bharatanatyam is a dance of Tamil Nadu in southern India. It traces its origins back to the Natyashastra, an ancient treatise on theatre written by the mythic priest Bharata.There are several folk dances of Tamil Nadu which have been bearing the culture and 
            tradition of the state. The most popular folk dances are Kuravanji, Karagattam, Kummi, Kollattam, Kavadi Attam, Nondi Natakam, Pavai Koothu, Kai Silambattam, Mayil Attam, Oyilattam, Devarattam, Dummy Horse, Peacock Dance etc</p>
            <div className="invisible"></div>
            </div>
        </div>
    )
}

export default TamilNaduInfo;


