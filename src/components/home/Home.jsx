import "./home.css";
import { TypeAnimation } from "react-type-animation";
import moon from '../assets/moon.png'

export default function Home({setPage}) {

  return (
    <div className="home">
      <div className="portfolioImg">
        <img
          src={moon}
          alt=""
        />
      </div>
      <div className="portfolioDesc">
        <div className="portfolioDescTitle">-Hi, I'm Fatih Tassoker.</div>
        <div className="portfolioDescSubtitle">I am</div>
        <TypeAnimation
          sequence={[
            "a web designer", // Types 'One'
            1000, // Waits 1s
            "a full-stack developer", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "a react native developer", // Types 'Three' without deleting 'Two'
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "2.5em",
            display: "inline-block",
            color: "white",
            fontFamily: "Bruno Ace SC",
          }}
        />
        <button className="portfolioBtn" onClick={() => setPage(3)}>
          <span
            style={{
              zIndex: 1,
              color: "white",
              fontFamily: "Indie Flower",
              fontSize: "20px",
            }}
          >
            more about me?
          </span>
        </button>
      </div>
    </div>
  );
}
