import Link from "next/link";
import PaymentHeader from "@/app/ui/payment/payment-header";
import PaymentMethod from "@/app/ui/payment/payment-method";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { HiStar } from "react-icons/hi";

export default function Payment() {
  return (
    <div className="relative max-w-[420px] h-screen mx-auto bg-background">
      <PaymentHeader/>
      <div className="mx-6">
        <div className="my-3 flex bg-putih rounded-xl p-4">
          <div className="w-16 h-16 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover" />
            <div className="ml-4 mt-0.5">
              <p className="text-sm font-bold">Homestay Langit Senja</p>
              <p className="text-xs font-medium text-abu2">Bintang Standart Room</p>
              <div className="flex mt-2">
                <p className="text-xs font-bold text-hijau">Rp.500.000</p>
                <p className="text-xs text-abu2">/malam</p>
              </div>
            </div>
          </div>
        <div className="my-4 bg-putih rounded-xl p-4">
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

        <div className="my-4 bg-putih rounded-xl p-4">
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

        <div className="my-4 bg-putih rounded-xl p-4 flex justify-between">
            <div className="flex justify-between">
              <img src="./BANK BRI.png" alt="logo" className="w-10 mr-2" />
              <p className="text-sm font-bold">BRI Virtual Account</p>
            </div>
            <p className="text-hijau text-sm">Ubah</p>
        </div>

        <div className="my-4 bg-putih rounded-xl p-4">
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
        <Link href="/payment">
          <div className="absolute inset-x-0 bottom-0 bg-hijau rounded-full mx-6 mb-5 mt-2 py-3 px-10 shadow-hijau shadow-sm">
            <p className="text-putih text-center text-sm">Selanjutya</p>
          </div>
        </Link>
      </div>
    </div>
  );
}