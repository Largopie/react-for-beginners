
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

//json을 State에 담아 상세정보 출력 Detail에다가 출력해보기
function Detail() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setData(json.data.movie);
        setLoading(true);
    };
    
    useEffect(() => {
        getMovie();
    }, []);
    
    console.log(data);

    return (
        <Container>
            {loading ? 
            <MovieDetail des={data.description_full} runtime={data.runtime} genres={data.genres} coverImg={data.large_cover_image} />
            : <h1>Loading...</h1>}
        </Container>
    );
}

export default Detail;