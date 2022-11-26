import React from 'react';
import "./InfoStyles.css";
import Places from "../assets/UttarPradesh-Places.jpg";
import Food from "../assets/UttarPradesh-Food.jpg";
import Dress from "../assets/UttarPradesh-Dress.png";
import Art from "../assets/UttarPradesh-Art.jpg";

function UttarPradeshInfo() {
    return (
        <div className="container">
            <h1>Bhaukaal Tight Hai!</h1>
            <div className="start">
            <h2>Foreign Tourist Arrival - 3,780,752</h2>
            <p>Uttarpradesh is a state located in the northern part of India. It is home to some of the most popular tourist destinations in the country, including the Taj Mahal, Agra Fort, and Fatehpur Sikri. If you're planning a trip to Uttarpradesh, here are some tips to help you make the most of your trip!</p>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Places} alt="Places"></img>
            <div className="invisible"></div>
            <p>It is the Land of Lord Krishna, Rama, Buddha and Taj Mahal. This state is a perfect canvas painted in different colors to bring out a picture that is loved by all. Uttar Pradesh boasts aromatic and delectable Awadhi cuisine, the fine Chicken and brass work and majestic architecture. There is just about everything that you seek on a holiday in India and how better can it get if you can find it in one place! Uttar Pradesh truly reflects the glory of Indian culture and heritage.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Food} alt="Food"></img>
            <div className="invisible"></div>
            <p>The cuisine of Uttar Pradesh is as vast and vibrant as the state itself. A large number of vegetarian and non-vegetarian dishes are a part of the cuisine. The scrumptious Awadhi cuisine and the royal Mughlai cuisine are the two famous food cultures here. Batti Chokha, Bedhai, Tehri, Baigan ki Longe, Galaouti Kebab, Bedmi, Kebab Paratha, Bhindi ka Salan, Fara, and Biryani are some of the amazing food you must try. Sweet dishes such as Petha, Pedha, Malpua, Revari, and Kulfi are very popular in this state. Chaas and Gilori Paan are the other must-try items.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Dress} alt="Dress"></img>
            <div className="invisible"></div>
            <p>Uttar Pradesh is mostly a state of two sects- Hindus and Muslims. The traditional dress of the women of Uttar Pradesh is a sari and a blouse or salwar kameez. The men opt for dhoti kurta or kurta pyjama. They also wear pagri or topi on their heads. On more festive occasions, men go for sherwani - which is an embroidered kurta with churidars. Women wear lehenga choli on formal occasions which is an embroidered long skirt with a blouse and a long scarf known as odhani. This is the unique costume of the women of Uttar Pradesh. They also adorn themselves in accessories including gold chains, necklaces, rings, bangles, trinkets, tiaras and anklets etc.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Art} alt="Art"></img>
            <div className="invisible"></div>
            <p>The tradition to keep the history alive is quite prevalent in UP due to which they have preserved hand printing for ages. Although all the crafts have been continuing since ancient times, the hand-printing is the oldest of all (across the whole country). Due to the rich art and craft, Firozabad has got the name "City of Bangles", Bhadohi city is known with the name “Carpet City” and Farrukhabad is known for its hand printing. All-in-all, its art and craft pay a huge contribution to Uttar Pradesh Tourism.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Jbt8hRJRSug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>The heritage of folk music in Uttar Pradesh is one of the oldest traditions. It is named rasiya or braj. Most of the folk music in Uttar Pradesh revolves around the love and desire between Radha and Krishna. Most of these folk kinds of music are accompanied by drums and other instruments and are performed in festivals. The tradition of folk music can be traced back to ancient times. The oldest traditions of music in Uttar Pradesh were established around the Guptas. The khyal dance is also very popular. Bhajan, Purvi, Kajari and Phag are also very popular. The study also focuses on Sohar, Kaharwa, and Chanayni as folk musical traditions. </p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GiTvW0kWPkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>The dances in Uttar Pradesh can be broadly classified in to two categories namely Classical and Folk. The first group comprises Kathak where as the later has Charkula, Karma and Dadra in its list. Kathak is one of the most famous classical dances of India. The dance has its origin in the courts of Emperors and Nawabs but it has traversed a long path to come to the masses. UP has produced some of the greatest exponents of this art form.</p>
            <div className="invisible"></div>
            </div>
        </div>
    )
}

export default UttarPradeshInfo;


