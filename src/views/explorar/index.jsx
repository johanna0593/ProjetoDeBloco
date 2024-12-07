import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Card from "./Card"; 
import Favoritos from "./favoritos";  // Certificando-se de importar corretamente
import "./index.css";

// Exemplo de filmes que vamos usar
const filmes = [
  { id: 1, titulo: "Inception", categoria: "Sci-Fi", ano: 2010 },
  { id: 2, titulo: "The Dark Knight", categoria: "Action", ano: 2008 },
  { id: 3, titulo: "Avengers", categoria: "Action", ano: 2012 },
  { id: 4, titulo: "Parasite", categoria: "Drama", ano: 2019 },
  { id: 5, titulo: "The Matrix", categoria: "Sci-Fi", ano: 1999 },
  { id: 6, titulo: "Your Name", categoria: "Romance", ano: 2016 },
];

export default function Explorar() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTViMmJjNTUzYzNlMTAxYWUyYjc0ZDAwYjQwMWVhZCIsIm5iZiI6MTcyNDExNDczOC43NzksInN1YiI6IjY2YzNlNzMyYjE5YTRhZDczMmQxMGJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._EUZqhNTbUfexYmtB66J1TTNVVnMxCFP1APfIQ7vgU8'
        }
      };
      
      
       // A chamada da API
       const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);  
 
       const data = await res.json();  // Aguarda o retorno da resposta como JSON
       setTopMovies(data.results);  // Atualiza o estado com os filmes
    } catch (error) {
       console.error('Erro ao buscar filmes:', error);
    } finally {
          }
 };

  const filtrarFilmes = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  const filmesFiltrados = categoriaSelecionada
    ? filmes.filter((filme) => filme.categoria === categoriaSelecionada)
    : filmes;

    useEffect(() => {
      getTopRatedMovies();  // Chama a função ao montar o componente
   
}, []);

  return (
    <div className="app-container">
      <div className="nav">
        <Header />
      </div>
      <div className="main-content">
        <div className="explorar-conteudo">
          {/* Botões de Categoria */}
          <div className="opcoes">
            <button className="btn-categoria" onClick={() => filtrarFilmes("Sci-Fi")}>Sci-Fi</button>
            <button className="btn-categoria" onClick={() => filtrarFilmes("Action")}>Ação</button>
            <button className="btn-categoria" onClick={() => filtrarFilmes("Drama")}>Drama</button>
            <button className="btn-categoria" onClick={() => filtrarFilmes("Romance")}>Romance</button>
            <button className="btn-categoria" onClick={() => setCategoriaSelecionada(null)}>Todos</button>
          </div>

          {/* Exibindo filmes filtrados */}
          <div className="cards-container">
            {filmesFiltrados.map((filme) => (
              <Card key={filme.id} titulo={filme.titulo} categoria={filme.categoria} ano={filme.ano} />
            ))}
          </div>

          <div>
               {topMovies.length === 0 && <p>Carregando...</p>}
               {topMovies.map((item) => (
                  <Card key={item.id} movie={item}/>
               ))}
            </div>

          {/* Seção de Favoritos */}
          <Favoritos filmesFavoritos={filmesFiltrados} />
        </div>
      </div>
    </div>
  );
}
