import Language from "@/components/Language";
import Video from "@/components/Video";
import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typing";
import Image from "next/image";

const getMovieDetails = async (id: Movie) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjQzZTI1NTdhMjY4OWYzYzA4NDllNTUxY2FiNmVjMSIsInN1YiI6IjYzMjgyZTE5MjRmMmNlMDA3ZWIwYWUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wykWeegoLXHR0VcvgfroT6vu8jlh40R1a-dB42jfTuI",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

const getYoutubeTrailer = async (id: any) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjQzZTI1NTdhMjY4OWYzYzA4NDllNTUxY2FiNmVjMSIsInN1YiI6IjYzMjgyZTE5MjRmMmNlMDA3ZWIwYWUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wykWeegoLXHR0VcvgfroT6vu8jlh40R1a-dB42jfTuI",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data.results[0];
};

const page = async ({ params: { id } }: any) => {
  const movie = await getMovieDetails(id);
  const video = await getYoutubeTrailer(id);
  console.log(movie);

  return (
    <div className="container mx-auto my-8 mt-24">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <Image
            src={getImagePath(movie.backdrop_path, true)}
            alt={movie.title}
            width={1920}
            height={1080}
            key={movie.id}
            priority
            className="rounded-md"
          />
        </div>
        <div className="col-span-2">
          <p className="text-lg font-semibold mb-2">
            Genre: {movie?.genres[0].name}
          </p>
          <p className="text-lg font-semibold mb-2">
            {/* Original Language: {movie.original_language} */}
            <Language languageCode={movie.original_language} />
          </p>
          <p className="text-lg font-semibold mb-2">
            Overview: {movie.overview}
          </p>
          <p className="text-lg font-semibold mb-2">
            Release Date: {movie.release_date}
          </p>
          <p className="text-lg font-semibold mb-2">
            Runtime: {movie.runtime} minutes
          </p>
        </div>
      </div>
      <div className="w-full  flex items-center justify-center">
        <Video videoId={video.key} />
      </div>
    </div>
  );
};

export default page;
