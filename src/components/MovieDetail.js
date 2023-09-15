import React from 'react';

const MovieDetail = ({ coverImg, genres, runtime, des }) => {
    return (
        <div>
            <img alt="coverImg" src={coverImg} />
            <h2>장르</h2>
            <ul>
                {genres.map((genre) => (<li key={genre} >{genre}</li>))}
            </ul>
            <h4>{runtime} 분</h4>
            <h2>줄거리</h2>
            <p>{des}</p>
        </div>
    );
}

export default MovieDetail;