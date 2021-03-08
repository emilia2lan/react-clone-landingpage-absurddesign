/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from './images/6.png';
import Video from './images/movie.mp4';

const headerStyles = css`
  display: flex;
  width: 100vw;
  justify-content: center;
  margin: auto;

  a {
    background-color: white;
    color: #6e6e6e;
    text-decoration: none;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.125em;
    margin-right: 37px;
    margin-top: 22px;
    align-self: center;
    vertical-align: baseline;
    justify-content: space-around;
    &:nth-child(4) {
      margin-right: 37px;
    }
  }

  img {
    margin-right: auto;
    margin-left: 30px;
    height: 40px;
    width: 50px;
  }
`;

const firstPage = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: auto;
  margin-top: 80px;
  margin-left: 100px;
  margin-right: 40px;

  h1 {
    font-family: sans-serif;
    font-size: 70px;
    text-align: left;
    color: #242424;
    height: 30vw;
    width: 40vh;
    align-items: bottom;
    vertical-align: bottom;
  }

  p {
    font-family: sans-serif;
    color: #c2c2c2;
    font-size: 22px;
    vertical-align: bottom;
  }

  .download {
    height: 40px;
    width: 80px;
  }

  .subscribe {
    height: 40px;
    width: 80px;
  }

  video {
    grid-column: 2;
    grid-row: 1 / span 2;

    align-self: right;
    height: 60vh;
    margin-left: 70px;
  }
`;

function App() {
  return (
    <div>
      <div>
        <header css={headerStyles}>
          <img src={logo} alt="Logo" />
          <a href="#1">Why?</a>
          <a href="#1">Buy</a>
          <a href="#1">Illustration series</a>
          <a href="#1">Exclusive Illustrations</a>
        </header>
      </div>
      <section css={firstPage}>
        <div className="videoPage">
          <h1>
            {' '}
            absurd <br /> illustrations that <br /> make sense{' '}
          </h1>

          <p>
            What about absurd illustrations for your projects? Take every user
            on an individual journey through their own imagination.
          </p>

          <button className="download">Download</button>
          <button className="subscribe">Subscribe</button>
        </div>
        <video autoPlay muted loop src={Video} />
      </section>

      <section>
        <h2>real beauty resides in imperfection</h2>
        {/* <img src={face} alt="Face" /> */}

        <p>
          In a digital era, we sometimes feel the need to interact with
          something more human that will make us appreciate both the beauty and
          the imperfection of something made by hand.
        </p>
      </section>

      <section>
        <h2>expressiveness is... the new black</h2>

        {/* <img src={fish} alt="Fish" /> */}
        <p>
          This series of illustrations paradoxically combines absurdity and a
          deep sense of childishness and naivety.
        </p>
      </section>
      <section>
        <h2>illustrations for |landing pages |applications |everything</h2>
        <p>
          Welcome to my space for experiments! Look at this like a journey we
          can take together every step of the way, beginning another chapter
          with each new phase of the project development. And who knows where it
          will take us?
        </p>
      </section>
      <section> 5 blocks </section>
      <section>
        <h2>examples of use</h2>
        <p>
          Each illustration offers the possibility of limitless interpretations
          and uses and everyone can give it its own meaning. It depends only on
          each one's creativity and free spirit.
        </p>
      </section>
    </div>
  );
}
export default App;
