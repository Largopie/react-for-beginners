import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MovieDetail = ({ coverImg, genres, runtime, des }) => {
    return (
        <Container>
            <img alt="coverImg" src={coverImg} />
            <h2>장르</h2>
            <ul>
                {genres.map((genre) => (<li key={genre} >{genre}</li>))}
            </ul>
            <h4>{runtime} 분</h4>
            <h2>줄거리</h2>
            <p>{des}</p>
        </Container>
    );
}

export default MovieDetail;