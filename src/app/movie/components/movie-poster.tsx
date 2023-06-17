import Image from "next/image";
import Link from "next/link";

export default function MoviePoster({
  title,
  id,
  key,
  releaseDate,
  posterPath,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{releaseDate}</p>
      <Link href={`/movie/${id}`}>
        <Image
          src={process.env.IMAGE_URL + posterPath}
          width={800}
          height={800}
          alt={title + " Poster"}
        />
      </Link>
    </div>
  );
}
