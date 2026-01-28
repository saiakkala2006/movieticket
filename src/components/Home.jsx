import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Now Showing 🎥</h1>

      <div className="movie-grid">
        <div className="movie-card">Interstellar</div>
        <div className="movie-card">Inception</div>
        <div className="movie-card">Dune</div>
        <div className="movie-card">Avengers</div>
      </div>
    </div>
  );
}

export default Home;
