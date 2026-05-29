
function PhotoCard({ photo }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={photo.author}
        className="w-full h-48 object-cover"
      />
      <div className="p-2 flex justify-between items-center">
        <p className="text-sm font-medium truncate">{photo.author}</p>
        <button>❤️</button>
      </div>
    </div>
  );
}

export default PhotoCard;