import React, { useState } from "react";
import Head from "next/head";
import Emoji from "../components/Emoji";
import Button from "../components/Button";
import Prompt from "../components/Prompt";

function getRandomEmoji() {
  const es = [
    "❤️",
    "🔥",
    "🤩",
    "👏",
    "👋",
    "🎉",
    "👀",
    "👩‍💻",
    "🚀",
    "💯",
    "😂",
    "🤦‍♂️"
  ];

  return es[~~(es.length * Math.random())];
}

const Home = () => {
  const [prompt, setPrompt] = useState();

  const bookNow = () => {
    setPrompt({
      title: "Before booking",
      action: 'Book time',
      description:
        "You will be prompted to find a time that works for you. Then you will be redirected to payment. If you book at time and do not pay I will cancel your meeting.",
      progress() {
        Calendly.initPopupWidget({
          url: "https://calendly.com/eric-adamski/60min"
        });

        setPrompt({
          title: "Did you book a time?",
          action: 'Pay now',
          description:
            "Did you find a time that works for you? If not go ahead and cancel , otherwise continue to payment.",
          progress() {
            window.open("https://google.com");
          }
        });
      }
    });
  };

  return (
    <div>
      <Head>
        <title>{getRandomEmoji()} Eric Adamski</title>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
        />
      </Head>
      <div className="page center">
        <div className="page__container">
          <div className="page__details">
            <h1 className="title">
              <Emoji alt="wave">{getRandomEmoji()}</Emoji> Hello.
            </h1>
            <h3 className="subtitle">
              My name is <a href="https://twitter.com/zealigan">Eric Adamski</a>
              . I am a software developer focused on the Web, usually fullstack
              and I am here to help you become a better developer.
            </h3>
          </div>
          <div className="page__cards">
            <div className="card">
              <div className="card__details">
                <div className="card__price">$25</div>
                <h3 className="title">Career coaching call</h3>
                <p clasName="card__description">
                  We can talk about advancing your career, what courses to take,
                  what languages to learn, look at your CV or do some code
                  review. It's your time.
                </p>
              </div>
              <ul className="card__features">
                <li className="card__feature">1 hour</li>
                <li className="card__feature">No schedule</li>
                <li className="card__feature">ds</li>
              </ul>
              <Button onClick={bookNow}>Book now</Button>
            </div>
            <div className="card">
              <div className="card__details">
                <div className="card__price">$50</div>
                <h3 className="title">Pair Programming</h3>
                <p clasName="card__description">
                  Need an extra hand on a project, need some help with a
                  problem, or want to learn by doing. You can program with me on
                  whatever problem you choose.
                </p>
              </div>
              <ul className="card__features">
                <li className="card__feature">1 hour</li>
              </ul>
              <Button> Book now </Button>
            </div>
            <div className="card">
              <div className="card__details">
                <div className="card__price">$75</div>
                <h3 className="title">Detailed code review</h3>
                <p clasName="card__description">
                  Want some feedback on a code base? I will go through and give
                  a detailed review of the code of your choice. Along with the
                  review will be a detailed written document that outlines
                  potential improvements or places to grow and the tools that
                  can be used to achieve that growth.
                </p>
              </div>
              <ul className="card__features">
                <li className="card__feature">asd</li>
              </ul>
              <Button> Book now </Button>
            </div>
          </div>
        </div>
      </div>
      {prompt && (
        <Prompt>
          <div className="prompt-container">
            <h1 className="title">{prompt.title}</h1>
            <p className="subtitle">{prompt.description}</p>
            <div className="button-container">
              <Button secondary onClick={() => setPrompt()}>
                Cancel
              </Button>
              <Button onClick={prompt.progress}>{prompt.action || 'Ok'}</Button>
            </div>
          </div>
        </Prompt>
      )}
      <style jsx>{`
        .prompt-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          width: 100%;
        }

        .button-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .prompt-container .subtitle {
          flex-grow: 1;
          padding: 1rem 0;
          font-size: 1.125rem;
        }

        .prompt-container .title {
          font-size: 2rem;
        }

        .page {
          width: 100vw;
          min-height: 100vh;
          background: var(--white);
        }

        .page__cards {
          display: flex;
          flex-wrap: wrap;
          padding: 1rem 0;
          justify-content: center;
        }

        .card {
          width: 300px;
          border: 2px solid var(--black);
          border-radius: var(--border-radius);
          padding: 1rem;
          margin: 1rem;
          display: flex;
          flex-direction: column;
        }

        .card__features {
          flex-grow: 1;
        }

        .card__price {
          font-weight: bold;
          font-size: 2rem;
          color: var(--purple);
        }

        .card .title {
          font-size: 1.5rem;
        }

        .center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .page__details {
          padding: 0 1rem;
        }

        .page__container {
          max-width: 1000px;
        }

        .title,
        .subtitle {
          color: var(--black);
          padding: 0;
          margin: 0;
        }

        .title {
          font-size: max(4rem, 6vw);
        }
      `}</style>
      <style jsx global>{`
        /* latin-ext */
        @font-face {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local("Noto Sans"), local("NotoSans"),
            url(https://fonts.gstatic.com/s/notosans/v9/o-0IIpQlx3QUlC5A4PNr6zRASf6M7VBj.woff2)
              format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local("Noto Sans"), local("NotoSans"),
            url(https://fonts.gstatic.com/s/notosans/v9/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2)
              format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local("Noto Sans Bold"), local("NotoSans-Bold"),
            url(https://fonts.gstatic.com/s/notosans/v9/o-0NIpQlx3QUlC5A4PNjXhFVatyBx2pqPIif.woff2)
              format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local("Noto Sans Bold"), local("NotoSans-Bold"),
            url(https://fonts.gstatic.com/s/notosans/v9/o-0NIpQlx3QUlC5A4PNjXhFVZNyBx2pqPA.woff2)
              format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: "Noto Serif";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local("Noto Serif"), local("NotoSerif"),
            url(https://fonts.gstatic.com/s/notoserif/v8/ga6Iaw1J5X9T9RW6j9bNfFkWaDq8fMVxMw.woff2)
              format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: "Noto Serif";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local("Noto Serif"), local("NotoSerif"),
            url(https://fonts.gstatic.com/s/notoserif/v8/ga6Iaw1J5X9T9RW6j9bNfFcWaDq8fMU.woff2)
              format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: "Noto Serif";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local("Noto Serif Bold"), local("NotoSerif-Bold"),
            url(https://fonts.gstatic.com/s/notoserif/v8/ga6Law1J5X9T9RW6j9bNdOwzfRmece9LOocoDg.woff2)
              format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: "Noto Serif";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local("Noto Serif Bold"), local("NotoSerif-Bold"),
            url(https://fonts.gstatic.com/s/notoserif/v8/ga6Law1J5X9T9RW6j9bNdOwzfReece9LOoc.woff2)
              format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        body {
          padding: 0;
          margin: 0;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          font-family: "Noto Sans", sans-serif;
          color: var(--black);
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Noto Serif", serif;
        }

        a {
          color: var(--purple);
        }

        :root {
          --purple: #854bf2;
          --yellow: #ffe772;
          --white: #ffffff;
          --black: #0f1121;
          --border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default Home;
