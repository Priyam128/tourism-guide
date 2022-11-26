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
            <Route path="/tourism-guide/home" element={<Home/>}/>
            <Route path="/tourism-guide/about" element={<About/>}/>
            <Route path="/tourism-guide/states" element={<States/>}/>
            <Route path="/tourism-guide/contact" element={<Contact/>}/>
            <Route path="/tourism-guide/states/bihar" element={<BiharPage/>}/>
            <Route path="/tourism-guide/states/delhi" element={<DelhiPage/>}/>
            <Route path="/tourism-guide/states/goa" element={<GoaPage/>}/>
            <Route path="/tourism-guide/states/rajasthan" element={<RajasthanPage/>}/>
            <Route path="/tourism-guide/states/westbengal" element={<WestBengalPage/>}/>
            <Route path="/tourism-guide/states/uttarpradesh" element={<UttarPradeshPage/>}/>
            <Route path="/tourism-guide/states/punjab" element={<PunjabPage/>}/>
            <Route path="/tourism-guide/states/maharashtra" element={<MaharashtraPage/>}/>
            <Route path="/tourism-guide/states/tamilnadu" element={<TamilNaduPage/>}/>
            <Route path="/tourism-guide/states/kerala" element={<KeralaPage/>}/>


        </Routes>
        </div>
    );
}

export default App;