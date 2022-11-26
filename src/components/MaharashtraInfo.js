import React from 'react';
import "./InfoStyles.css";
import Places from "../assets/Maharashtra-Places.jpg";
import Food from "../assets/Maharashtra-Food.jpg";
import Dress from "../assets/Maharashtra-Dress.webp";
import Art from "../assets/Maharashtra-Art.jpg";

function MaharashtraInfo() {
    return (
        <div className="container">
            <h1>Yeh Hain Bombay Meri Jaan!</h1>
            <div className="start">
            <h2>Foreign Tourist Arrival - 5,078,514</h2>
            <p>Maharashtra is one of the most popular tourist destinations in India. From the bustling metropolis of Mumbai to the historical city of Pune, there is something for everyone in this state. Maharashtra is also home to some of the most beautiful beaches in the country, as well as a variety of national parks and wildlife sanctuaries. Whether you're looking for a relaxing vacation or an adventure-filled getaway, Maharashtra has something to offer.</p>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Places} alt="Places"></img>
            <div className="invisible"></div>
            <p>You can see the Gateway of India, Marine drive or the film city of Goregaon, or visit the Siddhivinayak temple and Haji Ali Mosque for your fill of the spiritual. You can even get to see the new addition to the roster of mesmerizing and intimidating places in Mumbai, the Bandra Worli Sealink. And be it a group hangout, a solo search of solace or just a couple's getaway, Chowpatty, Juhu, and Aksa Beach are names that almost everyone in the city knows and crowds on various occasions. They are equally coveted by the many who come to Mumbai from outside for the frolicking and snacking experiences that are available at these locations.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Food} alt="Food"></img>
            <div className="invisible"></div>
            <p>Maharashtrian cuisine includes both mild and very spicy dishes. Some of the popular regional cuisines include Kolhapuri, Malwani, and Varhadhi. Vegetarian and non-vegetarian items are equally popular here. Some of the iconic dishes Maharashtra is known for include Vada Pav,
            Puran Poli, Misal Pav, Pav Bhaji, Bombil, Aamti, Poha, Pithla Bhakri, Kolambi Bhaat, Pani Puri, Bhelpuri, and Modak. Solkadi and coconut water are popular thirst quenchers.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Dress} alt="Dress"></img>
            <div className="invisible"></div>
            <p>The most common form of clothing traditionally worn by Maharashtrian women is the saree named ‘Nauvari’, which means ‘nine yards’, signifying the length of the fabric. It has a unique pattern of draping which is similar to that of the ‘dhoti’ worn by men and allows ease of movement. Men wear dhoti which is a long garment wrapped around the waist and legs, kurta, or sometimes a cotton shirt, pehta, and waistcoat or bandi. </p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Art} alt="Art"></img>
            <div className="invisible"></div>
            <p>The expertise of the artisans of Maharashtra can be seen in the fine art and craft finishes. The fine fabrics of mashru and himroo are the clear examples of their highest level of weaving art. The fabrics which looks like golden cloth are regarded to be one of the finest of its kind. The high level weaving know-how are also evident with the paithani and narayan peth sarees.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Z3Rq7VP8Qn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>Maharashtra is a state of India. The region's folk heritage includes boards, Gondhals, Lavanis, Shahiris and Powada."Koli Geet" is one of the most recognized folk music of India. It is popular in western parts of Maharashtra. Koli Geet has almost 300-year-old tradition in Maharashtra.
            One of the semi-classical music forms of Maharashtra is " Natya Sangeet " which is a minor version of Musical Opera in the western world. Natya Sangeet or Sangeet Natak has almost a 200-year-old tradition in Maharashtra.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GgglIQeIAyw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>Gifted with its rich culture and traditions, Maharashtra has different types of dance forms. Povada is the dance form that showcases the lifetime achievements of the Maratha ruler Shivaji Maharaj. Lavani and Koli dance forms entertain the Maharashtrians with its 
            mesmerizing music and rhythmic movements. Dhangri Gaja dance pays respect to their God by the Dhangars of Sholapur. Dindi and Kala are the religious folk dances, which expresses of religious ecstasy of Lord Krishna. Tamasha is the folk dance that is so popular all over the state.</p>
            <div className="invisible"></div>
            </div>
        </div>
    )
}

export default MaharashtraInfo;


