import React from 'react'
import requests from '../api/Requests'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Row from '../components/Row'

export default function Home() {
  return (
    <>
        <Nav/>
        <Banner/>
        <Row title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        />

        <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
        <Row title="Acion Movies" fetchUrl={requests.fetchActionMovies}></Row>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
        <Row title="Documentries" fetchUrl={requests.fetchDocumentries}></Row>
    </>
  )
}
