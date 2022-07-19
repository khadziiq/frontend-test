import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  gap: 24px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;

const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
`;

const MovieComponent = ({ movie, setSelectedMovie }) => {
  const image = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  return (
    <MovieContainer onClick={() => setSelectedMovie(movie.id)}>
      <CoverImage src={image} />
      <MovieName>{movie.title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year:{movie.release_date}</MovieInfo>
        <MovieInfo>Rating:{movie.vote_average}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};

export default MovieComponent;
