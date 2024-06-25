import { HiOutlineKey, HiOutlineExclamationCircle } from 'react-icons/hi';

export default function Rules() {
  return (
    <section className="mx-5">
      <h3 className="text-md pb-4 pt-8 font-bold lg:text-xl">Ketentuan</h3>
      <div className="flex justify-between rounded-md border border-abu2 px-8 py-4">
        <div className="mx-auto text-center">
          <p className="font-sm">Check-in</p>
          <p className="text-xs font-light text-abu2">Mulai 14.00 WIB</p>
        </div>
        <div className="mx-auto py-2">
          <HiOutlineKey size={25} />
        </div>
        <div className="mx-auto text-center">
          <p className="font-sm">Check-out</p>
          <p className="text-xs font-light text-abu2">Sebelum 12.00 WIB</p>
        </div>
      </div>
      <div className="mt-4 flex px-1">
        <div className="pt-1">
          <HiOutlineExclamationCircle size={20} />
        </div>
        <p className="ml-3 text-sm">
          Dilarang membawa dan mengonsumsi obat-obatan terlarang di dalam Homestay.
        </p>
      </div>
      <div className="mt-4 flex px-1">
        <div className="pt-1">
          <HiOutlineExclamationCircle size={20} />
        </div>
        <p className="ml-2 text-sm">
          Dilarang membawa dan mengonsumsi obat-obatan terlarang di dalam Homestay.
        </p>
      </div>
    </section>
  );
}
