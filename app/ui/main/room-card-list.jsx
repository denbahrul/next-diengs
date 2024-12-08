import { HiBookmark } from "react-icons/hi2";
import Image from "next/image";
import UndoBookmarkButton from "./undo-bookmark-button";
import Link from "next/link";

export default function RoomCard({ image }) {
  return (
    <div className="my-4 flex justify-between rounded-2xl bg-putih p-4 shadow-2xl shadow-background">
      <Link href={"/homestay"}>
        <div className="flex gap-3">
          <Image
            className="aspect-square w-3/12 rounded-2xl object-cover"
            src="/homestay.png" //{image}
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of the author"
          />
          <div className="flex w-7/12 flex-col justify-between py-2">
            <p className="font-bold">President Hotel</p>
            <p className="text-xs text-abu2">Paris, France</p>
            <p className="text-xs text-abu2">
              ⭐ <span className="font-bold text-hijau">4.5</span> (4.378
              reviews)
            </p>
          </div>
        </div>
      </Link>
      <div className="flex w-2/12 flex-col justify-between py-2 text-center">
        <p className="leading-none">
          <span className="text-[20px] font-bold text-hijau">$35</span>
          <br />
          <span className="mx-auto -mt-1 text-[10px] text-abu2">/ night</span>
        </p>
        {/* <HiBookmark className="mx-auto text-hijau" size={24} /> */}
        <UndoBookmarkButton />
      </div>
    </div>
  );
}
