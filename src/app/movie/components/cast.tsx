import Image from "next/image";

export default function Cast({ profilePicPath, name }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="h-14 w-14 relative">
        <Image
          src={process.env.IMAGE_URL + profilePicPath}
          fill={true}
          alt={name + " profile picture"}
          className="rounded-full object-cover"
        />
      </div>
      <h4 className="text-sm font-semibold text-zinc-100">{name}</h4>
    </div>
  );
}
