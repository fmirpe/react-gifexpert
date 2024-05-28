import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchGifs = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchGifs();
    },[category]);

    return {
        isLoading,
        images,
    }
}


