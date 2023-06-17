import Image from "next/image";

export default function MovieDetailHeader({ movieData, movieDirectors }) {
  return (
    <header className="h-56 sm:h-64 md:h-80 lg:h-96 relative">
      <Image
        src={process.env.IMAGE_URL + movieData.backdrop_path}
        fill={true}
        alt={movieData.title + " Poster"}
        style={{ objectFit: "cover" }}
        className="-z-30"
      />
      <div className="-bottom-5 -left-5 -right-5 bg-black bg-opacity-60 absolute h-2/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 pb-16 px-4 md:px-16 xl:px-64 w-full">
        <div className="flex gap-4 mb-1">
          {movieDirectors.map((director: any) => (
            <span className="font-semibold text-xs md:text-md lg:text-xl">
              {director.name}
            </span>
          ))}
        </div>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase">
          {movieData.title}
        </h1>
        <div className="gap-2 flex mt-4">
          {movieData.genres.map((genre: any) => (
            <span className="text-xs md:text-sm lg:text-base rounded bg-gray-500 border px-2 py-1 bg-opacity-60">
              {genre.name}
            </span>
          ))}
        </div>
      </div>
      <div className="-left-3 -right-3 -bottom-2 bg-black absolute h-3 blur-sm -z-20"></div>
    </header>
  );
}
