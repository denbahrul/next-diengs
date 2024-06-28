"use client";

import { useState } from "react";
import clsx from "clsx";
import { HiBookmark } from "react-icons/hi2";
import Image from "next/image";

function RoomCard({ image }) {
  return (
    <>
      <div className="my-4 flex rounded-2xl bg-putih p-4">
        <Image
          className="m-auto aspect-square w-3/12 rounded-2xl object-cover"
          src="/homestay.png" //{image}
          width={0}
          height={0}
          sizes="100vw"
          alt="Picture of the author"
        />
        <div className="mx-4 flex w-7/12 flex-col items-start justify-between py-2">
          <p className="font-bold">President Hotel</p>
          <p className="text-xs text-abu2">Paris, France</p>
          <p className="text-xs text-abu2">
            ⭐ <span className="font-bold text-hijau">4.5</span> (4.378 reviews)
          </p>
        </div>
        <div className="flex w-2/12 flex-col justify-between py-2 text-center">
          <p className="leading-none">
            <span className="text-[20px] font-bold text-hijau">$35</span>
            <br />
            <span className="mx-auto -mt-1 text-[10px] text-abu2">/ night</span>
          </p>
          <HiBookmark className="mx-auto text-hijau" size={24} />
        </div>
      </div>
    </>
  );
}

function ConfirmUndoBookmarkModal({ isOpen, closeModalHandler }) {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-10 bg-hitam bg-opacity-70 transition-opacity duration-300",
        {
          "pointer-events-none opacity-0": !isOpen,
          "opacity-100": isOpen,
        },
      )}
    >
      <div
        className={clsx(
          "fixed bottom-0 left-1/2 w-full max-w-[420px] -translate-x-1/2 transform rounded-t-3xl bg-putih p-6 transition-transform duration-300",
          {
            "translate-y-full": !isOpen,
            "translate-y-0": isOpen,
          },
        )}
      >
        <p className="mb-4 text-center text-lg font-extrabold">
          Remove from Bookmark?
        </p>
        <RoomCard />
        <div className="flex flex-row-reverse justify-between">
          <button className="my-3 ml-2 w-1/2 rounded-3xl bg-hijau p-4 text-sm font-medium text-hijau2 shadow-lg shadow-hijau2">
            Yes, Remove
          </button>
          <button
            onClick={closeModalHandler}
            className="my-3 mr-2 w-1/2 rounded-3xl bg-hijau2 p-4 text-sm font-medium text-hijau"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function UndoBookmarkButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={openModalHandler} className="flex text-hijau">
        <HiBookmark className="mx-auto cursor-pointer" size={24} />
        <p className="my-auto"> </p>
      </div>
      <ConfirmUndoBookmarkModal
        isOpen={isOpen}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
}
