const VisorVideo = ({ url }) => {
  return (
    <div className="aspect-video w-full rounded overflow-hidden border">
      <iframe
        src={url}
        title="Video"
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VisorVideo;
