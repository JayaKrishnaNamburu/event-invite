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
      </Head>
      <div className="imageWrapper">
        <img src="static/back.jpg" alt="background" className="bigImage"/>
      </div>
      <div className="child">
        <Welcome />
      </div>
      <style jsx>{`
        .bodyWrapper {
          display: flex;
          flex-wrap: wrap;
          height: 100vh;
          margin: 0px;
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
      `}</style>
      <style global jsx>{`
        body {
          padding: 0px;
          margin: 0px;
          height: 100vh;
          background-color: #FFCA8A;
        }
      `}</style>
    </div>
  )
}

export default Home;