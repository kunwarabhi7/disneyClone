import Image from "next/image";
import Link from "next/link";
import { DarkThemeToggler } from "./DarkThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropDown from "./GenreDropDown";

const Header = () => {
  return (
    <header className="fixed w-full z-50 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="https://assets.stickpng.com/images/58428d79a6515b1e0ad75ab2.png"
          alt="disney logo"
          width={120}
          height={100}
          className="cursor-pointer  dark:invert "
        />
      </Link>
      <div className="flex space-x-2 items-center">
        <GenreDropDown />
        <SearchInput />
        <DarkThemeToggler />
      </div>
    </header>
  );
};

export default Header;
