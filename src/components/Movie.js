import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Image = styled.img`
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`

const Summary = styled.div`
  height: 40px;
  overflow: scroll;
`

const Movie = ({ id, coverImg, title, summary, genres}) => {
  return (
    <Container>
      <Image alt="coverImg" src={coverImg} />
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <Summary>{summary}</Summary>
      <ul>
        {genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
    </Container>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;