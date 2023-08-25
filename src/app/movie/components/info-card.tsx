export default function InfoCard({ title, data }: any) {
  return (
    <div className="relative w-28 shrink-0 py-6 md:w-48 md:py-12 lg:w-56">
      <h2 className="text-center text-xs font-semibold uppercase text-gray-400 opacity-80 md:absolute md:-left-1 md:translate-y-1/2 md:-rotate-90">
        {title}
      </h2>
      <p className="text-center text-xs font-bold md:ml-4 md:text-xl lg:text-2xl">
        {data}
      </p>
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full rounded-2xl bg-zinc-500/30 backdrop-blur-sm"></div>
    </div>
  );
}
