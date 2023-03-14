import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import axios from '../api/axios';
import "./row.css"


export default function Row({title, fetchUrl, isLargeRow=false}) {
    const [movies, setmovies] = useState([]);
    const baseUrl  = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchMovies() {
            const response = await axios.get(fetchUrl);
            setmovies(response.data.results);
            return response;
        }
        fetchMovies() 
    }, [])
    console.log(movies)

  return (
    <div className="text-white row">
        <h2>{title}</h2>
        <div className=" row">
        {movies.map(movie =>
        <div className="col">
             <Card style={{ width: '18rem' }} key={movie.id}>
             <Card.Img variant="top" 
             src={`${baseUrl}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}

             alt={movie.name}
             />
           </Card>
        )
        </div>   )}
        </div>
    </div>
  )
}
