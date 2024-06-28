import Image from "next/image";
import UndoBookmarkButton from "./undo-bookmark-button";
export default function RoomCardGrid({ image }) {
  return (
    <>
      <div className="rounded-2xl p-4 shadow-2xl shadow-background">
        <Image
          className="m-auto aspect-[4/3] w-fit rounded-2xl object-cover"
          src="/homestay.png" //{image}
          width={0}
          height={0}
          sizes="100vw"
          alt="Picture of the author"
        />
        <div className="py-2">
          <p className="font-bold">President Mila de Hotel</p>
          <p className="text-xs leading-6 text-abu2">
            ⭐ <span className="font-bold text-hijau">4.5</span> Paris, France
          </p>
        </div>
        <div className="flex w-full justify-between">
          <p className="leading-none">
            <span className="text-[20px] font-bold text-hijau">$35</span>
            <span className="mx-auto -mt-1 text-[10px] text-abu2">/night</span>
          </p>
          <UndoBookmarkButton />
        </div>
      </div>
    </>
  );
}
