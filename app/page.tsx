import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main>
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <CarouselBannerWrapper />
        <MoviesCarousel title="Upcoming" movies={upcomingMovies} />
        <MoviesCarousel title="Top Rated" movies={topRatedMovies} />
        <MoviesCarousel title="Popular" movies={popularMovies} />
      </div>
    </main>
  );
}
