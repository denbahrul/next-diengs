import Link from "next/link";
import PaymentMethod from "@/app/ui/payment/payment-method";
import TopNav from "@/app/ui/top-nav";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

export default function Payment() {
  return (
    <div className="relative mx-auto h-screen max-w-[420px]">
      <TopNav title={"Pembayaran"} />
      <div className="mx-6">
        <p className="mb-4 text-base font-semibold">Metode Pembayaran</p>
        <PaymentMethod
          img="../logo-dana.png"
          name="Dana"
          icon={<IoMdRadioButtonOn size={24} color="#009933" />}
        />
        <PaymentMethod
          img="../logo-dana.png"
          name="Gopay"
          icon={<IoMdRadioButtonOff size={24} color="#009933" />}
        />
        <PaymentMethod
          img="../BANK BRI.png"
          name="BRI Virtual Account"
          icon={<IoMdRadioButtonOff size={24} color="#009933" />}
        />
        <PaymentMethod
          img="../logo-dana.png"
          name="Mandiri Virtual Account"
          icon={<IoMdRadioButtonOff size={24} color="#009933" />}
        />
        <PaymentMethod
          img="../logo-dana.png"
          name="Alfamart"
          icon={<IoMdRadioButtonOff size={24} color="#009933" />}
        />
        <div className="fixed inset-x-0 bottom-0 mx-auto mb-4 mt-2 max-w-[412px] px-4">
          <Link href="/payment">
            <div className="rounded-full bg-hijau px-10 py-3 shadow-sm shadow-hijau">
              <p className="text-center text-sm text-putih">Selanjutnya</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
