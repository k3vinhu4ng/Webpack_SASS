import './stylesheet.scss'
import './woof.css'


const headline = "Webpack/SASS";
document.querySelector('h1').innerText = headline;

const credit = "Made by Kevin Huang";
document.querySelector('h2').innerText = credit;

const content1 = "This is a webpage made using Webpack and SASS. For SASS to compile, webpack needed a sass-loader.";
const content2 = "All the content on this page is made from an index.js file, rather than hardcoded directly into this webpage.";
const content3 = "Webpack compiles the index.js into main.js. The main.js is the only script that is run on this page.";
const content4 = "This index.js file also imports the SASS stylesheet.";
const content5 = "This webpage was created merely to practice using Webpack and SASS. Webpack and SASS make it very convenient to organize data. However, due to my lack of experience using Webpack and SASS, it is still uncertain whether or not I will use bootstrap for my final websites.";

document.getElementById("data1").innerText = content1;
document.getElementById("data2").innerText = content2;
document.getElementById("data3").innerText = content3;
document.getElementById("data4").innerText = content4;
document.getElementById("data5").innerText = content5;
