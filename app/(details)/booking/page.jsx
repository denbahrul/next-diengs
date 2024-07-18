import Link from 'next/link';
import DatePicker from '@/app/ui/booking/date-picker';
import NumberOfGuest from '@/app/ui/booking/number-of-guest';
import RoomName from '@/app/ui/booking/room-name';
import ReservationName from '@/app/ui/booking/reservation-name';
import TopNav from '@/app/ui/top-nav';

export default function BookPage() {
  return (
    <div className="max-w-[420px] mx-auto">
      <TopNav title={"Form Reservasi"}/>
      <div className="mx-6 bg-putih">
        <RoomName/>
        <DatePicker/>
        <NumberOfGuest/>
        <ReservationName/>
      </div>
      <div className="p-3 pb-4 mt-8 bg-putih justify-betweenw-6xl mx-auto">
        <p className="mb-3 text-center font-bold text-md text-hitam">Total: Rp.700.000</p>
        <Link href="payment/payment-method">
          <div className="bg-hijau rounded-full mb-5 mt-2 py-3 px-10 shadow-hijau shadow-sm">
            <p className="text-putih text-center text-sm">Selanjutya</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
