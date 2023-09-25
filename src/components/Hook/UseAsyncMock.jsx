import { useState, useEffect } from "react";

const UseAsynMock = (mock) =>{
    
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const newMockPromise = new Promise ((resolve, rejects)=>{
        setTimeout(()=>{
            resolve(mock)
        },1000);
    })

    useEffect(()=>{
        newMockPromise.then((res)=>(setData(res), setLoading(false)))
    },[])

    return {data, loading};
}

export default UseAsynMock;