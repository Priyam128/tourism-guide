import React from 'react';
import "./InfoStyles.css";
import Places from "../assets/WestBengal-Places.jpg";
import Food from "../assets/WestBengal-Food.jpg";
import Dress from "../assets/WestBengal-Dress.png";
import Art from "../assets/WestBengal-Art.jpg";

function WestBengalInfo() {
    return (
        <div className="container">
            <h1>Bhalo Achi Bhalo Theko!</h1>
            <div className="start">
            <h2>Foreign Tourist Arrival - 1,617,105</h2>
            <p>If you want to explore a state in India that is rich in culture, history and natural beauty, then West Bengal is the perfect destination for you. Situated in the eastern part of the country, West Bengal is a melting pot of different cultures and traditions. From the snow-capped Himalayan peaks in the north to the Sundarbans mangrove forest in the south, the state has a lot to offer to its visitors. So come and dive into the wonderful world of West Bengal.</p>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Places} alt="Places"></img>
            <div className="invisible"></div>
            <p>From the majestic Himalayas to the serenity of the Gangetic plains, from quiet seashores to beautiful mangroves, West Bengal is a place with numerous natural wonders. Adding to its appeal, are the vivid festivities, sublime architecture, delightful crafts, classical and contemporary music, and scrumptious ethnic delicacies, that make West Bengal a splendid place offering extraordinary experiences. Regardless of whether you wish to be among scholars and meandering minstrels, or gutsy and choose to roam with rhinoceroses, these assorted West Bengal tourist places offer everything. West Bengal gives one a thousand reasons to stay and traverse the state’s nook and cranny.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Food} alt="Food"></img>
            <div className="invisible"></div>
            <p>A traditional Bengali lunch, consisting of bhaat (rice), aloo bhaja (fried potato), begun bhaja (fried eggplant), dal (lentils), chingri machher malaikari (prawn in coconut gravy), mutton, chatni, papad, and mishti(sweets).</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Dress} alt="Dress"></img>
            <div className="invisible"></div>
            <p>Traditional Dresses of West Bengal depict the richness in tradition and culture of the region and its people. While Dhoti and Panjabi forms the classical men’s wear; Sarees are adorned by women. The styles and designs of the costumes are personification of the excellent craftsmanship of West Bengal weavers. The state has an exquisite tradition for weaving which has national as well as international appeal.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Art} alt="Art"></img>
            <div className="invisible"></div>
            <p>The Indian state, West Bengal has a rich and cultural heritage. Due to the reign of many different rulers in the past, arts and crafts in West Bengal underwent many changes giving an artistic diversity today in the forms of traditional handicrafts, terracotta, painting and carving, dances, music except of natural beauty and glorious past the state has the strong hold of art and architecture which made the state so unique.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-cK0IQoIwQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>Bengali classical music is based on modes called ragas. In composing these songs, the melodies of North Indian ragas are used. As far as the Charyagiti (9th century), ragas have been used in Bengali music. Jaydev's Gita Govinda, Padavali Kirtan, Mangal Giti, Shyama sangeet, Tappa, Brahma Sangeet and Tagore songs have been inspired by Ragas. The use of North Indian ragas in Bangla songs began in 18th century. This trend gathered momentum during the 19th and 20th centuries. </p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MPFBDtArb2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>The Kirtan Dance is the most widely practised folk dance form of Bengal. The democratic nature of the dance, which unites people of the whole village, irrespective of their caste or social standing is its most striking feature. The dance is performed to the accompaniment of the Dhol and Mridanga.</p>
            <div className="invisible"></div>
            </div>
        </div>
    )
}

export default WestBengalInfo;


