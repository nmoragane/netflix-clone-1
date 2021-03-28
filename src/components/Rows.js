import React, { useEffect, useState } from 'react';
import '../styles/Rows.css';
import axios from '../axios';

const base_url = "https://image.tmdb.org/t/p/original/"

function Rows({title, fetchUrl}) {

    const [movies, setMovies] = useState([]);

    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);
    
    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                    className="row__poster"
                    src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>
            {/* container -> posters */}


        </div>
    );
}

export default Rows;