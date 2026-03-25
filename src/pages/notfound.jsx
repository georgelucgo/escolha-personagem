import { Link } from "react-router-dom";
import "./home.css";


export default function NotFound() {
  return (
    <>
      <div className="container">
        <h1>Página não encontrada</h1>
       
          <Link className="botao-voltar" to="/">
            Voltar para página inicial
          </Link>
        </div>

    </>
  );
}
