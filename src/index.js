import {apiKey, pixApiKey} from './api.js';
import "./style.css";


const button = document.querySelector('button');
const input = document.querySelector('#location');
const body = document.querySelector('body');
let res;

async function render(){
    const location = input.value.trim();
    if (!location) {
        alert("Please enter a valid location");
        return;
    }

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,{ mode: 'cors' }
    ).then((response)=>{
        return response.json(); //EVERY PROMISE HAS AN INTERNAL RESOLVE VALUE 
    });
    
    const weatherConditions = response; //Get data from API endpoint
    console.log(weatherConditions);
    const fullAddress = weatherConditions.resolvedAddress;
    console.log(fullAddress);
    res = weatherConditions.days[0].conditions;
    console.log(res);
    //Once we have our data, we can update our UI

    const pictureQueryParameter = res+' weather in '+ fullAddress;
    
    const pexelKey = pixApiKey;
    const visuals = await fetch(`https://api.pexels.com/v1/search?query=${pictureQueryParameter}`,
        {
            mode:'cors', 
            headers: {
                Authorization: pexelKey, 
            },
        }).then((pic)=>{
            return pic.json();
        });
    const index = Math.floor(Math.random() * 15); //response has pictures as an array from 0 to 14

    const picture = visuals.photos[index].src.original; //maneuver down the json properties to the asset

    body.style.backgroundImage = `url(${picture})`; //update document background style

    console.log(picture);
    console.log(visuals);

    // client.videoes.search({ res, per_page: 1 }).then(videos => {console.log(videos)});
};

function handleTriggers(){
    button.addEventListener('click', render);
    input.addEventListener('keypress', (e)=>{
        if (e.key === "Enter"){
            render();
        }
    });
}

handleTriggers();