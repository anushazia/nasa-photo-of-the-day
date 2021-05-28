import React, { useState, useEffect } from 'react'
import PhotoCard from "./PhotoCard"
import axios from 'axios'

const Card = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DvVAg0z5x0xC86UIpoeVQBozhVeOuKRHvqHnQp9z")
        .then(response => {
            setPhotos(response.data)
            console.log(response.data)
        })
    }, [])

    return <PhotoCard data={photos} />
}
export default Card;




