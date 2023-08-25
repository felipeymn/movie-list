import Image from "next/image";

export default function Cast({ profilePicPath, name }: any) {
  return (
    <div className="flex flex-col items-center justify-between gap-2 w-32 flex-shrink-0">
      <div className="relative h-28 w-28">
        <Image
          src={process.env.IMAGE_URL + profilePicPath}
          fill={true}
          alt={name + " profile picture"}
          className="rounded-full object-cover"
        />
      </div>
      <h4 className="text-sm font-medium text-zinc-100 text-center text-ellipsis overflow-hidden whitespace-nowrap inline-block w-full">
        {name}
      </h4>
    </div>
  );
}
