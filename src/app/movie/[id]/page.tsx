import Image from "next/image";

async function fetchAndParse(url: string) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

function filterYoutubeVideoTypes(videos: any, types: Array<string>) {
  return videos.filter(
    (video: any) => types.indexOf(video.type) && video.site === "YouTube"
  );
}

export default async function MovieDetail({ params }: any) {
  const movieDataUrl = `${process.env.API_URL}/movie/${params.id}?api_key=${process.env.API_KEY}`;
  const movieCreditsUrl = `${process.env.API_URL}/movie/${params.id}/credits?api_key=${process.env.API_KEY}`;
  const movieVideosUrl = `${process.env.API_URL}/movie/${params.id}/videos?api_key=${process.env.API_KEY}`;

  const [movieData, movieCredits, movieVideos] = await Promise.all([
    fetchAndParse(movieDataUrl),
    fetchAndParse(movieCreditsUrl),
    fetchAndParse(movieVideosUrl),
  ]);

  const movieDirectors = movieCredits.crew.filter(
    ({ job }: any) => job === "Director"
  );

  const relatedVideos = filterYoutubeVideoTypes(movieVideos.results, [
    "Trailer",
    // "Behind the Scenes",
    "Teaser",
  ]);

  return (
    <div className="overflow-x-hidden">
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
              <span className="font-semibold text-md lg:text-xl">
                {director.name}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase">
            {movieData.title}
          </h1>
          <div className="gap-2 flex mt-4">
            {movieData.genres.map((genre: any) => (
              <span className="text-sm lg:text-base rounded bg-gray-500 border px-1 bg-opacity-40">
                {genre.name}
              </span>
            ))}
          </div>
        </div>
        <div className="-left-3 -right-3 -bottom-2 bg-black absolute h-3 blur-sm"></div>
      </header>
      <section className="mt-8 ml-4 mr-16 flex flex-col gap-10">
        <div>
          <h3 className="uppercase font-semibold mb-4 text-zinc-400">
            Description
          </h3>
          <p className="text-sm text-zinc-50">{movieData.overview}</p>
        </div>
        <div>
          <h3 className="uppercase font-semibold mb-4 text-zinc-400">
            Notable Cast
          </h3>
          <div className="flex gap-3">
            {movieCredits.cast.slice(0, 3).map((actor: any) => (
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="h-14 w-14 relative">
                  <Image
                    src={process.env.IMAGE_URL + actor.profile_path}
                    fill={true}
                    alt={actor.name + " profile picture"}
                    className="rounded-full object-cover"
                  />
                </div>
                <h4 className="text-sm font-semibold text-zinc-100">
                  {actor.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="uppercase font-semibold mb-4 text-zinc-400">
            Related Videos
          </h3>
          <div className="flex gap-3 overflow-hidden hover:overflow-x-auto pb-2">
            {relatedVideos.slice(0, 5).map((video: any) => (
              <iframe
                src={"https://www.youtube.com/embed/" + video.key}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
