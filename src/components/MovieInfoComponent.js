import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  &span {
    opacity: 0.5;
  }
`;

const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;
const MovieInfoComponent = ({ selectedMovie, setSelectedMovie }) => {
  const [movieInfo, setMovieInfo] = useState();
  const image = `https://image.tmdb.org/t/p/original/${movieInfo?.poster_path}`;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=f796a39d1202fee9a2a4b57089d16e1a&language=en-US`
      )
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  return (
    <Container>
      {movieInfo ? (
        <>
          <CoverImage src={image} />
          <InfoColumn>
            <MovieName>Movie {movieInfo?.title}</MovieName>
            <MovieInfo>Revenue : {movieInfo?.revenue}</MovieInfo>
            <MovieInfo>Release : {movieInfo?.release_date}</MovieInfo>
            <MovieInfo>Popularity : {movieInfo?.popularity}</MovieInfo>
            <MovieInfo>Rating : {movieInfo?.vote_average}</MovieInfo>
            <MovieInfo>Status : {movieInfo?.status}</MovieInfo>
            <MovieInfo>
              Trailer : <a href={movieInfo?.homepage}>{movieInfo?.homepage}</a>
            </MovieInfo>
            <MovieInfo>Desc : {movieInfo?.overview}</MovieInfo>
          </InfoColumn>
          <Close onClick={() => setSelectedMovie()}>X</Close>
        </>
      ) : (
        "Loading...."
      )}
    </Container>
  );
};

export default MovieInfoComponent;
