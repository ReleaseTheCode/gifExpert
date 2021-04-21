import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState( { gifs:[], loading:true } );
    
    useEffect( () => {
        getGif( category ).then( gifObj => setstate( { gifs:gifObj, loading:false } ) );
    }, [ category ]);
    return state;
}


