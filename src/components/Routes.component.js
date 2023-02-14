import React, {Component} from 'react'
import { BrowserRouter , Route, Routes}  from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import ShowEvents from './ShowEvents.component';
import Main from './Main.component';
import ShowVols from './ShowVols.component';
import Contact from './Contact.component';
import Api from './ApiPage.component';
 

export default class Routes extends  Component{



    render(){

        return (
            <div class="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Main/>}/> 
                    <Route path="showEvents" element={<ShowEvents/>}/> 
                    <Route path="showVols" element = {<ShowVols/>}/> 
                    <Route path="contact" element={<Contact/>}/> 
                    <Route path="api" element={<Api/>}/> 
                </Routes>
            </BrowserRouter>
            </div>
        );
    }
}