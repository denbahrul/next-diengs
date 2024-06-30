'use client';
import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";

export default function PaymentSucces() {
    const CloseObject = () => {
        document.querySelector("#paymentSuccess").classList.add("hidden")
    };

    return (
        <div id="paymentSuccess" className="fixed max-w-[425px] hidden m-auto left-0 right-0 top-0 z-30 flex  h-full w-full items-center justify-center bg-[#0006159d]">
            <div className=" m-6 rounded-3xl bg-putih p-8">
                <HiBadgeCheck color="#009933" size={100} className="m-auto" />
                <p className="text-3xl text-hijau text-center font-bold py-4">Payment Successfull!!</p>
                <p className="mb-8 text-sm text-center">Berhasil melakukan pembayaran dan pemesanan hotel</p>
                <Link href="./ticket">
                    <div className="bg-hijau p-3 rounded-full my-2">
                        <p className="text-putih text-center">Lihat Tiket</p>
                    </div>
                </Link>
                <div 
                className="bg-hijau2 p-3 rounded-full"
                onClick={CloseObject}
                onKeyPress={CloseObject}
                role="button"
                tabIndex="0"
                >
                    <p className="text-hijau text-center">Batal</p>
                </div>
            </div>
        </div>
    )
}