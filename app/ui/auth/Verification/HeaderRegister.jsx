import Link from "next/link";
import { BsArrowLeftShort } from 'react-icons/bs';

export default function HeaderRegister() {
    return (
      <div className="border-b-[1px] border-hijau">
        <div className="py-3 m-auto w-96 flex ">
          <Link href="/register">
            <div className="p-0.5 rounded-full opacity-9">
              <BsArrowLeftShort size={32} />
            </div>
          </Link>
          <p className="text-lg font-bold pl-2 pt-1 text-center grow">Metode Verifikasi</p>
          <div className="p-0.5 rounded-full opacity-0">
            <BsArrowLeftShort size={32} />
          </div>
        </div>
      </div>
    )
}