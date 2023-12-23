import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typing";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link href={`/moviedetails/${movie.id}`}>
      <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg ">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300  dark:to-[#1A1C29]  z-10" />
        <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>
        <p className="absolute z-20 bottom-8 left-5">{movie.id}</p>
        <Image
          className="w-fit lg:min-w-[400px] h-56 object-cover shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
          key={movie.id}
          src={getImagePath(movie.backdrop_path || movie.poster_path)}
          width={1920}
          height={1080}
          alt={movie.title}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
