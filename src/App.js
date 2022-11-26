import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import States from "./routes/States.js";
import Contact from "./routes/Contact.js";
import BiharPage from "./routes/Bihar.js";
import DelhiPage from "./routes/Delhi.js";
import RajasthanPage from "./routes/Rajasthan.js";
import GoaPage from "./routes/Goa.js";
import MaharashtraPage from "./routes/Maharashtra.js";
import TamilNaduPage from "./routes/TamilNadu.js";
import KeralaPage from "./routes/Kerala.js";
import PunjabPage from "./routes/Punjab.js";
import UttarPradeshPage from "./routes/UttarPradesh.js";
import WestBengalPage from "./routes/WestBengal.js";


function App(){
    return(
        <div className="App">
        <Routes>
            <Route path="#" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/states" element={<States/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/states/bihar" element={<BiharPage/>}/>
            <Route path="/states/delhi" element={<DelhiPage/>}/>
            <Route path="/states/goa" element={<GoaPage/>}/>
            <Route path="/states/rajasthan" element={<RajasthanPage/>}/>
            <Route path="/states/westbengal" element={<WestBengalPage/>}/>
            <Route path="/states/uttarpradesh" element={<UttarPradeshPage/>}/>
            <Route path="/states/punjab" element={<PunjabPage/>}/>
            <Route path="/states/maharashtra" element={<MaharashtraPage/>}/>
            <Route path="/states/tamilnadu" element={<TamilNaduPage/>}/>
            <Route path="/states/kerala" element={<KeralaPage/>}/>


        </Routes>
        </div>
    );
}

export default App;