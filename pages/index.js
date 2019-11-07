import React, { useState } from "react";
import Head from "next/head";
import Emoji from "../components/Emoji";
import Button from "../components/Button";
import Prompt from "../components/Prompt";
import { NextSeo } from "next-seo";

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

  const bookNow = (offering, productUrl) => () => {
    setPrompt({
      title: "Before booking",
      action: "Book time",
      description:
        "You will be prompted to find a time that works for you. Then you will be redirected to payment. If you book at time and do not pay I will cancel your meeting.",
      progress() {
        Calendly.initPopupWidget({
          url: "https://calendly.com/eric-adamski/60min"
        });

        setPrompt({
          title: "Did you book a time?",
          action: "Pay now",
          description:
            "Did you find a time that works for you? If not go ahead and cancel , otherwise continue to payment.",
          progress() {
            window.open(productUrl);

            setPrompt({
              title: "Thanks for booking!",
              description: `Looking forward to ${offering}! If you have any questions or want to cancel, just send me and email er.adamski@gmail.com. I'd be happy to help!`,
              progress() {
                setPrompt();
              }
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <NextSeo
        title={`${getRandomEmoji()} Eric Adamski`}
        description="Eric wants to help you be a better developer! You can book some of his time for code review, or just a phone call. He would love to talk with you and help in any way possible!"
        openGraph={{
          url: "https://ericadamski.dev",
          title: `${getRandomEmoji()} Eric Adamski`,
          description: "Eric wants to help you be a better developer! You can book some of his time for code review, or just a phone call. He would love to talk with you and help in any way possible!",
          images: [
            {
              url: "https://files-htr0omzni.now.sh/Adamski_ColourReg%20(3).jpg",
              width: 3072,
              height: 4608,
              alt: "A picture of Eric Adamski's face"
            }
          ],
          site_name: `${getRandomEmoji()} Eric Adamski`
        }}
        twitter={{
          handle: "@zealigan",
          cardType: "summary_large_image"
        }}
      />
      <Head>
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
            <p className="subtitle">
              My name is <a href="https://twitter.com/zealigan">Eric Adamski</a>
              . I am a software developer focused on the Web, usually fullstack
              and I am here to help you become a better developer.
              <br />
              <br />
              Here are somethings I am doing that you might be interested in:
              <ul>
                <li>
                  <a href="https://dev.to/ericadamski">Blogging on dev.to</a>
                </li>
                <li>
                  <a href="https://twitter.com/zealigan">Tweeting on Twitter</a>{" "}
                  <Emoji alt="eye roll">🙄</Emoji>
                </li>
                <li>
                  <a href="https://twitch.tv/ericadamski">
                    {" "}
                    Streaming on Twitch
                  </a>
                </li>
                <li>
                  <a href="https://flawk.to">Building Flawk.to</a>
                </li>
              </ul>
            </p>
          </div>
          <div className="page__cards">
            <div className="card">
              <div className="card__details">
                <div className="card__price">$25</div>
                <h3 className="title">Call me</h3>
                <p className="card__description">
                  We can talk about advancing your career, what courses to take,
                  what languages to learn, look at your CV or do some code
                  review. It's your time.
                </p>
              </div>
              <ul className="card__features">
                <li className="card__feature">1 hour</li>
                <li className="card__feature">No schedule</li>
                <li className="card__feature">Ask anything you want</li>
              </ul>
              <Button
                onClick={bookNow(
                  "chatting with you",
                  "https://app.tillypay.com/pay/0nz73k6"
                )}
              >
                Book now
              </Button>
            </div>
            <div className="card">
              <div className="card__details">
                <div className="card__price">$50</div>
                <h3 className="title">Pair Programming</h3>
                <p className="card__description">
                  Need an extra hand on a project, need some help with a
                  problem, or want to learn by doing. You can program with me on
                  whatever problem you choose.
                </p>
              </div>
              <ul className="card__features">
                <li className="card__feature">1 hour</li>
                <li className="card__feature">Learn something new</li>
                <li className="card__feature">Help with a difficult problem</li>
              </ul>
              <Button
                onClick={bookNow(
                  "pair programming with you",
                  "https://app.tillypay.com/pay/9f3ef155"
                )}
              >
                {" "}
                Book now{" "}
              </Button>
            </div>
            <div className="card">
              <div className="card__details">
                <div className="card__price">$75</div>
                <h3 className="title">Code review</h3>
                <p className="card__description">
                  I will go through and give a detailed review of the code of
                  your choice. I will deliver detailed document that outlines
                  places to improve and grow.
                </p>
              </div>
              <ul className="card__features">
                <li className="card__feature">Detailed report</li>
                <li className="card__feature">Tool suggestions</li>
                <li className="card__feature">Achitecture suggestions</li>
              </ul>
              <Button
                onClick={bookNow(
                  "understanding more about your code",
                  "https://app.tillypay.com/pay/4ae76fd6"
                )}
              >
                {" "}
                Book now{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="interest">
          <h2 className="title" style={{ fontSize: "2rem" }}>
            Interested in a site like this for yourself?
          </h2>
          <p className="subtitle">
            I would like to create a community that helps developers get paid to
            share and help others learn. I am collecting emails from people who
            are interested. Get notified when I reach 100 interested people -
            and get early access to the product that results.
          </p>
          <form
            style={{
              width: "100%"
            }}
            action="https://buttondown.email/api/emails/embed-subscribe/findadev"
            method="post"
            target="popupwindow"
            onSubmit={() =>
              window.open("https://buttondown.email/findadev", "popupwindow")
            }
            className="embeddable-buttondown-form center"
          >
            <div className="sub">
              <input
                type="email"
                name="email"
                id="bd-email"
                placeholder="Enter email"
              />
              <input type="hidden" value="1" name="embed" />
              <input type="submit" value="Subscribe" />
            </div>
            <p className="subtitle">
              <a href="https://buttondown.email" target="_blank">
                Powered by Buttondown.
              </a>
            </p>
          </form>
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
              <Button onClick={prompt.progress}>{prompt.action || "Ok"}</Button>
            </div>
          </div>
        </Prompt>
      )}
      <style jsx>{`
        .sub {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 1rem 0;
        }

        .sub input[type="submit"] {
          border: 2px solid var(--black);
          box-shadow: none;
          border-radius: var(--border-radius);
          height: 3rem;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          border-left: none;
          font-size: 1rem;
          font-weight: bold;
          padding: 0 1rem;
        }

        .sub input[type="email"] {
          flex-grow: 1;
          font-size: 1rem;
          max-width: 400px;
          border: 2px solid var(--black);
          box-shadow: none;
          border-radius: var(--border-radius);
          height: 3rem;
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
          padding: 0.5rem 1rem;
        }

        .interest {
          padding: 1rem;
        }

        .interest .subtitle {
          padding: 1rem 0;
        }

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
          margin-bottom: 2rem;
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
          padding: 1rem;
          padding-bottom: 0;
        }

        .page__container,
        .interest {
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
