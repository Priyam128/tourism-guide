import React from 'react';
import "./InfoStyles.css";
import Places from "../assets/Punjab-Places.jpg";
import Food from "../assets/Punjab-Food.jpg";
import Dress from "../assets/Punjab-Dress.jpg";
import Art from "../assets/Punjab-Art.jpg";

function PunjabInfo() {
    return (
        <div className="container">
            <h1>Chak De Phattey!</h1>
            <div className="start">
            <h2>Foreign Tourist Arrival - 1,200,969</h2>
            <p>Punjab is a province in the northern part of Pakistan. It is the sizes province of the country and is home to a population of over 110 million people. The provincial capital is Lahore and the largest city is Faisalabad. Punjab is one of the most populous provinces in Pakistan and is one of the cultural centres of the country. The province has a rich and diverse culture, with a number of different religions and languages spoken.</p>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Places} alt="Places"></img>
            <div className="invisible"></div>
            <p>Popularly known as the Land of Five Rivers, Punjab is a tourist hotspot in India. From prominent attractions like the Golden Temple and Jallianwala Bagh to planned cities and national parks, the state has plenty to offer. What’s more, you can also experience the true essence of Punjab by indulging in the mouth-watering Amritsari kulcha and lassi, dancing to the lively bhangra music, shopping for Punjabi juttis and stopping by mustard fields.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Food} alt="Food"></img>
            <div className="invisible"></div>
            <p>Rich, flavorful and full of ghee are the words that best describe the cuisine of Punjab. Chole Bhature, Butter Chicken, Rajma Chawal, Amritsari Fish, Makke ki Roti and Sarson ka Saag, Paneer Tikka, Tandoori Roti, and Punjabi Pakoda Kadhi are a few lip-smacking items you must try. Sweet items like Shakkar Para and Pinni are a treat in themselves. Lassi is the most popular beverage in the state. A free meal served at a Langar is also a must-try while in 
            Punjab.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Dress} alt="Dress"></img>
            <div className="invisible"></div>
            <p>The traditional dresses effortlessly merge style elements, comfort and colors. Phulkari is commonly seen in most Punjabi costumes. It is a type of flower work or a unique kind of embroidery specific to this region. It represents and typical costume of women living in rural Punjab and is quite unlike the later day Phulkari styling used by modern Punjabi women. During traditional festivals and rituals, women wear an amazing type of Phulkari known as Bagh in which there is rich embroidery made of brilliant colors and attractive patterns.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Art} alt="Art"></img>
            <div className="invisible"></div>
            <p>Punjab Arts & Crafts is highly acclaimed the world over. Punjab is a culturally rich north western state of India. The Arts and Crafts of Punjab include the variety of handiworks. The artisans of Punjab are skilled and dexterous. The women of the villages are mainly involved in carrying out the Punjab Arts & Crafts.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hriPRbPRr-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>Shahmukhi is the traditional music on the traditional musical instruments of the Punjab region of the Indian subcontinent. There is a great repertoire of music from the time of birth through the different stages of joy and sorrow till death. The folk music invokes the traditions as well as the hardworking nature, bravery and many more things that the people of Punjab get from its gateway-to-India geographical location.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_Dg5FR7qdUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>Punjabi dances are an array of folk and religious dances of the Punjabi people indigenous to the Punjab region, straddling the border of India and Pakistan. The style of Punjabi dances ranges from very high energy to slow and reserved, and there are specific styles for men and women. Some of the dances are secular while others are presented in religious contexts.The main Punjabi folk dance for females is Gidda and for men Bhangra. The dances are typically performed at times of celebration, such as harvest (Visakhi), weddings, Lohri, etc.. Married Punjabi couples usually dance together.</p>
            <div className="invisible"></div>
            </div>
        </div>
    )
}

export default PunjabInfo;


