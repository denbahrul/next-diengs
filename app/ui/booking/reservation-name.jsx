export default function ReservationName() {
    return (
        <div>
            <p className="text-sm font-bold mt-8 mb-2">Nama Reservasi</p>
            <form>
                <input className="bg-[#f7f7f7] mb-4 py-4 px-5 w-full rounded-lg text-sm focus:bg-[#dfffea] focus:ring-1 focus:ring-hijau focus:outline-none" type="text" name="" id="email" placeholder="Nama" required/>
                <input className="bg-[#f7f7f7] py-4 px-5 w-full rounded-lg text-sm focus:bg-[#dfffea] focus:ring-1 focus:ring-hijau focus:outline-none" type="text" name="" id="email" placeholder="No. WhatsApp" required/>
            </form>
        </div>
    )
}