import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  display: flex;
  
  justify-content: center; 
  
  background-image: url('https://maracana-web-prod-bkt.s3.amazonaws.com/images/posts/9-nota-oficial-complexo-maracana.png');
  background-size: cover; 
  background-position: center; 
}
`;

const Titulo = styled.h1`
  font-family: "Lilita One", sans-serif;
  font-weight: 400;
  color: white;
  -webkit-text-stroke: 1px black;
  margin: 30px 0 0 0;
  font-size: 4.1vw;
  text-align: center;
`;
const Img = styled.img`
  width: 500px;
  margin: 20px auto;
  display: block;
`;

const Botao = styled.button`
font-family: "Lilita One", sans-serif;
-webkit-text-stroke: 0.5px black;
font-weight: 400;  
margin-top: 20px; 
  padding: 5px 80px; 
  font-size: 1.8rem; 
  color: white;
  background-color: #007BFF; 
  border: none; 
  border-radius: 50px;
  cursor: pointer; 
  margin: 20px auto; /* Margem vertical e centraliza horizontalmente */
  display: block;
  }
`;

const Mensagem = styled.p`
  text-align: center;
  -webkit-text-stroke: 0.1px black;
  color: white;
  font-family: "Lilita One", sans-serif;
  font-size: 35px;
  font-weight: bold;
  margin: 10px 0;
`;

export default function App() {
  //useState
  const [lampada, setLampada] = useState(false);
  const [texto, setTexto] = useState("");
  const trocarLampada = () => {
    setLampada(!lampada);
    setTexto(
      !lampada
        ? "Zico, o maior artilheiro do Maracanã, com 334 gols no total!"
        : ""
    );
  };

  return (
    <main>
      <GlobalStyle />
      <Titulo>Descubra quem é o maior artilheiro do Maracanã.</Titulo>
      <Img
        src={
          lampada
            ? "https://i.ibb.co/nCsCB8Q/zico-png.png"
            : "https://iili.io/233t2Hu.png"
        }
        alt="Jogador"
        // caso eu queira o clique na imagem onClick={trocarLampada}
      />
      <Mensagem>{texto}</Mensagem> {}
      <Botao onClick={trocarLampada}>Clique aqui e descubra</Botao>
    </main>
  );
}
