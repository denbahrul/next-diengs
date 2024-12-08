"use client";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import HeaderRegister from "@/app/ui/auth/Verification/HeaderRegister";
import useInput from "@/hooks/useInput";

export default function VerificationCode() {
  const [code, onCodeChange] = useInput("");

  return (
    <>
      <HeaderRegister title="Kode Verifikasi" />
      <div className="yp-6 container m-auto w-96 rounded-md">
        <div className="mx-10 mt-10">
          <p className="mb-2 text-center font-semibold">
            Masukkan Kode Verifikasi
          </p>
          <p className="text-center text-sm text-abu2">
            Kode Verifikasi telah dikirim melalui e-mail ke diengs@email.com
          </p>
        </div>
        <div className="mx-auto mb-8 mt-4 w-60">
          <input
            className="form-input w-full border-x-0 border-b-2 border-t-0 border-hijau p-3 text-center text-2xl font-bold focus:border-hijau focus:outline-none focus:ring-0"
            type="number"
            name=""
            id="code"
            placeholder=""
            value={code}
            onChange={onCodeChange}
          />
        </div>
        <div className="flex place-content-center">
          <p className="mr-1 text-center text-sm text-abu2">
            Tidak menerima kode?
          </p>
          <Link href="/register/user">
            <p className="text-center text-sm font-medium text-hijau">
              Kirim ulang
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
