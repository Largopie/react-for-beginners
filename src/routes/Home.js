import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 30px;
`

const GridContainer = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 769px) and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
  grid-template-columns: repeat(3, 1fr);
  }
`

const Title = styled.div`
  font-size: 3rem;
  padding: 20px;
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

  return (
    <MainContainer>
      <Title>Movie Website</Title>
      {loading ? <h1>loading...</h1> : <GridContainer>{movies.map((movie) =>
        <Movie summary={movie.summary} id={movie.id} key={movie.id} coverImg={movie.large_cover_image} title={movie.title} genres={movie.genres} />
      )}</GridContainer>}
    </MainContainer>
  );
}

export default Home;