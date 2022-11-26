import React from 'react';
import "./InfoStyles.css";
import Places from "../assets/Kerala-Places.jpg";
import Food from "../assets/Kerala-Food.webp";
import Dress from "../assets/Kerala-Dress.jpeg";
import Art from "../assets/Kerala-Art.jpg";

function KeralaInfo() {
    return (
        <div className="container">
            <h1>Chettan Two Tea!</h1>
            <div className="start">
            <h2>Foreign Tourist Arrival - 1,096,407</h2>
            <p>Kerala is a stunningly beautiful state in southern India that is known for its stunning beaches, lush green hills, and delicious cuisine. If you're looking for a place to relax and escape the hustle and bustle of everyday life, Kerala is the perfect destination. Here's how to spend 3 perfect days in Kerala.</p>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Places} alt="Places"></img>
            <div className="invisible"></div>
            <p>Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries. Other popular attractions in the state include the beaches at Kovalam, Muzhappilangad, Bekal and Kappad; backwater tourism and lake resorts around Ashtamudi Lake, Kollam; hill stations and resorts at Munnar, Wayanad, Nelliampathi, Vagamon and Ponmudi; and national parks and wildlife sanctuaries at Wayanad, Periyar, Parambikulam, Silent Valley National Park and Eravikulam National Park. </p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Food} alt="Food"></img>
            <div className="invisible"></div>
            <p>Kerala’s cuisine is one of the reasons why people travel to the state. The cuisine is generous with its use of coconut, curry leaves, and spices. Traditionally, meals are served on plantain leaves. Some of the iconic dishes of Kerala include Malabar Biriyani, Malabar Parotta, Beef Fry, Sadhya, Idiyappam, Appam with Stew, Kappa, Puttu and Fish Molee. Kozhikodan Halwa, Paal Payasam and Ada Pradhaman are some of the desserts you can try.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Dress} alt="Dress"></img>
            <div className="invisible"></div>
            <p>The traditional costume of Kerala is known as ‘Mundu.’ It can best be described as a unisex costume that is worn on the lower part of the body and covers a person from the waist to the foot. It is usually white in color and worn by both men and women, especially during 
            traditional ceremonies and festivals. The mundu looks very similar to a dhoti or a long skirt. The garment that is worn on the upper half of the body, though, varies with gender, age, and even religion in Kerala. The mundu is worn tightly at the waist, tied with a knot, and falls down to the feet.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Art} alt="Art"></img>
            <div className="invisible"></div>
            <p>Kerala is well known for its diverse forms of performing arts.The various communities in Kerala contribute to its rich and colourful culture.[3]The most important traditional art forms of Kerala are Kathakali, Kalaripayattu, Koodiyattam, Theyyam, Mohiniyattam, Thullal, Padayani, Pulikali, Thiruvathirakali, Chakyarkoothu,kalaripayattu etc</p>            
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9dV0K6akzbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="invisible"></div>
            <p>The music of Kerala has a long and rich history. It is not the same as Malayalam poetry, although most of it is poetry driven. Kerala has a rich tradition in Carnatic music. Songs formed a major part of early Malayalam literature, which traces its origin to the 9th century CE. The significance of music in the culture of Kerala can be established just by the fact that in Malayalam language, musical poetry was developed long before prose. With the development of music in the region, different branches were formed out of it.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1UNWz1HSLt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>The culture of a place can be acknowledged from its art and dance forms. Dances are considered as the integral parts of culture of any region. Kerala which is situated in the southern part of India and is popularly known as ‘God’s Own Country’ has several dance forms . Kerala has around 50 forms of dances. Among these Theyyam, Thiruvathirakali, Chakyar Koothu Koodiyattam, and Ottamthullal are some of the prominent dances of Kerala. Kerala is therefore, popular for its two classical dance form ‘Kathakali’ and ‘Mohiniyattam,’ which lure tourists from world-wide.</p>
            <div className="invisible"></div>
            </div>
        </div>
    )
}

export default KeralaInfo;


