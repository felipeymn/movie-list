import Image from "next/image";

export default function MovieDetailHeader({ movieData, movieDirectors }: any) {
  return (
    <header className="relative h-56 sm:h-64 md:h-80 lg:h-96">
      <Image
        src={process.env.IMAGE_URL + movieData.backdrop_path}
        fill={true}
        alt={movieData.title + " Poster"}
        style={{ objectFit: "cover" }}
        className="-z-30"
      />
      <div className="absolute -bottom-5 -left-5 -right-5 h-2/3 bg-black bg-opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full px-4 pb-16 md:px-16 xl:px-64">
        <div className="mb-1 flex gap-4">
          {movieDirectors.map((director: any) => (
            <span
              key={director.id}
              className="md:text-md text-xs font-semibold lg:text-xl"
            >
              {director.name}
            </span>
          ))}
        </div>
        <h1 className="text-xl font-bold uppercase sm:text-2xl md:text-4xl lg:text-5xl">
          {movieData.title}
        </h1>
        <div className="mt-4 flex gap-2">
          {movieData.genres.map((genre: any) => (
            <span
              key={genre.id}
              className="rounded border bg-gray-500 bg-opacity-60 px-2 py-1 text-xs md:text-sm lg:text-base"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -left-3 -right-3 -z-20 h-3 bg-black blur-sm"></div>
    </header>
  );
}
