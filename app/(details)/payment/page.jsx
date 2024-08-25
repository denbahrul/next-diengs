'use client';
import PaymentSucces from "@/app/ui/payment/payment-succes";
import RoomCard from "@/app/ui/main/room-card-list";
import TopNav from "@/app/ui/top-nav";
import Link from "next/link";

export default function Payment() {
  const confirm = () => { document.querySelector("#paymentSuccess").classList.remove("hidden")}
  
  return (
    <div className="relative max-w-[420px] mx-auto bg-putih">
      <TopNav title={"Pembayaran"}/>
      <PaymentSucces/>
      <div className="mx-6">
        <RoomCard/>
        <div className="my-4 bg-putih rounded-2xl p-4 shadow-2xl shadow-background">
        <div className="flex justify-between mb-4">
            <p className="text-sm text-abu2">Type Kamar</p>
            <p className="text-sm font-bold">Bintang Standart Room</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-sm text-abu2">Check in</p>
            <p className="text-sm font-bold">12 September 2024</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-sm text-abu2">Check out</p>
            <p className="text-sm font-bold">15 September 2024</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-abu2">Tamu</p>
            <p className="text-sm font-bold">3</p>
          </div>
        </div>

        <div className="my-4 bg-putih rounded-2xl p-4 shadow-2xl shadow-background">
          <div className="flex justify-between mb-4">
            <p className="text-sm text-abu2">3 Malam</p>
            <p className="text-sm font-bold">Rp. 1.500.000</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-sm text-abu2">PPN (10%)</p>
            <p className="text-sm font-bold">Rp. 15.000</p>
          </div>
          <div className="flex justify-between border-t-[1px] border-biru3 pt-4">
            <p className="text-sm text-abu2">Total</p>
            <p className="text-sm font-bold">Rp. 1.515.000</p>
          </div>
        </div>

        <div className="my-4 bg-putih rounded-2xl p-4 flex justify-between shadow-2xl shadow-background">
            <div className="flex justify-between">
              <img src="./BANK BRI.png" alt="logo" className="w-10 mr-2" />
              <p className="text-sm font-bold">BRI Virtual Account</p>
            </div>
            <Link href="payment/payment-method">
              <p className="text-hijau text-sm">Ubah</p>
            </Link>
        </div>

        <div className="my-4 bg-putih rounded-2xl p-4 shadow-2xl shadow-background">
          <div className="flex justify-between pb-3 border-b-[1px] border-biru3">
            <div>
              <p className="text-sm  font-bold">Bayar sebelum</p>
              <p className="text-xs">Sabtu, 10 Februari 2024 15:33</p>
            </div>
            <p className="font-bold text-xs text-merah mt-2">2:23:40</p>
          </div>
          <div className="flex justify-between pt-4">
            <div>
              <p className="text-xs">Nomor Virtual Account</p>
              <p className="text-sm font-bold">AA081234567890</p>
            </div>
            <p className="text-hijau text-sm underline mt-2">Salin</p>
          </div>
          <div className="flex justify-between pt-4">
            <div>
              <p className="text-xs">Total Tagihan</p>
              <p className="text-sm font-bold">AA081234567890</p>
            </div>
            <p className="text-hijau text-sm underline mt-2">Salin</p>
          </div>
        </div>
        <div
          className="bg-hijau rounded-full mb-5 mt-2 py-3 px-10 shadow-hijau shadow-sm"
          onClick={confirm}
          onKeyPress={confirm}
          role="button"
          tabIndex="0"
          >
          <p className="text-putih text-center text-sm">Konfirmasi Pembayaran</p>
        </div>
      </div>
    </div>
  );
}