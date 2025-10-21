import { FaRegBookmark, FaRegEye, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    published_date,
    thumbnail_url,
    details,
    others,
    tags,
  } = news;

  // Format date
  const date = news.author.published_date
    ? new Date(news.author.published_date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No date";

  return (
    <div className=" rounded-lg shadow-sm bg-white p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt="author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author?.name}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-xl">
          <FaRegBookmark className="cursor-pointer" />
          <FiShare2 className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 leading-snug">
        {title}
      </h2>

      {/* Tags (optional) */}
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Image */}
      <img
        src={thumbnail_url}
        alt="news"
        className="w-full h-64 object-cover rounded-md"
      />

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {details.slice(0, 200)}...
      </p>

      <button className="text-orange-500 font-semibold hover:underline">
        Read More
      </button>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 ml-2">{rating.number}</span>
          {others?.is_trending && (
            <span className="ml-2 badge badge-warning uppercase text-xs">
              {rating.badge}
            </span>
          )}
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
