import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled.div`
  padding: 0px 50px;
  height: 80vh;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 5px solid #1E293B;
  border-radius: 1rem;
  width: 50%;
  height: 80vh;
  padding: 30px;
`

const DescriptionGridContainer = styled.div`
  display: grid;
  grid-template-columns: 8% 50%;
  gap: 1rem 3rem;
  text-align: left;
  grid-column-end: 8;
`

const Title = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const InfoTitle = styled.div`
  font-weight: bold;
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: 20%;
  height: 2rem;
  margin-left: auto;
  background-color: #1E293B;
  color: #fff;
  border-radius: 1.5rem;

  &:hover {
    border: 5px solid #1E293B;
    color: #1E293B;
    background-color: #fff;
  }
`

const StyledLink = styled(Link)`
  
`

const MovieDetail = ({ title, coverImg, genres, runtime, des }) => {
  return (
    <Container>
      <ImageContainer>
        <img height="100%" alt="coverImg" src={coverImg} />
      </ImageContainer>
      <Description>
        <Title>{title}</Title>
        <DescriptionGridContainer>

          <InfoTitle>Genre</InfoTitle>
          <div>
            {genres.join(', ')}
          </div>
          
          <InfoTitle>Runtime</InfoTitle>
          <div>{runtime} Minutes</div>

          <InfoTitle>Description</InfoTitle>
          <div>{des}</div>
        </DescriptionGridContainer>
        <LinkContainer>
          <StyledLink to="/">Back to Home</StyledLink>
        </LinkContainer>
      </Description>
    </Container>
  );
}

export default MovieDetail;