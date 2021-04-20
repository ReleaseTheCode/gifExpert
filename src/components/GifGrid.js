import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {
    const [images, setImages] = useState([]);

    useEffect( () => {
        getGif();
    }, []);

    const getGif = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?';
        const apiKey = 'api_key=nocx7098gYkuybtCFpzqkQpOVMiAIB9y';
        const limit = 'limit=8';
        const query = 'q='+category;
        const response = await fetch(`${url}&${apiKey}&${limit}&${query}`);
        const { data } = await response.json();
        const gifs = data.map( ({ id, title, images }) => {
            return { id, title, url:images?.downsized_medium.url }
        })
        console.log(gifs);
        setImages(gifs);
    };

    return (
        <>
            <h3>{ category }</h3>
            {
                images.map( eachGif => (
                    <GifGridItem key={eachGif.id} {...eachGif} />
                ))
            }
        </>
    )
}
