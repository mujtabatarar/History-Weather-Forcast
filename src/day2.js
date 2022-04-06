import React, {useEffect, useState, createContext} from 'react';
//import useFetchHook from './fetchHook';
import user2Context from './contextHook.js';
import ShowData from './showData.js';

let LocationUrl = "";
let WeatherUrl= "";
let isDataSubmitted = false;
let isWeatherDataReady = false;


function LocationSearchComponent(){
        // const [loc , setLoc] = useState("");
        let loc = "";
        const [data, setData] = useState({});
        const [wData, setWeatherData] = useState({});
        const [nextStage, setNextStage] = useState(false);

        function calLocationApi (location) {
                
                if(isDataSubmitted){
                        LocationUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=5f15b9438cb57451f2f761a0a0c6d0dd`;

                        console.log("calling location api");
                        fetch(LocationUrl)
                        .then(res=> res.json())
                        .then(result=> {
                                setData(result);
                                console.log(result);

                        }).catch(err=> console.log(err.message));
                };
        }
        function callHistoryWeatherApi(lat, lon, day){
                if(lat != undefined){
                        let dt = (Math.floor(Date.now() / 1000));
                        WeatherUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=5f15b9438cb57451f2f761a0a0c6d0dd`;

                        console.log("calling Weather api");
                        fetch(WeatherUrl)
                        .then(res=> res.json())
                        .then(result=> {
                                setWeatherData(result);
                                console.log(result);
                                setNextStage(true);
                        }).catch(err=> console.log(err.message));
                        
                }else{
                        console.log("undefined");
                }


        }
        useEffect(()=>{
                if(isDataSubmitted){
                console.log("useeeeeeeee effecttttttt");
                callHistoryWeatherApi(data[0].lat, data[0].lon, 1);
                console.log(data);

                
                }
               // console.log(0.lat);
                
        },[data])

        useEffect(()=>{

        },[])
     

        function submit(){

                console.log("submit button");
                let location = document.getElementById("search-bar").value;
                console.log(location);
                isDataSubmitted = true;
                calLocationApi(location);
                
        }
        function hook(){
                console.log(data);
        }
        return (
                <>
                       

                        {nextStage && 
                                <user2Context.Provider value= {data}>
                                        <ShowData weather2={data}/>
                                </user2Context.Provider>
                        }

                </>
        )
}
export default LocationSearchComponent;
















