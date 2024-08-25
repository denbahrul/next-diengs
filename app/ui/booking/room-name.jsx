import Link from 'next/link';

export default function RoomName () {
    return (
        <div className="my-3 flex">
            <div className="w-16 h-16 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover" />
            <div className="ml-4 pt-3 grow">
                <p className="text-sm font-bold">Homestay Langit Senja</p>
                <p className="text-xs font-medium text-abu2">Bintang Standart Room</p>
            </div>
            <Link href="homestay#kamar">
            <p className="py-5 text-sm text-hijau"><u>Ubah</u></p>
            </Link>
        </div>
    )
}