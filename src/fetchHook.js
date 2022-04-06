import React, {useState, useEffect} from 'react';

function useFetchHook ( url ){

        const [data, setData] = useState(null);

        useEffect(()=>{
                console.log("mujtaba");
                fetch(url)
                .then(res=> res.json())
                .then(result=> {
                        setData(result);
                        console.log(result);
                }).catch(err=> console.log(err.message));
        },[url])
        return [data];
}
export default useFetchHook;