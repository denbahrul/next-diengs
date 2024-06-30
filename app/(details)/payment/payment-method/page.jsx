import Link from "next/link";
import PaymentHeader from "@/app/ui/payment/payment-header";
import PaymentMethod from "@/app/ui/payment/payment-method";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

export default function Payment() {
  return (
    <div className="relative max-w-[420px] h-screen mx-auto">
      <PaymentHeader/>
      <div className="mx-6">
        <p className="font-semibold text-base mb-4">Metode Pembayaran</p>
        <PaymentMethod img="../logo-dana.png" name="Dana" icon={<IoMdRadioButtonOn size={24} color="#009933"/>}/>
        <PaymentMethod img="../logo-dana.png" name="Gopay" icon={<IoMdRadioButtonOff size={24} color="#009933"/>}/>
        <PaymentMethod img="../BANK BRI.png" name="BRI Virtual Account" icon={<IoMdRadioButtonOff size={24} color="#009933"/>}/>
        <PaymentMethod img="../logo-dana.png" name="Mandiri Virtual Account" icon={<IoMdRadioButtonOff size={24} color="#009933"/>}/>
        <PaymentMethod img="../logo-dana.png" name="Alfamart" icon={<IoMdRadioButtonOff size={24} color="#009933"/>}/>
        <Link href="/payment">
          <div className="absolute inset-x-0 bottom-0 bg-hijau rounded-full mx-6 mb-5 mt-2 py-3 px-10 shadow-hijau shadow-sm">
            <p className="text-putih text-center text-sm">Selanjutya</p>
          </div>
        </Link>
      </div>
    </div>
  );
}