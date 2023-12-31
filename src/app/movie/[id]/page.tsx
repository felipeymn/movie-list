import Cast from "../components/cast";
import RelatedVideo from "../components/related-video";
import InfoCard from "../components/info-card";
import MovieDetailHeader from "../components/header";

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
  // const movieVideosUrl = `${process.env.API_URL}/movie/${params.id}/videos?api_key=${process.env.API_KEY}`;

  // const [movieData, movieCredits, movieVideos] = await Promise.all([
  const [movieData, movieCredits] = await Promise.all([
    fetchAndParse(movieDataUrl),
    fetchAndParse(movieCreditsUrl),
    // fetchAndParse(movieVideosUrl),
  ]);

  const movieDirectors = movieCredits.crew.filter(
    ({ job }: any) => job === "Director"
  );

  // const relatedVideos = filterYoutubeVideoTypes(movieVideos.results, [
  //   "Trailer",
  //   // "Behind the Scenes",
  //   "Teaser",
  // ]);

  return (
    <div className="overflow-x-hidden">
      <MovieDetailHeader
        movieData={movieData}
        movieDirectors={movieDirectors}
      />
      <section className="relative -top-10 flex gap-2 overflow-x-auto content-margin">
        <InfoCard
          title={"Release"}
          data={new Date(movieData.release_date).toLocaleDateString("en-us", {
            // weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        />
        <InfoCard title={"Runtime"} data={movieData.runtime + " min"} />
        <InfoCard
          title={"Budget"}
          data={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact",
            maximumSignificantDigits: 3,
          }).format(movieData.budget)}
        />
        <InfoCard
          title={"Revenue"}
          data={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact",
            maximumFractionDigits: 1,
            maximumSignificantDigits: 3,
          }).format(movieData.revenue)}
        />
      </section>
      <section className="flex flex-col gap-10 content-margin">
        <div>
          <h3 className="section-title">Description</h3>
          <p className="text-sm text-neutral-300">{movieData.overview}</p>
        </div>
        <div>
          <h3 className="section-title">Notable Cast</h3>
          <div className="flex gap-4">
            {movieCredits.cast.slice(0, 3).map((actor: any) => (
              <Cast
                key={actor.id}
                name={actor.name}
                profilePicPath={actor.profile_path}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
