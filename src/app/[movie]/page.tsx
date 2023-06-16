import Image from "next/image";

async function fetchAndParse(url: string) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

export default async function MovieDetail({ params }: any) {
  const movieDataUrl = `${process.env.API_URL}/movie/${params.movie}?api_key=${process.env.API_KEY}`;
  const movieCreditsUrl = `${process.env.API_URL}/movie/${params.movie}/credits?api_key=${process.env.API_KEY}`;

  const [movieData, movieCredits] = await Promise.all([
    fetchAndParse(movieDataUrl),
    fetchAndParse(movieCreditsUrl),
  ]);

  const movieDirectors = movieCredits.crew.filter(
    ({ job }: any) => job === "Director"
  );

  return (
    <div>
      <header className="h-56 sm:h-64 md:h-80 lg:h-96 relative">
        <Image
          src={process.env.IMAGE_URL + movieData.backdrop_path}
          fill={true}
          alt={movieData.title + " Poster"}
          style={{ objectFit: "cover" }}
        />
        <div className="-bottom-5 -left-5 -right-5 bg-black bg-opacity-60 absolute h-2/3  blur-3xl"></div>
        <div className="absolute bottom-0 left-0 pb-8 px-4 w-full">
          <div className="flex gap-4 mb-1">
            {movieDirectors.map((director: any) => (
              <span className="font-semibold text-xl">{director.name}</span>
            ))}
          </div>
          <h1 className="text-5xl font-bold uppercase">{movieData.title}</h1>
          <div className="gap-2 flex mt-4">
            {movieData.genres.map((genre: any) => (
              <span className="rounded bg-gray-500 border px-1 bg-opacity-40">
                {genre.name}
              </span>
            ))}
          </div>
        </div>
        <div className="-left-3 -right-3 -bottom-2 bg-black absolute h-3 blur-sm"></div>
      </header>
      <section className="mt-8 mx-4 flex flex-col gap-10">
        <div>
          <h3 className="uppercase font-semibold mb-2 text-zinc-400">
            Description
          </h3>
          <p className="text-sm text-zinc-50">{movieData.overview}</p>
        </div>
        <div>
          <h3 className="uppercase font-semibold mb-2 text-zinc-400">
            Notable Cast
          </h3>
        </div>
      </section>
    </div>
  );
}
