import axios from '../../axios'
import movieTrailer from 'movie-trailer'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { motion } from 'framer-motion';
import './row.css'
import { animationPosters, animationTitle, transitionPosters, transitionTitle } from '../../Animations/RowAnimate';



function Rows({title, fetchUrl, isLargeRow = false}) {
    const posterBaseUrl = "http://image.tmdb.org/t/p/original"
    const [movies, setMovies] = useState([])
    const [trailer, setTrailer] = useState("")
    
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(fetchUrl)
            setMovies(req.data.results)
            return req
        }
        fetchData()
    }, [fetchUrl])
    console.log(movies)

    const opts = {
        height: '600',
        width: '100',
        playerVars: {
            autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if(trailer){
            setTrailer('')
        } else {
            movieTrailer(movie?.name || movie?.title || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailer(urlParams.get('v'))
            }).catch((err) => console.log(err))
        }
    }
    return (
        <div className="row">
           <motion.h2
            initial='out'
            animate='in'
            variants={animationTitle}
            transition={transitionTitle}
        >{title}</motion.h2>
             <motion.div
                initial='out'
                animate='in'
                variants={animationPosters}
                transition={transitionPosters}
                className='row_posters'>
                {movies.map((movie) => 
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <img 
                     className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                     key={movie.id}
                     src={`${posterBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                     alt={movie.name}
                     onClick={() => handleClick(movie)}/>
                )
            )}
            </motion.div>
            {trailer && <YouTube videoId={trailer} opt={opts} className="youtube_trailer"/>}
        </div>
    )
}

export default Rows
