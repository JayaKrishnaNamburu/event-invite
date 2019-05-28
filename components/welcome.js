import React from 'react';
import dynamic from 'next/dynamic';

const Timer = dynamic(() => import('./timer'), { ssr: false })

const Welcome = () => {
  return (
    <>
      <div className="surName">
        Namburu's
      </div>
      <div className="tailText">
        Wedding Invitation
      </div>
      <div className="intro">
        We cordially invite you to bless the couple on the auspicious occasion of marriage
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
      <div className="credit">
        <a href="https://www.freepik.com/free-photos-vectors/heart">Heart vector created by freepik - www.freepik.com</a>
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #000;
        }

        .credit {
          text-align: center;
          position: absolute;
          font-size: 14px;
          bottom: 0px;
          width: 50%;
        }

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
      `}</style>
    </>
  )
}

export default Welcome;