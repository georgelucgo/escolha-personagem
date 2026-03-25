import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./personagem.css";
import personagens from "../data/personagens";


export default function Personagem() {
  const { id } = useParams();


  var personagem = personagens.find((item) => item.slug === id);
    if (!personagem) {
    return <h1>Personagem não encontrado</h1>;
    }
  return (
    <>
      <div
        className="personagem-container"
        style={{ backgroundColor: `${personagem.corFundo}`, color: `${personagem.corTexto}` }}
      >
        <div className="personagem">
          <h1 className="personagem-nome">{personagem.nome}</h1>
          <p className="personagem-detalhe">{personagem.detalhe}</p>

          <img className="personagem-img" src={personagem.imagem} />
          <h2 className="personagem-frase">"{personagem.frase}" - {personagem.fraseAutor}</h2><br />
          <Link className="botao-voltar" to="/">
            Voltar a página Inicial
          </Link>
        </div>
      </div>
    </>
  );
}
