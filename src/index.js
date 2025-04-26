import apiKey from './api.js';
import "./style.css";



    const button = document.querySelector('button');
    const input = document.querySelector('#location');
    const body = document.querySelector('body');
    let res;

    function handleClick(){
        button.addEventListener('click', async (e) => {
            const location = input.value.trim();
            if (!location) {
                alert("Please enter a valid location");
                return;
            }
    
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,{ mode: 'cors' }
            ).then((response)=>{
                //do this (no explicit resolve value before the return  )
                return response.json(); //EVERY PROMISE HAS AN INTERNAL RESOLVE VALUE 
            });
            
            const weatherConditions = response;
            console.log(weatherConditions);
            res = weatherConditions.currentConditions.conditions;
            console.log(res);
            //Once we have our data, we can update our UI

            const pictureQueryParameter = location+' '+res;
            
            const pexelKey = 'g06fwABu65n8dOKZWF7XEee0IrtLhPT8oqSFTzS9VDKP0QPUO6zxpOPi';
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
            
            
        });
    
    }

    
        handleClick();