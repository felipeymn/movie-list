export default function InfoCard({ title, data }) {
  return (
    <div className="relative w-36 md:w-48 lg:w-56 py-8 md:py-12 shrink-0">
      <h2 className="md:absolute text-center uppercase font-semibold text-gray-400 text-xs md:-rotate-90 opacity-80 md:translate-y-1/2 md:-left-1">
        {title}
      </h2>
      <p className="md:ml-4 text-sm md:text-xl lg:text-2xl font-bold text-center">
        {data}
      </p>
      <div className="backdrop-blur-sm bg-zinc-500/30 absolute h-full w-full bottom-0 left-0 rounded-2xl -z-10"></div>
    </div>
  );
}
