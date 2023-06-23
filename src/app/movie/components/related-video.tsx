export default function RelatedVideo({ ytId, title }: any) {
  return (
    <iframe
      src={"https://www.youtube.com/embed/" + ytId}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
