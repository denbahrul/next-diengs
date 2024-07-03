"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

function ConfirmCancelBookingModal({ isOpen, closeModalHandler, id_booking }) {
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
        <p className="mb-4 text-center text-lg font-extrabold text-merah">
          Cancel Booking?
        </p>
        <p className="mt-8 text-center text-base font-semibold">
          Are you sure want to cancel this booking?
        </p>
        <p className="my-2 text-center text-xs font-thin text-abu2">
          Only 80% of the money you can refund from your payment according to
          our refund policy.
        </p>
        <div className="flex flex-row-reverse justify-between">
          <Link
            //change double quotes to backtick later
            href="/orders/cancel/${id_booking}"
            className="my-3 ml-2 w-1/2"
          >
            <button className="w-full rounded-3xl bg-hijau p-4 text-sm font-medium text-hijau2 shadow-lg shadow-hijau2">
              Yes, Continue
            </button>
          </Link>
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

export default function CancelBookingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={openModalHandler}>
        <button className="w-full rounded-full border-2 border-hijau p-[6px] text-sm text-hijau">
          Cancel Order
        </button>
        {/* <p className="my-auto"> </p> */}
      </div>
      <ConfirmCancelBookingModal
        isOpen={isOpen}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
}
