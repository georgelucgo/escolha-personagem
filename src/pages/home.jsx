import { Link } from "react-router-dom";
import "./home.css";

import personagens from "../data/personagens";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Escolha Seu Personagem</h1>

        <div className="card-container">
          <Link className="hero-title" to={`/personagem/${personagens[0].slug}`}>
            <div className="card">
              <img className="card-image" src='https://static.wikia.nocookie.net/liga-da-zueira-oficial/images/3/32/Earth616_PeterParker_Render_NoiseRemoval.png/revision/latest?cb=20210203001438&path-prefix=pt-br' alt="" />
              Homem Aranha
            </div>
          </Link>

          <Link className="hero-title" to={`/personagem/${personagens[1].slug}`}>
            <div className="card">
              <img
                className="card-image"
                src="https://i.redd.it/if-berry-isnt-going-to-be-the-main-flash-should-it-be-wally-v0-m55tngqppngf1.png?width=258&format=png&auto=webp&s=2d7642dd544276adbc988a668e659fe8479c52f5"
                alt=""
              />
              Flash
            </div>
          </Link>
          <Link className="hero-title" to={`/personagem/${personagens[2].slug}`}>
            <div className="card">
              <img
                className="card-image"
                src="https://static.wikia.nocookie.net/nerdologiaheroespowers/images/d/de/Demolidor.png/revision/latest/thumbnail/width/360/height/360?cb=20180218015113&path-prefix=pt-br"
                alt=""
              />
              Demolidor
            </div>
          </Link>

          <Link className="hero-title" to={`/personagem/${personagens[3].slug}`}>
            <div className="card">
              <img className="card-image" src='https://static.wikia.nocookie.net/liberproeliis/images/2/23/Bat-render.png/revision/latest?cb=20251229155042&path-prefix=pt-br' alt="" />
              Batman
            </div>
          </Link>

          <Link className="hero-title" to={`/personagem/${personagens[4].slug}`}>
            <div className="card">
              <img
                className="card-image"
                src="https://static.wikia.nocookie.net/nerdologiaheroespowers/images/9/9b/Superman_Terra_Primal.png/revision/latest?cb=20180805234911&path-prefix=pt-br"
                alt=""
              />
              Superman
            </div>
          </Link>
        </div>
      </div>

    </>
  );
}
