import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Hunter X'])
    // const handleAdd = () => {
    //     setCategories([...categories,'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>

            <hr/>

            <ol>
                {
                    categories.map( (eachCategory, i) => (
                        <GifGrid 
                            key={eachCategory}
                            category={eachCategory} 
                        />
                    ))
                }
            </ol>
        </>
    )
}