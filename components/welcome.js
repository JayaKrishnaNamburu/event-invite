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
        <span className="prefix">Chi.La.Sow.</span> Raja Mounika
        <div className="withHelper">
          with
        </div>
        <span className="prefix">Chi</span> Yaswanth Kumar
      </div>
      <div className="smallHeading">
        Sumuhurtham
      </div>
      <div className="helper">
        Wednesday 19th June 2019 at 11:35pm IST
      </div>
      <div className="address">
        <div className="smallHeading">
          Address
        </div>
        {/* <img src="../static/location.png" className="locImg"/> */}
        <div>
          S Convention Hall, Near Nagaiah Hotel, R.T.C Workshop Road, Bhavanipuram,Vijayawada -12
          <div style={{ marginTop: '10px'}}>
            <a href="https://goo.gl/maps/FyAWBzfyA7VhDSDc6" target="_blank">Click here for venue location</a>
          </div>
        </div>
      </div>
      <div className="timer">
        <Timer />
      </div>
      <div className="credit">
        <a href="https://www.freepik.com/free-photos-vectors/heart">Heart vector created by freepik - www.freepik.com</a>
      </div>
      <style jsx>{`
        .address {
          margin-top: 15px;
          margin-bottom: 15px;
          padding: 5px 25px;
        }

        .helper {
          padding: 0px 25px;
        }

        .locImg {
          width: 40px;
          height: 40px;
        }

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
          margin-top: 5px;
          margin-bottom: 5px;
        }

        .names {
          font-family: 'Acme', sans-serif;
          font-size: 22px;
        }

        .smallHeading {
          font-family: 'Acme', sans-serif;
          font-size: 18px;
          margin-top: 10px;
          margin-bottom: 5px;
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
          margin-bottom: 15px;
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

        @media(max-width: 600px) {
          .credit {
            width: 85%;
            display: none;
          }

          .intro {
            margin: 15px 45px;
            font-size: 18px;
          }
        }
      `}</style>
    </>
  )
}

export default Welcome;