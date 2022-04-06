import React, {useState, useEffect} from "react";

function useDatesHook(day){
        
        const [time, setTime] = useState(0);


        useEffect(()=>{


                let todayUnixDate = (Math.floor(Date.now() / 1000));
                let subtractUnixDays = 86400000 *day;
                let dateRequired = todayUnixDate - subtractUnixDays;

                setTime(dateRequired);

        },[day]);
        
       return [time];

}
export default useDatesHook;