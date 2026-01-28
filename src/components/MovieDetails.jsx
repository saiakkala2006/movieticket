import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  // Movie data (beginner-friendly)
  const movieData = {
    Khaleja: {
      genre: "Fantasy / Action",
      duration: "2h 40m",
      rating: "8.0/10",
    },
    Athadu: {
      genre: "Action / Thriller",
      duration: "2h 50m",
      rating: "8.7/10",
    },
    "Business Man": {
      genre: "Action / Crime",
      duration: "2h 31m",
      rating: "8.2/10",
    },
    Murari: {
      genre: "Drama / Family",
      duration: "2h 30m",
      rating: "8.5/10",
    },
  };

  const movie = movieData[name];

  return (
    <div className="details-container">
      <h1>{name}</h1>

      <p>
        Experience <strong>{name}</strong> on the big screen.
      </p>

      {movie && (
        <div className="info">
          <p>🎭 Genre: {movie.genre}</p>
          <p>⏱ Duration: {movie.duration}</p>
          <p>⭐ Rating: {movie.rating}</p>
        </div>
      )}

      <button onClick={() => navigate("/confirm")}>
        Book Tickets
      </button>
    </div>
  );
}

export default MovieDetails;
