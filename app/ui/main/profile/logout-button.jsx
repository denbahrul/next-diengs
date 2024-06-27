"use client";
import { HiOutlineLogout } from "react-icons/hi";
import { useState } from "react";
import clsx from "clsx";

function ConfirmLogoutModal({ isOpen, closeModalHandler }) {
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
          "fixed bottom-0 left-1/2 w-full max-w-[420px] -translate-x-1/2 transform rounded-t-3xl bg-putih p-4 transition-transform duration-300",
          {
            "translate-y-full": !isOpen,
            "translate-y-0": isOpen,
          },
        )}
      >
        <p className="my-4 text-center text-lg font-extrabold text-merah">
          Logout
        </p>
        <p className="mt-8 text-center text-base font-semibold">
          Are you sure you want to logout?
        </p>
        <div className="flex flex-col">
          <button className="mt-4 rounded-3xl bg-hijau p-3 text-sm font-medium text-hijau2">
            Yes, Logout
          </button>
          <button
            onClick={closeModalHandler}
            className="my-3 rounded-3xl bg-hijau2 p-3 text-sm font-medium text-hijau"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LogoutButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModalHandler} className="m-6 flex text-merah">
        <HiOutlineLogout className="mr-4" size={24} />
        <p className="my-auto">Logout</p>
      </button>
      <ConfirmLogoutModal
        isOpen={isOpen}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
}
