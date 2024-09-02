import { HiOutlineBookmark } from "react-icons/hi2";
import Image from "next/image";
export default function BigCard({ name, image, location, price, rating }) {
  return (
    <>
      <div className="relative mx-3 aspect-[3/4] w-72">
        {/* <Image
          className="m-auto aspect-[3/4] w-full rounded-[40px] object-cover brightness-[55%]"
          src="/homestay.png" //{image}
          width={0}
          height={0}
          sizes="100vw"
          alt="Picture of the author"
        /> */}
        <img
          src={image}
          alt=""
          className="m-auto aspect-[3/4] w-full rounded-[40px] object-cover brightness-[55%]"
        />
        <div className="absolute right-8 top-8 rounded-full bg-hijau p-1">
          <p className="px-2 py-1 text-xs text-putih">&#9733; {rating}</p>
        </div>
        <div className="absolute bottom-8 left-8 right-8">
          <p className="text-lg font-bold text-putih">{name}</p>
          <p className="text-base text-putih">{location}</p>
          <div className="flex flex-row justify-between">
            <p className="text-putih">
              <span className="text-lg font-bold">${price}</span>
              <span className="text-sm">/ per night</span>
            </p>
            <HiOutlineBookmark className="text-putih" size={24} />
          </div>
        </div>
      </div>
    </>
  );
}
