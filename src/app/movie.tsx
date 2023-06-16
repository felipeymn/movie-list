import Image from "next/image";
import Link from "next/link";

export default function Movie({ title, id, key, release_date, poster_path }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{release_date}</p>
      <Link href={`/${id}`}>
        <Image
          src={process.env.IMAGE_URL + poster_path}
          width={800}
          height={800}
          alt={title + " Poster"}
        />
      </Link>
    </div>
  );
}
