import MoviePoster from "./movie/components/movie-poster";

export default async function Home() {
  const data = await fetch(
    `${process.env.API_URL}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const json = await data.json();

  return (
    <main>
      <div className="grid grid-cols-fluid gap-16">
        {json.results.map((movie: any) => (
          <MoviePoster
            title={movie.title}
            id={movie.id}
            key={movie.key}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
