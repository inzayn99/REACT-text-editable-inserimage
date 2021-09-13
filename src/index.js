import React from 'react';
import ReactDOM from 'react-dom';

const name = "zayn";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https//www.google.com";


ReactDOM.render(
  <>
  <h1 contentEditable='true'> My name is {name} </h1>
  
  <img src={img1} alt="randomimage"/>
  <img src={img2} alt="randomimage"/>
  
  <a href={links} target="_blank"><img src={img3} alt="randomimage"/></a>


  
  </>,
  document.getElementById("root")
);