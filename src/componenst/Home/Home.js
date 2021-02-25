import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import './home.css'
import Rows from '../Row/Rows'
import request from '../../Request'

function Home() {
    return (
        <div className="homescreen">
            <Navbar/>
            <Banner/>
            <Rows 
            title= "NETFLIX ORIGINAL"
            fetchUrl = {request.fetchNetflixOriginals}
            isLargeRow/>
            <Rows 
            title="Sedang Tren Sekarang"
            fetchUrl={request.fetchTrending}/>
            <Rows 
            title="Rating Terbaik"
            fetchUrl={request.fetchTopRated}/>
            <Rows 
            title="Film Action"
            fetchUrl={request.fetchActionMovies}/>
            <Rows 
            title="Film Komedi"
            fetchUrl={request.fetchComedyMovies}/>
            <Rows 
            title="Film Horor"
            fetchUrl={request.fetchHorrorMovies}/>
            <Rows 
            title="Film Romansa"
            fetchUrl={request.fetchRomanceMovies}/>
            <Rows 
            title="Film Dokumenter"
            fetchUrl={request.fetchDocumentaries}/>
        </div>
    )
}

export default Home
