"use client";
import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";

export default function PaymentSucces() {
  const CloseObject = () => {
    document.querySelector("#paymentSuccess").classList.add("hidden");
  };

  return (
    <div
      id="paymentSuccess"
      className="fixed left-0 right-0 top-0 z-30 m-auto flex hidden h-full w-full max-w-[425px] items-center justify-center bg-[#0006159d]"
    >
      <div className="m-6 rounded-3xl bg-putih p-8">
        <HiBadgeCheck color="#009933" size={100} className="m-auto" />
        <p className="py-4 text-center text-3xl font-bold text-hijau">
          Payment Successfull!!
        </p>
        <p className="mb-8 text-center text-sm">
          Berhasil melakukan pembayaran dan pemesanan hotel
        </p>
        <Link href="./ticket">
          <div className="my-2 rounded-full bg-hijau p-3">
            <p className="text-center text-putih">Lihat Tiket</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div
            className="rounded-full bg-hijau2 p-3"
            //   onClick={CloseObject}
            //   onKeyPress={CloseObject}
            //   role="button"
            //   tabIndex="0"
          >
            <p className="text-center text-hijau">Kembali ke Beranda</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
