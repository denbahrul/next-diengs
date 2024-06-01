import Link from 'next/link';
// import { HiStar } from 'react-icons/hi';
// import { TiLocation } from 'react-icons/ti';

export default function HomeStayCard({ id, name, rating, location, price, discount, totalOrder, homestayImage }) {
  let beforeDiscount = price + price * (discount / 100);
  if (discount == null) {
    beforeDiscount = price;
  }
  return (
    <div className="mx-auto flex w-full cursor-pointer rounded-md p-3 transition-all hover:shadow-lg lg:h-fit lg:w-full">
      <div className="w-4/12 rounded-md bg-[url('https://source.unsplash.com/random/400×300/?house')] bg-cover bg-center" />
      <div className="m-auto w-8/12 p-3 lg:w-7/12">
        <h2 className="text-md font-medium leading-6">{name}</h2>
        <div className="my-auto flex">
          {/* <HiStar className="my-auto text-kuning" /> */}
          <p>⭐</p>
          <p className="pl-1 text-xs font-thin leading-6 text-abu2">{rating}</p>
          <p className="my-auto px-1 text-abu2">•</p>
          {/* <TiLocation className="my-auto text-red-500" /> */}
          <p className="pl-1 text-xs font-thin leading-6 text-abu2">📍 {location}</p>
        </div>
        <div>
          <p
            className={`text-base font-bold leading-6 text-hijau ${price == null ? 'hidden' : ''}`}>
            Rp {price}/<span className="text-xs font-extralight text-abu2">malam</span>
          </p>
          <p className={`text-md font-medium text-black ${totalOrder == null ? 'hidden' : ''}`}>
            Total Harga:
            <span className="pl-1 text-base font-bold leading-6 text-hijau">Rp {totalOrder}</span>
          </p>

          <p className={`text-xs ${discount == null ? 'hidden' : ''}`}>
            <span className="mr-[2px] rounded-sm bg-yellow-[20] px-[3px] py-[2px] font-semibold text-abu2">
              {discount}%
            </span>
            <span className="text-abu2 line-through">
              {beforeDiscount}
              /malam
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
