import Link from 'next/link';
import { BsArrowLeftShort } from 'react-icons/bs';

export default function PaymentHeader() {
  return (
    <div>
      <div className="flex p-4 ">
        <Link href="homestay">
          <div className="p-0.5 rounded-full opacity-90">
            <BsArrowLeftShort color="#000" size={32} />
          </div>
        </Link>
        <p className="py-1 pl-3 text-hitam text-lg font-bold text-center">Pembayaran</p>
        <div className="flex-none p-0.5 rounded-full opacity-0">
          <BsArrowLeftShort color="#264C86" size={32} />
        </div>
      </div>
    </div>
  );
}
