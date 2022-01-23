import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getPopularMovies, searchMovies } from "../api/api-service";
import Movie from "./Movie";
import Topbar from "./Topbar";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  /* const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setMovies(resp.results);
      });
  }; */

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      searchMovies(searchTerm).then((resp) => {
        setMovies(resp.data.results);
        setSearchTerm("");
      });
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const checkDetail = (id) => {
    console.log(id);
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    getPopularMovies()
      .then((resp) => {
        console.log(resp.data.results);
        setMovies(resp.data.results);
      })
      .catch((err) => {
        console.log("populer hatasi");
      });
  }, []);

  return (
    <div className="movies">
      <Topbar />
      <div className="conteiner-search">
        <form className="search-group" onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="text"
            autoFocus="autofocus"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <Container>
        <Row>
          {movies.length > 0 &&
            movies.map((item) => (
              <Col className="m-3" onClick={() => checkDetail(item.id)}>
                <Movie key={item.id} {...item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;

/* <Container>
            <Col lg={3}>
              <Movie key={movie.id} {...movie} />
            </Col>
          </Container>; */
