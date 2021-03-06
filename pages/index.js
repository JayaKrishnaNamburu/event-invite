import React from 'react';
import Head from 'next/head';
import Welcome from '../components/welcome';

const Home = () => {
  return (
    <div className="bodyWrapper">
      <Head>
        <title>Namburu's Wedding Invitation</title>
        <link href="https://fonts.googleapis.com/css?family=Acme&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Lato&display=optional" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="We cordially invite you for the marriage on June 19th 2019 @11:35pm" />
      </Head>
      <div className="imageWrapper">
        <img src="static/back.png" alt="background" className="bigImage"/>
      </div>
      <div className="child">
        <Welcome />
      </div>
      <style jsx>{`
        .bodyWrapper {
          display: flex;
          flex-wrap: wrap;
          height: 100%;
          margin: 0px;
          height: 100vh;
          animation: fadein 2s;
        }

        .bigImage {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .imageWrapper {
          flex: 1;
        }

        .child {
          flex: 1;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          padding: 8px;
        }

        @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        a {
          text-decoration: none;
          color: #000;
        }

        @media (max-width: 600px) {
          .bodyWrapper {
            display: flex;
            flex-wrap: wrap-reverse;
            padding: 25px;
            height: 100%;
            margin: 0px;
            overflow: scroll;
            animation: fadein 2s;
          }

          .imageWrapper {
            flex: auto;
          }
  
          .child {
            flex: auto;
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            padding: 8px;
          }
        }
      `}</style>
      <style global jsx>{`
        html {
          height: 100%;
        }

        body {
          padding: 0px;
          margin: 0px;
          height: 100%;
          background-color: #FFCA8A;
          font-family: 'Lato', sans-serif;
        }
      `}</style>
    </div>
  )
}

export default Home;