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
    }, [fetchUrl])

  return (
    <div className="text-white row pt-4 ps-4">
        <h2>{title}</h2>
        <div className="posts row ps-4">
        {movies.map(movie =>
        (((isLargeRow&& movie.poster_path) || (!isLargeRow && movie.backdrop_path) )&&
        <div className="col p-0 m-0 " key={movie.id}>
             <Card style={{ width: '18rem' }}  className="border-0  myCard"
             
             >
             <Card.Img variant="top" 
             className={`poster ${isLargeRow && "poster__Large"}"`}
             src={`${baseUrl}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}

             alt={movie.name}
             />
           </Card>
        
        </div> )
        ) }
        </div>
    </div>
  )
}
