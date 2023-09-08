import Link from "next/link";
import SearchInput from "../search-input";
import MoviePoster from "./components/movie-poster";

export default async function Movie({
  searchParams,
}: {
  searchParams: { q: string | undefined };
}) {
  const { q } = searchParams;

  const movieSearchUrl = `${process.env.API_URL}/search/movie?api_key=${process.env.API_KEY}&query=${q}`;
  const movieSearchResult = await fetch(movieSearchUrl).then((data) =>
    data.json()
  );
  // const movieSearchResult = await fetch(movieSearchUrl);
  // const movieJson = await movieSearchResult.json();
  return (
    <div>
      <div className="content-margin">
        <header className="pt-6 pb-4">
          <div className="flex gap-16">
            <Link href={"/"}>
              <h1>movielist</h1>
            </Link>
            <SearchInput />
          </div>
        </header>
        <h2 className="font-semibold text-3xl mb-3">Search results for: {q}</h2>
        <div className="grid grid-cols-fluid gap-16">
          {movieSearchResult.results.map((movie: any) => (
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
    </div>
  );
}
