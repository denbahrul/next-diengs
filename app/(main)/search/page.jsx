import { HiOutlineFilter, HiOutlineSearch } from "react-icons/hi";
export default function Favorite() {
  return (
    <>
      <header className="relative m-6 flex items-center">
        <HiOutlineSearch scale={24} className="absolute left-4 text-hijau" />
        <input
          type="text"
          className="w-full rounded-xl bg-abu3 p-4 pl-10 pr-10 text-sm text-abu focus:bg-hijau2 focus:text-hitam focus:outline-hijau"
          placeholder="Search"
          autoFocus
        />
        <HiOutlineFilter scale={24} className="absolute right-4 text-hijau" />
      </header>
      <section></section>
    </>
  );
}
