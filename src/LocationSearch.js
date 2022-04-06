import React, {useEffect, useState, createContext} from 'react';
//import useFetchHook from './fetchHook';
import userContext from './contextHook.js';
import ShowData from './showData.js';

let LocationUrl = "";
let WeatherUrl= "";
let isDataSubmitted = false;
let isWeatherDataReady = false;


function LocationSearchComponent(){
        // const [loc , setLoc] = useState("");
        let loc = "";
        const [data, setData] = useState({});
        const [wDataOne, setWeatherDataOne] = useState({});
        const [wDataTwo, setWeatherDataTwo] = useState({});
        const [wDataThree, setWeatherDataThree] = useState([]);
        const [wDataFour, setWeatherDataFour] = useState([]);
        const [wDateFive, setWeatherDataFive] = useState([]);
        const [nextStage, setNextStage] = useState(false); 
        const [isApiOneReady, setIsApiOneReady] = useState(false);
        const [isApiTwoReady, setIsApiTwoReady] = useState(false);
        const [isApiThreeReady, setIsApiThreeReady] = useState(false);
        const [isApiFourReady, setIsApiFourReady] = useState(false);





        function returnUnixTime(day){
                let todayUnixDate = (Math.floor(Date.now() / 1000));
                if(day!=0){

                        let subtractUnixDays = 88400 *day;
                        let dateRequired = todayUnixDate - subtractUnixDays;
                        todayUnixDate = dateRequired;
                }
                return todayUnixDate;
        }

        /**
         * This is api call to fetch the lati and longi of the function.
         * @param {*} location 
         */
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





        /**
         * First Call to Weather Api.
         * @param {*} lat 
         * @param {*} lon 
         * @param {*} day 
         */
        function callHistoryWeatherApiOne(lat, lon, day){
                
                if(lat != undefined && !isApiOneReady){
                        let dt = returnUnixTime(day);
                        console.log("today" + dt);
                        WeatherUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=5f15b9438cb57451f2f761a0a0c6d0dd`;

                        console.log("calling 1st Weather api");
                        fetch(WeatherUrl)
                        .then(res=> res.json())
                        .then(result=> {
                                setWeatherDataOne(result);
                                console.log("below is api one data");
                                console.log(result);
                                setIsApiOneReady(true);
                        }).catch(err=> console.log(err.message));
                        
                }else{
                        console.log("undefined");
                }
        }


        
        function callHistoryWeatherApiTwo(lat, lon, day){

                if(lat != undefined && !isApiTwoReady){
                        let dt = returnUnixTime(day);
                        console.log("1 din pehla" + dt);

                        WeatherUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=5f15b9438cb57451f2f761a0a0c6d0dd`;

                        console.log("calling 2nd Weather api");
                        fetch(WeatherUrl)
                        .then(res=> res.json())
                        .then(result=> {
                                setWeatherDataTwo(result);
                                console.log("below is api 2 data")
                                console.log(result);
                                setIsApiTwoReady(true);
                        }).catch(err=> console.log(err.message));
                        
                }
        }


        function callHistoryWeatherApiThree(lat, lon, day){

                if(lat != undefined && !isApiThreeReady){
                        let dt = returnUnixTime(day);
                        console.log("2 din pehlay" + dt);
        
                        WeatherUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=5f15b9438cb57451f2f761a0a0c6d0dd`;
        
                        console.log("calling Weather api");
                        fetch(WeatherUrl)
                        .then(res=> res.json())
                        .then(result=> {
                                setWeatherDataThree(result);
                                console.log("below is api 3 data")
                                console.log(result);
                                setIsApiThreeReady(true);
                        }).catch(err=> console.log(err.message));
                        
                }
        }

       
        function callHistoryWeatherApiFour(lat, lon, day){
                
                if(lat != undefined && !isApiFourReady){
                        let dt = returnUnixTime(day);
                        console.log("3 din pehlay" + dt);
        
                        WeatherUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=5f15b9438cb57451f2f761a0a0c6d0dd`;
        
                        console.log("calling Weather api");
                        fetch(WeatherUrl)
                        .then(res=> res.json())
                        .then(result=> {
                                setWeatherDataFour(result);
                                console.log(result);
                                console.log("below is api 4 data")
                                setIsApiFourReady(true);
                        }).catch(err=> console.log(err.message));
                        
                }
        }





        useEffect(()=>{
                if(isDataSubmitted){
                console.log("useeeeeeeee effecttttttt");
                callHistoryWeatherApiOne(data[0].lat, data[0].lon, 0);
                callHistoryWeatherApiTwo(data[0].lat, data[0].lon, 1);
                callHistoryWeatherApiThree(data[0].lat, data[0].lon, 2);
                callHistoryWeatherApiFour(data[0].lat, data[0].lon, 3);
                if(isApiOneReady && isApiTwoReady && isApiThreeReady && isApiFourReady){
                        setNextStage(true);

                }else{
                        console.log("check mate use effect");
                }
              //  console.log(data);

                
                }
               // console.log(0.lat);
                
        },[data,isApiOneReady,isApiTwoReady, isApiThreeReady, isApiFourReady])

        
     

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
                        <input id='search-bar' type="text" placeholder='search your location'></input>
                        <button onClick={submit}>Submit</button>
                        <button onClick={hook}> hook</button>

                        {nextStage && 
                                <userContext.Provider value = {{wDataOne, setWeatherDataOne, wDataTwo, setWeatherDataTwo, wDataThree, setWeatherDataThree, wDataFour, setWeatherDataFour}}>
                                        <ShowData />
                                </userContext.Provider>
                        }

                </>
        )
}
export default LocationSearchComponent;




/*



{nextStage && 
                                <userContext.Provider value= {wDataOne}>
                                        <ShowData weather1={wDataOne}/>
                                </userContext.Provider>
                        }
*/




/*

  function callHistoryWeatherApiTwo(lat, lon, day){

        if(lat != undefined){
                let dt = returnUnixTime(day);
                console.log("1 din pehla" + dt);

                WeatherUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=5f15b9438cb57451f2f761a0a0c6d0dd`;

                console.log("calling 2nd Weather api");
                fetch(WeatherUrl)
                .then(res=> res.json())
                .then(result=> {
                        setWeatherDataTwo(result);
                        console.log("below is api 2 data")
                        console.log(result);
                }).catch(err=> console.log(err.message));
                
        }else{
                console.log("undefined");
        }
}





 function callHistoryWeatherApiThree(lat, lon, day){

        if(lat != undefined){
                let dt = returnUnixTime(day);
                console.log("2 din pehlay" + dt);

                WeatherUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=5f15b9438cb57451f2f761a0a0c6d0dd`;

                console.log("calling Weather api");
                fetch(WeatherUrl)
                .then(res=> res.json())
                .then(result=> {
                        setWeatherDataThree(result);
                        console.log("below is api 3 data")

                        console.log(result);
                }).catch(err=> console.log(err.message));
                
        }else{
                console.log("undefined");
        }
}



  function callHistoryWeatherApiFour(lat, lon, day){

        if(lat != undefined){
                let dt = returnUnixTime(day);
                console.log("3 din pehlay" + dt);

                WeatherUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=5f15b9438cb57451f2f761a0a0c6d0dd`;

                console.log("calling Weather api");
                fetch(WeatherUrl)
                .then(res=> res.json())
                .then(result=> {
                        setWeatherDataFour(result);
                        console.log(result);
                        console.log("below is api 4 data")

                        setNextStage(true);
                }).catch(err=> console.log(err.message));
                
        }else{
                console.log("undefined");
        }
}

*/






