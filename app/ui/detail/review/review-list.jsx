import { HiStar } from 'react-icons/hi';
import Review from './review';

export default function ReviewList() {
  return (
    <section className="relative z-10 bg-putih px-5">
      <div className="my-4 flex justify-between">
        <div className="flex justify-between">
          <p className="text-md mr-2 font-bold lg:text-xl">Ulasan</p>
          <HiStar color="#FFC700" size={20} />
          <p className="text-sm font-bold text-hijau mx-1">4.3</p>
          <p className="text-xs mt-0.5 font-normal text-abu2">(20 Ulasan)</p>
        </div>
        <p className="text-xs font-semibold text-hijau">Lihat Semua</p>
      </div>
      <div className="my-4">
        <Review />
        <Review />
        <Review />
      </div>
    </section>
  );
}
