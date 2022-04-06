import React, {useEffect, useState , useContext} from 'react';
import userContext from './contextHook';
//import useFetchHook from './fetchHook';
//import useDatesHook from './useDateHook';
//let apiCall = "";
//const apikeyTemp = "https://jsonplaceholder.typicode.com/todos";

function ShowData(){
const {wDataOne, setWeatherDataOne, wDataTwo, setWeatherDataTwo, wDataThree, setWeatherDataThree, wDataFour, setWeatherDataFour} = useContext(userContext);
        console.log("we are in show data");
        console.log(wDataOne);
        console.log(wDataTwo);
        console.log(wDataThree);
        console.log(wDataFour);


         //console.log(wDataTwo);
         //console.log(weather1);

   return (
           <>
           </>
   )
}
export default ShowData;






/*
 const time = useDatesHook(3);
        //console.log(time);

        console.log("sadeed");
        const dt = new Date(1648913678267);
        console.log(dt);
        

       apiCall = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1648913678267&appid=5f15b9438cb57451f2f761a0a0c6d0dd`
        const [data] = useFetchHook(apiCall);
        return (
                <>
                        <h1>{time}</h1>
                      
                </>
        )

        */