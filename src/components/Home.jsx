import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Now Showing 🎥</h1>

      <div className="movie-grid">
        <div className="movie-card">Khaleja</div>
        <div className="movie-card">Athadu</div>
        <div className="movie-card">Business-man</div>
        <div className="movie-card">Murari</div>
      </div>
    </div>
  );
}

export default Home;
