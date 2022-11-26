import React from 'react';
import { Link } from 'react-router-dom';
import Bihar from '..//assets/Bihar.jpg';
import Delhi from '..//assets/Delhi.jpg';
import WestBengal from '..//assets/WestBengal.webp';
import Maharashtra from '..//assets/Maharashtra.jpeg';
import TamilNadu from '..//assets/TamilNadu.jpg';
import Goa from '..//assets/Goa.jpg';
import Rajasthan from '..//assets/Rajasthan.jpg';
import UttarPradesh from '..//assets/UttarPradesh.jpg';
import Punjab from '..//assets/Punjab.jpg';
import Kerala from '..//assets/Kerala.jpg';
import "./ImageStyles.css";


function ImageGrid(){
    return(
        <div className="grid-wrapper">
            <div>
                <img src={Bihar} alt="Bihar"></img>
                <div className="image-overlay">
                <Link to="/states/bihar">
                <div className="image-title">Bihar</div>
                </Link>
                </div>
            </div>
            <div>
                <img src={Delhi} alt="Delhi"></img>
                <div className="image-overlay">
                <Link to="/states/delhi">
                <div className="image-title">Delhi</div>
                </Link>
                </div>
            </div>
            <div>
                <img src={Goa} alt="Goa"></img>
                <div className="image-overlay">
                <Link to="/states/goa">
                <div className="image-title">Goa</div>
                </Link>
                </div>
                
            </div>
            <div>
                <img src={Kerala} alt="Kerala"></img>
                <div className="image-overlay">
                <Link to="/states/kerala">
                <div className="image-title">Kerala</div>
                </Link>
                </div>
                
            </div>
            <div>
                <img src={Maharashtra} alt="Maharashtra"></img>
                <div className="image-overlay">
                <Link to="/states/maharashtra">
                <div className="image-title">Maharashtra</div>
                </Link>
                </div>
                
            </div>
            <div>
                <img src={Punjab} alt="Punjab"></img>
                <div className="image-overlay">
                <Link to="/states/punjab">
                <div className="image-title">Punjab</div>
                </Link>
                </div>
                
            </div>
            <div>
                <img src={Rajasthan} alt="Rajasthan"></img>
                <div className="image-overlay">
                <Link to="/states/rajasthan">
                <div className="image-title">Rajasthan</div>
                </Link>
                </div>
                
            </div>
            <div>
                <img src={TamilNadu} alt="TamilNadu"></img>
                <div className="image-overlay">
                <Link to="/states/tamilnadu">
                <div className="image-title">Tamil Nadu</div>
                </Link>
                </div>
                
            </div>
            <div>
                <img src={UttarPradesh} alt="UttarPradesh"></img>
                <div className="image-overlay">
                <Link to="/states/uttarpradesh">
                <div className="image-title">Uttar Pradesh</div>
                </Link>
                </div>
                
            </div>
            <div>
                <img src={WestBengal} alt="WestBengal"></img>
                <div className="image-overlay">
                <Link to="/states/westbengal">
                <div className="image-title">West Bengal</div>
                </Link>
                </div>
                
            </div>

        </div>
    )
}

export default ImageGrid;