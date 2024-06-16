import { HiStar } from 'react-icons/hi';
import Review from './review';

export default function ReviewList() {
  return (
    <section className="relative z-10 bg-putih px-3 pt-8">
      <div className="my-4 flex justify-between">
        <h3 className="text-md font-bold lg:text-xl">Ulasan</h3>
        <p className="text-xs font-medium text-biru">Lihat Semua</p>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <HiStar color="#FFC700" size={30} />
          <p className="mx-1 pt-0.5 text-lg font-bold">4.3</p>
          <p className="py-2 text-xs font-normal text-abu2">(20 Ulasan)</p>
        </div>
        <p className="my-1 rounded-md bg-abu p-1 px-3 text-xs font-normal">Sangat Bagus</p>
      </div>
      <div className="my-4 divide-y divide-abu">
        <Review />
        <Review />
        <Review />
      </div>
    </section>
  );
}
