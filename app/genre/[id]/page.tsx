import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies, getPopularMovies } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};
const Genre = async ({ params: { id }, searchParams: { genre } }: Props) => {
  const movies = await getDiscoverMovies(id);
  const popularMovies = await getPopularMovies();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 ">
        <h1 className="text-6xl font-bold px-10">Result for {genre}</h1>
        <MoviesCarousel title={`${genre}`} movies={movies} isVertical />

        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
};

export default Genre;
