'use client';

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

export default function NumberOfGuest() {
  const [guestCount, setGuestCount] = useState(0);

  const increaseGuestCount = () => {
    setGuestCount(guestCount + 1);
  }

  const decraseGuestCount = () => {
    if (guestCount > 0) {
      setGuestCount(guestCount - 1);
    }
  }

  return (
    <div>
    <p className="text-sm font-bold mt-4 mb-2">Jumlah Tamu</p>
    <div className="p-4 rounded-2xl border-[1px] border-biru3">
      <div className="flex py-2.5 justify-center gap-8">
        <div className="bg-hijau2 p-3 rounded-lg" onClick={decraseGuestCount} role="button">
          <HiMinus size={18} color="#009933" />
        </div>
        <p className="py-2 text-lg inline-block align-middle font-bold">{guestCount}</p>
        <div className="bg-hijau2 p-3 rounded-lg" onClick={increaseGuestCount} role="button"> 
          <HiPlus size={18} color="#009933" />
        </div>
      </div>
    </div>
  </div>
  );
}
