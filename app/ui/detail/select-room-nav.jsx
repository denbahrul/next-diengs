export default function SelectRoomNav() {
    return (
      <div className="fixed bottom-0 left-0 right-0 mx-auto flex justify-between rounded-2xl bg-putih px-5 pb-4 pt-2 max-w-[420px]">
        <div className="grow">
          <p className="text-xs text-abu2">Harga Mulai</p>
          <div className="flex">
            <p className="font-bold text-hijau">Rp. 350.000</p>
            <p className="pt-1 text-xs text-abu2">/malam</p>
          </div>
        </div>
        <a href="#kamar" className="my-0 rounded-full bg-hijau w-[50%] flex items-center justify-center">
          <p className="text-xs font-semibold text-putih text-center">Pilih Kamar</p>
        </a>
      </div>
    );
  }
  