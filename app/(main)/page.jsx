import Image from "next/image";
// import { BsBookmarkDash, BsBell } from "react-icons/bs";
import { HiOutlineBookmark, HiOutlineBell } from "react-icons/hi2";
import RecenlyBooked from "@/app/ui/main/home/recenly-booked";
import RecomendationEtc from "../ui/main/home/recomendation-etc";
import { BsBell } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <header className="m-4">
        <div className="flex justify-between">
          <Image
            className="w-1/3 bg-cover"
            src="/diengsid.png" //{image}
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of the author"
          />
          <div className="flex">
            <HiOutlineBell size={24} className="mx-4" />
            <HiOutlineBookmark size={24} />
          </div>
        </div>
        <p className="my-6 text-3xl font-semibold">Hello, Traveller 👋</p>
        <input
          type="text"
          className="w-full rounded-xl bg-abu p-4 focus:outline-hijau"
          placeholder="Search"
        />
      </header>
      <section>
        <RecomendationEtc />
        <RecenlyBooked />
      </section>
    </>
  );
}
