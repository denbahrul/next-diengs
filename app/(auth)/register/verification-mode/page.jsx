import Link from 'next/link';
import { HiMail } from "react-icons/hi";
import HeaderRegister from '@/app/ui/auth/Verification/HeaderRegister';

export default function VerificationMethod() {
  return (
    <>
      <HeaderRegister title="Mode Verifikasi"/>
      <div className="container m-auto w-96 rounded-md yp-6">
        <div className="m-10">
          <p className="font-semibold mb-2 text-center">Pilih Metode Verifikasi</p>
          <p className="text-sm text-center text-abu2">Pilih salah satu metode dibawah ini untuk mendapatkan kode verifikasi.</p>
        </div>
        <Link href="/register/verification-code">
          <div className="flex px-4 py-3 rounded-lg shadow-md m-4">
            <HiMail color="#009933" size={38} />
            <div className="ml-3">
              <p className="font-semibold text-sm">E-mail ke</p>
              <p className="text-abu2 text-xs">diengsdiengsdiengs@email.com</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
