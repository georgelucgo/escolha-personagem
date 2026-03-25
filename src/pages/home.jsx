import { Link } from "react-router-dom";
import "./home.css";
import Hero from "../assets/hero.png";
import Policial from "../assets/policial.png";
import personagens from "../data/personagens";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Escolha Seu Personagem</h1>

        <div className="card-container">
          <Link className="hero-title" to={`/personagem/${personagens[0].slug}`}>
            <div className="card">
              <img className="card-image" src={Hero} alt="" />
              Herói
            </div>
          </Link>

          <Link className="hero-title" to={`/personagem/${personagens[1].slug}`}>
            <div className="card">
              <img
                className="card-image"
                src="https://static.wikia.nocookie.net/villains/images/3/3b/Darth_vader_by_br3ndan5_dcvp5rb.png/revision/latest?cb=20220421174113"
                alt=""
              />
              Vilão
            </div>
          </Link>
          <Link className="hero-title" to={`/personagem/${personagens[2].slug}`}>
            <div className="card">
              <img
                className="card-image"
                src="https://static.wikia.nocookie.net/character-stats-and-profiles/images/0/09/Dexter_morgan1.webp/revision/latest?cb=20260210205854"
                alt=""
              />
              Anti-Herói
            </div>
          </Link>

          <Link className="hero-title" to={`/personagem/${personagens[3].slug}`}>
            <div className="card">
              <img className="card-image" src={Policial} alt="" />
              Policial
            </div>
          </Link>

          <Link className="hero-title" to={`/personagem/${personagens[4].slug}`}>
            <div className="card">
              <img
                className="card-image"
                src="https://static.wikia.nocookie.net/one-minute-meelee-fanon/images/6/61/Wahter.png"
                alt=""
              />
              Bandido
            </div>
          </Link>
        </div>
      </div>

    </>
  );
}
