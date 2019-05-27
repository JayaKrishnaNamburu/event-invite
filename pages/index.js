import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Timer = dynamic(() => import('../components/timer'), { ssr: false })

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
        <div className="surName">
          Namburu's
        </div>
        <div className="tailText">
          Wedding Invitation
        </div>
        <div className="intro">
          We cordially invite you to bless the couple on the auspicious occasion of marriage of our daughter
        </div>
        <div className="names">
          <span className="prefix">Chi.La.Sow.</span> Lakshmi Venkata Raja Mounika
          <div className="withHelper">
            with
          </div>
          <span className="prefix">Chi</span> Naga Venkata Satya Bhavani Yaswanth Kumar
        </div>
        <div className="timer">
          <Timer />
        </div>
      </div>
      <style jsx>{`
        .withHelper {
          font-size: 16px;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .names {
          font-family: 'Acme', sans-serif;
          font-size: 22px;
        }

        .prefix {
          font-size: 16px;
          color: #9f8181;
        }

        .intro {
          margin: 15px 75px;
          font-size: 18px;
        }

        .timer {
          font-size: 18px;
          margin-top: 25px;
        }

        .tailText {
          font-family: 'Great Vibes', cursive;
          font-size: 45px;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .surName {
          font-family: 'Acme', sans-serif;
          font-size: 40px;
          margin-bottom: 10px;
        }

        .bodyWrapper {
          display: flex;
          flex-wrap: wrap;
          height: 100vh;
          margin: 0px;
        }

        .imageWrapper {
          flex: 1;
        }

        .bigImage {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .child {
          flex: 1;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
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