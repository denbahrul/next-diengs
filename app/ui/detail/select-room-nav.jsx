export default function SelectRoomNav() {
    return (
      <div className="fixed bottom-0 left-0 right-0 mx-auto flex justify-between bg-putih p-3 pb-5 lg:max-w-6xl">
        <div className="grow">
          <p className="text-xs text-abu2">Harga Mulai</p>
          <div className="flex">
            <p className="font-bold text-hijau">Rp. 350.000</p>
            <p className="pt-0.5 text-sm">/malam</p>
          </div>
        </div>
        <a href="#kamar" className="my-0 rounded-lg bg-hijau py-2.5 px-7">
          <p className="text-sm text-putih">Pilih Kamar</p>
        </a>
      </div>
    );
  }
  