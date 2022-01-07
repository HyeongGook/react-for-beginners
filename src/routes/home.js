import { useState, useEffect } from "react";
import Movie from "../components/movie";

function Home() {
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
      setMovies(json.data.movies);
      setLoading(false);
  }

  useEffect(() => getMovies(), [])

  return (
    <div>
      {loading ? 
        (<h2>Loading...</h2>) : (
        <div>
          {movies.map((movie) => (
            <div>
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary} />
            {movie.hasOwnProperty("genres") ? 
              <ul>
                {movie.genres.map(g => <li key = {g}>{g}</li>)}
              </ul> : null}
            </div>
          ))}
        </div>
        ) 
      }
    </div>
  );
}

export default Home;