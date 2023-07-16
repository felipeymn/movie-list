import Image from "next/image";
import Link from "next/link";

export default function MoviePoster({
  title,
  id,
  key,
  releaseDate,
  posterPath,
}: any) {
  return (
    <div>
      {/* <h1>{title}</h1>
      <p>
        {new Date(releaseDate).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>*/}
      <Link href={`/movie/${id}`}>
        <Image
          src={process.env.IMAGE_URL + posterPath}
          width={300}
          height={300}
          alt={title + " Poster"}
          className="rounded-md"
        />
      </Link>
    </div>
  );
}
