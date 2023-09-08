import MoviePoster from "./movie/components/movie-poster";
import SearchInput from "./search-input";

export default async function Home() {
  const data = await fetch(
    `${process.env.API_URL}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const json = await data.json();

  return (
    <main>
      <div className="content-margin">
        <header className="pt-6 pb-4">
          <div className="flex gap-16">
            <h1>movielist</h1>
            <SearchInput />
          </div>
        </header>

        <h2 className="font-semibold text-3xl mb-3">Popular</h2>
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
      </div>
    </main>
  );
}
