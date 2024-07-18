"use client";
import { useRouter } from "next/navigation";
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function TopNav({title}) {
  const router = useRouter();

  return (
    <nav className="m-6 flex flex-row justify-between">
      <div className="flex">
        <button type="button" onClick={() => router.back()}>
          <HiArrowNarrowLeft size={24} className="my-auto mr-4" />
        </button>
        <h2 className="my-auto font-bold text-lg">{title}</h2>
      </div>
    </nav>
  );
}
