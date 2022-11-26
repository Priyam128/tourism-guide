import React from 'react';
import "./InfoStyles.css";
import Places from "../assets/Bihar-Places.jpg";
import Food from "../assets/Bihar-Food.jpg";
import Dress from "../assets/Bihar-Dress.webp";
import Art from "../assets/Bihar-Art.jpg";

function BiharInfo() {
    return (
        <div className="container">
            <h1>Ek Bihari Sau Pe Bhari!</h1>
            <div className="start">
            <h2>Foreign Tourist Arrival - 1,087,971</h2>
            <p>Bihar is a land of enchantment, full of natural beauty and historical sites. The state is home to some of the most important Buddhist pilgrimage sites, as well as the ruins of ancient civilizations. Bihar is also a place of great religious and cultural diversity, with Hindus, Muslims, Christians, Sikhs, and Buddhists all making up a significant portion of the population.The landscape of Bihar is varied, with everything from the snow-capped Himalayas in the north to the lush tropical forests in the south.</p>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Places} alt="Places"></img>
            <div className="invisible"></div>
            <p>Bihar has remained an underrated tourist destination in India. It is ironic that Bihar was once the seat of one of the most prosperous ancient Indian kingdoms and today it suffers listlessness when it comes to heritage tourism in India. We agree, we may have a good amount of foreign tourists swarming Bihar but said unsaid they have all restricted themselves to fewer destinations in this historically affluent state. </p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Food} alt="Food"></img>
            <div className="invisible"></div>
            <p>Maithil is the cuisine of north Bihar and has a lot of similarities with Nepalese cuisine as it shares the border with the Himalayan nation. Magadhi or Magahi is the food of central Bihar comprising the districts of Patna, Nalanda, Nawada, Gaya, Arwal, Aurangabad, and Jehanabad. Bhojpuri food refers to the cuisine of the region bordered by Awadh (Uttar Pradesh) in the west and Mithila in the east. Since it is close to eastern Uttar Pradesh, similarities in food also exist.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Dress} alt="Dress"></img>
            <div className="invisible"></div>
            <p>Bihar traditional costumes are very ancient. The state has a lot of ancient history and the land of educational institutions in ancient period. The ancient Nalanda university attracted many students from all over the world. So with the long ancient history here we can see the ancient tradition and culture. Here people give more value to the culture and tradition of their society. The hand woven clad and the beautiful designs have been thriving in the land of Bihar. At present, the rural people stick to wear their traditional costumes and jewelry. In Bihar, most of the people live in rural areas and not interested in wearing the newly advent modern costumes.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Art} alt="Art"></img>
            <div className="invisible"></div>
            <p>Bihar, a city filled with heritage and culture, could be seen wrapped up in colourful paintings, wall hangings, bead jewellery, and leather items that are sold here in masses and produced too. Apart from all these things, there are also many pilgrimage sites and temples throughout the city. Visitors can pick various statues and pictures of Gods and Goddesses and religious texts while here. The appliques on silks and cotton fabrics make it a favourite among female tourists. The shopping scene in Bihar consists of markets, handicraft emporiums, local bazaars, and modern malls. </p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4jML2v5ULIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="invisible"></div>
            <p>Bihar has produced musicians like Bharat Ratna Ustad Bismillah Khan and dhrupad singers like the Malliks (Darbhanga Gharana) and the Mishras (Bettiah Gharana) along with poets like Pandit Dhareekshan Mishra, Bhikhari Thakur, the shakespeare of Bhojpuri and Vidyapati Thakur who contributed to Maithili Music. The classical music in Bihar is a form of the Hindustani classical music</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oDoHursEGmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="invisible"></div>
            <p>Jhijhiya is a ritual dance mostly performed at time of Dusshera, in dedication to Durga Bhairavi, the goddess of victory. In Bihar, Domkach is ceremonial dance form and performed in Mithila and Bhojpur regions. Bideshiya is a form of dance-drama that is believed to have been created by Bhikhari Thakur, a barber with a passion for drama. It deals with social issues and conflict between traditional and modern, rich and poor. Fagua is a dance and also a type of folk song performed during Holi. Painki evokes the infantry's agility, courage, and excitement.</p>
            <div className="invisible"></div>
            </div>
        </div>
    )
}

export default BiharInfo;