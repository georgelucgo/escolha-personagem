import Policial from "../assets/policial.png";


var personagens = [
    {
      id: 1,
      nome: "Herói",
      slug: "heroi",
      detalhe:
        "Herói é uma pessoa que, diante do perigo, combate a adversidade por meio de feitos de engenhosidade, coragem ou força.",
      frase: "Apenas acredite em si mesmo e você poderá se tornar um herói.",
      fraseAutor: "All Might",
      imagem:
        "https://www.pngall.com/wp-content/uploads/15/All-Might-No-Background.png",
      corFundo: "#2d2e7c",
      corTexto: "#ffffff",
    },
    {
      id: 2,
      nome: "Vilão",
      slug: "vilao",
      detalhe:
        "Vilão é uma pessoa que age de forma maliciosa, buscando poder, vingança ou destruição, geralmente sendo o principal opositor do herói.",
      frase: "Você não conhece o poder do lado sombrio",
      fraseAutor: "Darth Vader",
      imagem:
        "https://www.clipartmax.com/png/full/104-1049816_darth-vader-png-star-wars-the-force-unleashed.png",
      corFundo: "#7c2d2d",
      corTexto: "#fff",
    },
    {
      id: 3,
      nome: "Anti-herói",
      slug: "antiheroi",
      detalhe:
        "Anti-herói é um personagem que não segue os padrões tradicionais de heroísmo, podendo agir de forma egoísta ou violenta, mas ainda assim alcançando objetivos considerados 'bons'.",
      frase: "Abra os seus olhos e veja o que você fez!",
      fraseAutor: "Dexter Morgan",
      imagem: "https://static.wikia.nocookie.net/character-stats-and-profiles/images/b/b5/Morgan.png/revision/latest?cb=20241223144354",
      corFundo: "#1b1b1b",
      corTexto: "#fff",
    },
    {
      id: 4,
      nome: "Policial",
      slug: "policial",
      detalhe:
        "Policial é o agente responsável por manter a ordem pública, proteger a sociedade e fazer cumprir as leis.",
      imagem: Policial,
      frase: "Missão dada é missão cumprida.",
      fraseAutor: "Capitão Nascimento",
      corFundo: "#1c1d4d",
      corTexto: "#fff",
    },
    {
      id: 5,
      nome: "Bandido",
      slug: "bandido",
      detalhe:
        "Bandido é um indivíduo que pratica crimes, agindo fora da lei com objetivos como lucro, poder ou sobrevivência.",
      frase: "Eu não estou em perigo. Eu sou o perigo!",
      fraseAutor: "Walter White",
      imagem: "https://static.wikia.nocookie.net/one-minute-meelee-fanon/images/6/61/Wahter.png",
      corFundo: "#025006",
      corTexto: "#fff",
    },
  ];


  export default personagens;