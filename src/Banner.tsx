import React, { useState, useEffect } from 'react';
import "./Banner.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrow from '@mui/icons-material/PlayArrow';
import axios from './axios';
import requests from './Requests';



function Banner() {

    interface Movie {
        backdrop_path: string;
        title?: string,
        name?: string,
        original_name?: string,
    }
    const [movie, setMovie] = useState<Movie | null>(null);

    function truncate(string: string, n: number) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(requests.fetchNetflixOriginals);
                setMovie(
                    response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                    ]
                )
                return response;
            }
            catch (error) {
                console.log(error);
                setMovie(null);
            }
        }
        fetchData()
    }, [])


    console.log(movie)
    return (
        <header className='banner' style={{
            backgroundColor: "black",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <div className="banner__content">
                <h1 className="banner__title"> {movie?.title || movie?.name || movie?.original_name} </h1>
                <div className='banner__description'>{truncate(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi ex cupiditate aliquid minus molestias commodi dolores aspernatur sed repudiandae voluptate laudantium nihil ipsam ipsa sit aliquam exercitationem possimus, sunt quibusdam tempora aperiam tempore velit. Iusto nesciunt dicta architecto error adipisci rem tempore reprehenderit?`, 250)} </div>
                <div className="banner__buttons">
                    <button className='banner__button play'><span><PlayArrow className="icon" /> Play</span></button>
                    <button className='banner__button more'><span><InfoOutlinedIcon className="icon" /> More information</span></button>
                </div>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner