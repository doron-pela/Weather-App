import {homePage} from "./homePage.js";
import {menuPage} from "./menuPage.js";
import {aboutPage} from "./aboutPage.js";
import "./style.css";

homePage();
console.log("Server is up and running");

const nav = document.querySelector('nav');

nav.addEventListener('click', (e)=>{
    const button = e.target;

    switch(button.id){
        case 'home':
            homePage();
            return;
        case 'about':
            aboutPage();
            return;
        case 'menu':
            menuPage();
            return;
    }
})
