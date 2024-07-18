import Link from "next/link";
import { BsArrowLeftShort, BsBoxArrowUp, BsBookmark } from "react-icons/bs";
import { HiArrowNarrowLeft, HiOutlineBookmark, HiOutlineShare } from "react-icons/hi";

export default function Navigation() {
  const seeImage = () => {
    document.querySelector('#shareOption').classList.remove('hidden');
  };

  return (
    <div>
      <div className="fixed top-0 right-0 left-0 z-30 mx-auto flex justify-between p-4 max-w-[420px]">
        <Link href="/">
          <div className="rounded-full bg-putih p-1 opacity-90">
            <HiArrowNarrowLeft size={24} />
          </div>
        </Link>
        <div className="flex">
          <div className="mx-2 rounded-full bg-putih p-1.5 opacity-90">
            <HiOutlineBookmark size={20} />
          </div>
          <div 
            className="rounded-full bg-putih p-1.5 opacity-90"
            onClick={seeImage}
            onKeyPress={seeImage}
            role="button"
            tabIndex="0"
          >
            <HiOutlineShare size={20} />
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 z-20 mx-auto bg-putih p-4 max-w-[420px]">
        <p className="pt-1 pl-12 text-left font-bold">Homstay Langit Senja</p>
      </div>
    </div>
  );
}
