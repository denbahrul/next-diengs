import { BsWifi, BsTv, BsCup } from "react-icons/bs";

export default function Facility() {
  return (
    <section className="mx-3">
      <h3 className="text-base font-bold lg:text-xl">Fasilitas</h3>
      <div className="my-3 grid grid-cols-5 gap-3 lg:grid-cols-6">
        <div className="my-2 lg:flex">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau lg:p-2 lg:text-sm">Wifi</p>
        </div>
        <div className="my-2 lg:flex">
          <div className="flex justify-center p-1">
            <BsTv size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau lg:p-2 lg:text-sm">Smart TV</p>
        </div>
        <div className="my-2 lg:flex">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau lg:p-2 lg:text-sm">Wifi</p>
        </div>
        <div className="my-2 lg:flex">
          <div className="flex justify-center p-1">
            <BsCup size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau lg:p-2 lg:text-sm">Teh & Kopi</p>
        </div>
        <div className="my-2 lg:flex">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau lg:p-2 lg:text-sm">Wifi</p>
        </div>
        <div className="my-2 lg:flex">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau lg:p-2 lg:text-sm">Wifi</p>
        </div>
        <div className="my-2 lg:flex">
          <div className="flex justify-center p-1">
            <BsTv size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau lg:p-2 lg:text-sm">Smart TV</p>
        </div>
        <div className="my-2 lg:flex">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau lg:p-2 lg:text-sm">Wifi</p>
        </div>
        <div className="my-2 lg:flex">
          <div className="flex justify-center p-1">
            <BsCup size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau lg:p-2 lg:text-sm">Teh & Kopi</p>
        </div>
        <div className="my-2 lg:flex">
          <div className="flex justify-center p-1">
            <BsWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau lg:p-2 lg:text-sm">Wifi</p>
        </div>
      </div>
    </section>
  );
}
