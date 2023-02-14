import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes}  from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 
import './index.css';
import UserBar from './components/userBar.component';
import Navbar from './components/Navbar.component';
import Main from './components/Main.component';
import UserLanding from './components/UserLanding.component'
import VolLanding from './components/VolLanding.component'
import ShowVols from './components/ShowVols.component';
import Contact from './components/Contact.component';
import ApiPage from './components/ApiPage.component';
import ShowEvents from './components/ShowEvents.component';
import CreateEvent from './components/CreateEvent.component';
import AddVol from './components/AddVol.component';
import SignUp from './components/SignUp.component';

export default function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Main/>}/> 
            <Route path=":userId" element={<UserLanding/>}/>
            <Route path=":volId" element={<VolLanding/>}/>
            <Route path="showEvents" element={<ShowEvents/>}/> 
            <Route path="createEvent" element={<CreateEvent/>}/>
            <Route path="userLanding/:id" element={<UserLanding/>}/>
            <Route path="volLanding" element={<VolLanding/>}/>
            <Route path="showVols" element = {<ShowVols/>}/> 
            <Route path="addVol" element={<AddVol/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="signUp" element={<SignUp/>}/> 
            <Route path="api" element={<ApiPage/>}/> 
            <Route path="*" element={<h2 className="p-2 bg-primary">404 Page Not Found</h2>}/>
        </Routes>
    </BrowserRouter>
    );
}

const rootEl = document.getElementById("root");
createRoot(rootEl).render( <App/>
 );
    

