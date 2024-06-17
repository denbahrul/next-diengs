import RecenlyBooked from "../ui/main/home/recenly-booked";
import RecomendationEtc from "../ui/main/home/recomendation-etc";
import Image from "next/image";
import { HiOutlineBookmark, HiOutlineBell } from "react-icons/hi2";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="m-6 mb-4">
        <div className="flex justify-between">
          <Image
            className="w-1/3 bg-cover"
            src="/diengsid.png" //{image}
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of the author"
          />
          <div className="flex text-abu2">
            <Link href="/notification">
              <HiOutlineBell size={24} className="mx-4" />
            </Link>
            <Link href="/bookmark">
              <HiOutlineBookmark size={24} />
            </Link>
          </div>
        </div>
        <p className="my-6 text-3xl font-semibold">Hello, Traveller 👋</p>
        <Link href="/search">
          <p className="w-full rounded-xl bg-abu p-3 text-sm text-abu2">
            Search
          </p>
        </Link>
      </header>
      <section>
        <RecomendationEtc />
        <RecenlyBooked />
      </section>
    </>
  );
}
