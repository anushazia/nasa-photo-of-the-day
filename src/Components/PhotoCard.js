import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

export default function PhotoCard() {
    const [photoData, setPhotoData] = useState([])

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=FT5XZsX8C7JRdKvWhPiQxbN4yPRkxOraRl8OmqKA')
        .then((response) => {
        console.log(response.data)
        setPhotoData(response.data)
    })
        .catch((error) => {
        console.log("data was not returned", error)
     })
    }, [])
    return (
        <div className="container">
            <Card data={photoData.date} explanation={photoData.explanation} url={photoData.hdurl} img={photoData.url} title={photoData.title} />
        </div>
       
    )

} 