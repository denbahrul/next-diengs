import Link from "next/link";
import { FaWifi, FaCoffee, FaTv } from "react-icons/fa";

export default function CardRoom() {
  return (
    <div className="mb-8 mr-2 w-64 min-w-[80%] snap-center rounded-2xl p-3 shadow-2xl shadow-background">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl bg-gray-200 group-hover:opacity-75">
        <img
          src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="px-1">
        <p className="mt-2 font-semibold">Bintang Standart Room</p>
        <p className="text-xs font-normal">2 bed • max 4 tamu per kamar</p>
        <div className="mt-1 grid grid-cols-4 pr-5">
          <div className="my-1 flex flex-row">
            <div className="justify-center px-1">
              <FaWifi size={15} color="#009933" />
            </div>
            <p className="pl-1 text-center text-xs font-light text-hijau">Wifi</p>
          </div>
          <div className="my-1 flex flex-row">
            <div className="justify-center px-1">
              <FaTv size={15} color="#009933" />
            </div>
            <p className="px-1 text-center text-xs font-light text-hijau">TV</p>
          </div>
          <div className="my-1 flex flex-row">
            <div className="justify-center px-1">
              <FaCoffee size={15} color="#009933" />
            </div>
            <p className="px-1 text-center text-xs font-light text-hijau">Kopi</p>
          </div>
          <div className="my-1 flex flex-row">
            <div className="justify-center px-1">
              <FaWifi size={15} color="#009933" />
            </div>
            <p className="px-1 text-center text-xs font-light text-hijau">Wifi</p>
          </div>
        </div>
        <p className="mb-1 px-1 text-left text-xs font-light text-hijau underline lg:mb-4">
          Semua fasilitas..
        </p>
        <div className="flex pt-2">
          <p className="font-bold text-hijau">Rp. 350.000</p>
          <p className="pt-0.5 text-sm">/malam</p>
        </div>
      </div>
      <Link href="booking">
        <div className="mt-2 rounded-full bg-hijau p-2">
          <p className="text-center text-xs font-medium text-putih">Ajukan Sewa</p>
        </div>
      </Link>
    </div>
  );
}
