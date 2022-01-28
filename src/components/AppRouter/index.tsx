import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "../../pages/404";
import CharacterDetail from "../../pages/CharacterDetail";
import Home from "../../pages/Home";
import MovieDetail from "../../pages/MovieDetail";

const AppRouter: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie-detail/:id" element={<MovieDetail />} />
        <Route path="character-detail/:id" element={<CharacterDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const NoMatch: React.FC = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};

export default AppRouter;
