import Hero from "./Hero";
import { Link } from "react-router-dom";
//api key :50638a80e3b7831348ccb63a3f6776dd

const Moviecard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`  

  return (
    <div className="col-lg-3 col-md-3 my-4">
    <div className="card">
      <img
        src={posterUrl}
        className="card-img-top"
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <Link to={detailUrl} className="btn btn-primary">
          Show Details
        </Link>
      </div>
    </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `you are searching for ${keyword}`;

  const resultHtml =
    Array.isArray(searchResults) && searchResults.length > 0 ? (
      searchResults.map((obj, i) => {
        return <Moviecard movie={obj} key={i}/>;
      })
    ) : (
      <div>No results found.</div> // Show a message when no results
    );

  return (
    <div>
      <Hero text={title} />
      {resultHtml &&
      <div className="container">
        <div className="row">
          {resultHtml}
        </div>
      </div>} {/* Render the results */}
    </div>
  );
};

export default SearchView;

