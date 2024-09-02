"use client";
import Link from 'next/link';
import { BsArrowLeftShort } from 'react-icons/bs';
import HeaderRegister from '@/app/ui/auth/Verification/HeaderRegister';
import useInput from '@/hooks/useInput';

export default function VerificationCode() {
  const [code, onCodeChange] = useInput('');
  
  return (
    <>
      <HeaderRegister title="Kode Verifikasi"/>
      <div className="container m-auto w-96 rounded-md yp-6">
        <div className="mx-10 mt-10">
          <p className="font-semibold mb-2 text-center">Masukkan Kode Verifikasi</p>
          <p className="text-sm text-center text-abu2">Kode Verifikasi telah dikirim melalui e-mail ke diengs@email.com</p>
        </div>
        <div className="w-60 mx-auto mb-8 mt-4">
          <input className="form-input border-x-0 border-t-0 border-b-2 border-hijau p-3 w-full text-2xl font-bold text-center focus:outline-none" 
            type="number" 
            name="" 
            id="code" 
            placeholder=""
            value={code}
            onChange={onCodeChange}
          />
        </div>
        <div className="flex place-content-center">
          <p className="text-sm text-center text-abu2 mr-1">Tidak menerima kode?</p>
          <Link href="/register/user">
            <p className="text-sm font-medium text-center text-hijau">Kirim ulang</p>
          </Link>
        </div>
      </div>
    </>
  );
}
