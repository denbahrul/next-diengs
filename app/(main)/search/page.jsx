"use client";
import Filters from "@/app/ui/main/search/filters";
import { HiOutlineFilter, HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
    event.preventDefault();
  };

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
        <HiOutlineFilter
          onClick={openModalHandler}
          scale={24}
          className="absolute right-4 cursor-pointer text-hijau"
        />
        <Filters isOpen={isOpen} closeModalHandler={closeModalHandler} />
      </header>
      <section></section>
    </>
  );
}
