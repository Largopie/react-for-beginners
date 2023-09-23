import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100vw;
  padding: 30px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <MainContainer>
      {loading ? <h1>loading...</h1> : <GridContainer>{movies.map((movie) =>
        <Movie summary={movie.summary} id={movie.id} key={movie.id} coverImg={movie.large_cover_image} title={movie.title} genres={movie.genres} />
      )}</GridContainer>}
    </MainContainer>
  );
}

export default Home;