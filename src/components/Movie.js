import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #1E293B;
  color: #94A3B8;
  border-radius: 1rem;

  &:hover{
    transform: scale(0.995);
    box-shadow: 3px 3px 3px 3px #868e86;
  }
`

const Image = styled.img`
  max-width: 250px;
  padding: 1rem;
`

const Title = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  filter: drop-shadow(0 0 2px rgba(36, 255, 102, 0.7))
    drop-shadow(0 0 5px rgba(36, 255, 102, 0.7))
    drop-shadow(0 0 15px rgba(36, 255, 102, 0.7));
`

const StyledLink = styled(Link)`
  &:hover {
    color: rgb(36, 255, 102);
  }
`

const Genre = styled.div`
  display: flex;
  padding: 1rem;
`
const Movie = ({ id, coverImg, title, genres}) => {
  return (
    <Container>
      <Image alt="coverImg" src={coverImg} />
      <Title><StyledLink to={`/movie/${id}`}>{title}</StyledLink></Title>
      <Genre>
        {genres.join(', ')}
      </Genre>
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