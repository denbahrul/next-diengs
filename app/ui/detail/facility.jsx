import { FaWifi, FaCoffee, FaTv } from "react-icons/fa";

export default function Facility() {
  return (
    <section className="mx-5">
      <h3 className="text-base font-bold">Fasilitas</h3>
      <div className="my-3 grid grid-cols-5 gap-3">
        <div className="my-2">
          <div className="flex justify-center p-1">
            <FaWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau">Wifi</p>
        </div>
        <div className="my-2">
          <div className="flex justify-center p-1">
            <FaTv size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau">Smart TV</p>
        </div>
        <div className="my-2">
          <div className="flex justify-center p-1">
            <FaWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau">Wifi</p>
        </div>
        <div className="my-2">
          <div className="flex justify-center p-1">
            <FaCoffee size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau">Teh & Kopi</p>
        </div>
        <div className="my-2">
          <div className="flex justify-center p-1">
            <FaWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau">Wifi</p>
        </div>
        <div className="my-2">
          <div className="flex justify-center p-1">
            <FaWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau">Wifi</p>
        </div>
        <div className="my-2">
          <div className="flex justify-center p-1">
            <FaTv size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau">Smart TV</p>
        </div>
        <div className="my-2">
          <div className="flex justify-center p-1">
            <FaWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau">Wifi</p>
        </div>
        <div className="my-2">
          <div className="flex justify-center p-1">
            <FaCoffee size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau">Teh & Kopi</p>
        </div>
        <div className="my-2">
          <div className="flex justify-center p-1">
            <FaWifi size={25} color="#009933" />
          </div>
          <p className="text-center text-xs text-hijau">Wifi</p>
        </div>
      </div>
    </section>
  );
}
