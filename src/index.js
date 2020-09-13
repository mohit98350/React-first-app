import React from "react";
import ReactDOM from "react-dom";
import Part from "./Part";
import "./index.css";
import {BrowserRouter} from"react-router-dom";
ReactDOM.render(
 <>
 <BrowserRouter>
  <Part/>
 </BrowserRouter>

 

 </>
 ,
 
  document.getElementById("root")
);



