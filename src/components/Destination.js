import React from 'react';
import DestinationData from './DestinationData';
import "./DestinationStyles.css";
import Taj1 from "..//assets/TajMahal1.jpg";
import Taj2 from "..//assets/TajMahal2.webp";
import Varanasi1 from "..//assets/Varanasi1.jpg";
import Varanasi2 from "..//assets/Varanasi2.webp";
const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <DestinationData
                class="first-des"
                heading="Taj Mahal, Agra"
                text="The Taj Mahal is one of the most iconic and instantly recognizable buildings in the world. It is also one of the most popular tourist destinations, attracting millions of visitors each year. The Taj Mahal was built by Mughal Emperor Shah Jahan in memory of his late wife Mumtaz Mahal. The Taj Mahal is widely considered to be one of the most beautiful buildings in the world and is a symbol of India's rich history and culture. The Taj Mahal is a UNESCO World Heritage Site and is one of the Seven Wonders of the World."
                img1={Taj1}
                img2={Taj2}
            />
            <DestinationData
                class="first-des-reverse"
                heading="Varanasi, Uttar Pradesh"
                text="Situated on the banks of the River Ganges, Varanasi is one of the oldest continuously inhabited cities in the world and is regarded as a holy city by Hindus, Buddhists and Jains. Every year, pilgrims from all over India and beyond come to Varanasi to bathe in the river and to perform other religious rites.The city is also famous for its many ghats (steps leading down to the river), its temples and its thriving arts and crafts scene. The main tourist attractions in Varanasi are the ghats, the temples and the narrow, labyrinthine streets of the old city."
                img1={Varanasi1}
                img2={Varanasi2}
            />
        </div>
    );
};

export default Destination;