import MoviePoster from "./movie/components/movie-poster";

export default async function Home() {
  const data = await fetch(
    `${process.env.API_URL}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const json = await data.json();

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {json.results.map((movie: any) => (
          <MoviePoster
            title={movie.title}
            id={movie.id}
            key={movie.key}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
