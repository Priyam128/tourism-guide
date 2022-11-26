import React from 'react';
import "./InfoStyles.css";
import Places from "../assets/Rajasthan-Places.jpg";
import Food from "../assets/Rajasthan-Food.jpg";
import Dress from "../assets/Rajasthan-Dress.jpg";
import Art from "../assets/Rajasthan-Art.jpg";

function RajasthanInfo() {
    return (
        <div className="container">
            <h1>Padhaaro Maare Des!</h1>
            <div className="start">
            <h2>Foreign Tourist Arrival - 1,754,348</h2>
            <p>Rajasthan, the land of the Rajputs, is a state full of history and culture. The Rajputs are a warrior caste and their history is full of battles and chivalry. Rajasthan is also the land of the Maharanis, the wives of the Rajput rulers. They were often great patrons of the arts and their lifestyle was luxurious and opulent. Rajasthan is a land of forts and palaces, of camel caravans and elephants, of festivals and colors. It is a land that will mesmerize you with its beauty and its history.</p>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Places} alt="Places"></img>
            <div className="invisible"></div>
            <p>In Rajasthan, there are too many places to visit like Palace Jaipur, Lake Palace Udaipur, Fort Jodhpur, Palace Udaipur, Samode Palace Jaipur, Kumbhalgarh Fort, Junagarh Fort, Jain Temples, etc. There are also some other sightseeing & attractions which you should see on your trip to Rajasthan. Havelis, palaces, and forts are among Rajasthan’s most popular tourist sites, adding to the whole experience of visiting one of India’s traditionally opulent states. The forts of Chittorgarh, Mehrangarh, Jaisalmer, Jaigarh, and Junagadh are among the most well-known and visited in Rajasthan.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Food} alt="Food"></img>
            <div className="invisible"></div>
            <p>The royal heritage and the geographic features of Rajasthan have influenced the cuisine of the region. Traditional food items like Dal-Baati-Churma and Bikaneri Bhujia are appreciated by foodies across the globe. Popular dishes of Rajasthan also include Kabuli Pulao, Laal Maas, Mohan Mass, Panchkuta/Ker Sangri, Pittod Ki Sabji, Besan Gatta Sabji, Ker-Dakh Sabji, Lacha Pakori, Govind Gatte, Bajra Roti, Lahsun Ki Chatni, Mogor Ki Sabji, and Haldi Ki Sabji. Some of the must-try sweets are Balushahi, Ghevar, Alwar Ka Mawa, and Gujia.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <img src={Dress} alt="Dress"></img>
            <div className="invisible"></div>
            <p>The traditional outfit for Rajasthani men is dhoti and angarkha, or pyjama-kurta. The dhoti is a long piece of cloth tied around the waist and wrapped around like a loin-cloth between the legs. It is paired with angarkha, a type of robe characterized by an inner panel that covers the chest.Traditional attire for Rajasthani women is ghagra, choli (also called kanchli or kurti) and odhni. The ghagra is a full-length, embroidered and pleated skirt, which comes in a variety of colours, prints and fabrics, such as silk, cotton, georgette and crêpe. Of all the various prints, the laharia, bandhej, tie ‘n dye, chundri and mothra are the most widely worn.Elaborate necklaces, like Jadau sets, aad (chokers) and Raani Har (long necklaces to the belly button) are worn around the neck, especially by women from affluent families.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <img src={Art} alt="Art"></img>
            <div className="invisible"></div>
            <p>Apart from the architecture of Rajasthan, the most notable forms of the visual art of Rajasthan are architectural sculpture on Hindu and Jain temples in the medieval era, in painting illustrations to religious texts, beginning in the late medieval period, and post-Mughal miniature painting in the Early Modern period, where various different court schools developed, together known as Rajput painting. In both cases, Rajasthani art had many similarities to that of the neighbouring region of Gujarat, the two forming most of the region of "Western India", where artistic styles often developed together.</p>
            <div className="invisible"></div>
            </div>
            <div className="left">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/o0QQJ7DeN3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>Rajasthan folk music can mesmerise anyone with its beautiful rythm and words. Folk music of Rajasthan is originated from emotions, stories and daily activities Rajasthani people. Its music binds listeners till the end with its melodiness. Rajasthani music also includes many activities too like dancing and story-telling through songs. Among famous Rajasthani folk music- Panihari, Pabuji Ki Phach and Maand are best. Maands are Rajasthans most sophisticated style of folk music and has come a long way from the time it was only sung in royal courts, in praise of the Rajput rulers.</p>
            <div className="invisible"></div>
            </div>
            <div className="right">
            <div className="invisible"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sr2bYXrLLtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            <div className="invisible"></div>
            <p>Ghoomar or ghumar is a traditional folk dance of Rajasthan. It was the Bhil tribe who performed it to worship Goddess Sarasvati which was later embraced by other Rajasthani communities. The dance is chiefly performed by veiled women who wear flowing dresses called ghaghara. Others include : kalbeliya, Chari, gair, kathputli dance and chang.</p>
            <div className="invisible"></div>
            </div>
        </div>
    )
}

export default RajasthanInfo;


