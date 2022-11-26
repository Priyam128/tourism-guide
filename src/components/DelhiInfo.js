import React from 'react';
import "./InfoStyles.css";
import Places from "../assets/Delhi-Places.jpg";
import Food from "../assets/Delhi-Food.avif";
import Dress from "../assets/Delhi-Dress.jpg";
import Art from "../assets/Delhi-Art.jpg";

function DelhiInfo() {
    return (
        <div className="container">
            <h1>Dil Se Dilli!</h1>
            <div className="start">
            <h2>Foreign Tourist Arrival - 2,740,502</h2>
            <p>Delhi is a bustling metropolis with a Population of over 22 million. It's the second most populous city in India, and home to a surprisingly diverse range of people and cultures. Despite its size, Delhi feels like a small town where everyone knows each other. From the early morning rush to get to work, to the evening hustle to get home, there's a constant energy in the air. Delhi is a city that never sleeps, and there's always something to do.</p>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Places} alt="Places"></img>
            <div className="invisible"></div>
            <p>Delhi has been regarded as the heart of India. It has been the capital of the country for ages, People from all over the country come to visit Delhi. It is also a place of attraction for tourists from all parts of the world. Delhi is the seat of the Central Government and embassies of all the countries of the world are located here. All foreign ambassadors reside here. It is a big centre of business. Its wholesale markets are in Chandni Chowk. Sadar Bazar and Kharr Baoli. Delhi has a number of historical monuments. Architecture is visible in Red Fort. Jama Masjid. Humayun's Tomb, etc. Old Fort or Purana Quila reminds us of ancient history.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Food} alt="Food"></img>
            <div className="invisible"></div>
            <p>Right from age-old eateries to contemporary restaurants and cafes, Delhi offers myriad options to food lovers. From the Mughlai cuisine to the best street foods in the entire country, there is a lot to indulge in. Some of the classic dishes of Delhi include Dal Makhani, Shahi Paneer, Butter Chicken, Chaat, Kachori, Dahi Bhalla, Samosa, Cholle Bhature, Kulche, and Samosa. Jalebi, Gulab Jamun, and Lassi add a perfect finishing touch to the meals.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Dress} alt="Dress"></img>
            <div className="invisible"></div>
            <p>Clothing of Delhi has an exclusive pattern and style. The traditional costumes of the capital of India are salwar kameez dupatta for females and kurta pyjama for males. Delhi does not have any specific culture or tradition because people live here from all over India and other parts of the world. The secular democracy and magnificent diversity of Delhi are known throughout the world. People from different states have settled in Delhi for business, education, career and other purposes. They form a unique culture with diverse colors. Delhi is a vibrant and fashionable city where youngsters and adolescents are more influenced toward the western culture.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Art} alt="Art"></img>
            <div className="invisible"></div>
            <p>Delhi is famous for its fine Meenakari work and golden thread zarkozi embroidery. Pottery from Delhi is also famous for its clay toys, idols and decorations apart from those summer season water pots.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wLqSh-pDbhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>Delhi, India's capital city is a very rich in culture, cuisines and music. From that ancient time to Mughals to this modern time, Delhi had been always heart of Kings. This video is showing you a small piece of music of Delhi being played by some Mughals in Delhi House in International Trade Fair 2013 held on Pragati Maidan, New Delhi, India.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3OciFJ0HCNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p> It is a blend of classical Indian, folk dances, bhangra, Hip Hop and even some western dance forms. There are no boundaries to Bollywood dance, but generally speaking, it involves using hand and leg movements and facial expressions and is one of the best dance forms to learn if you’re new to dancing. </p>
            <div className="invisible"></div>
            </div>
        </div>
    )
}

export default DelhiInfo;


