import axios from '../../axios'
import request from '../../Request'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import './banner.css'
import { animationBanner, animationButton, animationOne, animationTwo, transitionBanner, transitionButton, transitionOne, transitionTwo } from '../../Animations/BannerAnimate';


const posterBaseUrl = "http://image.tmdb.org/t/p/original"

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginals)
            setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length -1)])
            return req
        }
        fetchData()
    }, [])
    console.log(movie)
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }
    return (
        <motion.header
        initial='out'
        animate='in'
        variants={animationBanner}
        transition={transitionBanner}
        className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('${posterBaseUrl}${movie?.backdrop_path}')`,
            backgroundPosition: 'center center',
        }}>
         <div className="banner_content">
         <motion.h1
          initial='out'
          animate='in'
          variants={animationOne}
          transition={transitionOne}
          className='banner_title'>
                 {movie?.title || movie?.name || movie?.original_name}
             </motion.h1>
             <motion.div
                initial='out'
                animate='in'
                variants={animationButton}
                transition={transitionButton}
                className='banner_buttons'>
                 <button className="banner_button">play</button>
                 <button className="banner_button">My list</button>
             </motion.div>
             <motion.h1
                initial='out'
                animate='in'
                variants={animationTwo}
                transition={transitionTwo}
                className='banner_description'>
                 {truncate(movie?.overview, 150)}
             </motion.h1>
         </div>
         <div className="banner--fadeButton"/>
        </motion.header>
    )
}

export default Banner
