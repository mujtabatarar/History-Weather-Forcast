import React, {useState, useEffect, useContext} from 'react';
import useDatesHook from './useDateHook';
import useFetchHook from './fetchHook';



function Day1(){
        const time = useDatesHook(3);
        //console.log(time);
        let t = time;
        const [data] = useFetchHook();
       
     //  apiCall = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1648913678267&appid=5f15b9438cb57451f2f761a0a0c6d0dd`
        //const [data] = useFetchHook(apiCall);
        return (<>
                        <p>{t}</p>
                        <p>mujtaba is going to rest</p>
                </>);
}
export default Day1;
 