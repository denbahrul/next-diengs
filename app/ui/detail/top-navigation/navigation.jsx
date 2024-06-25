import Link from "next/link";
import { BsArrowLeftShort, BsBoxArrowUp, BsBookmark } from "react-icons/bs";

export default function Navigation() {
  const seeImage = () => {
    document.querySelector('#shareOption').classList.remove('hidden');
  };

  return (
    <div className="lg:hidden">
      <div className="fixed top-0 right-0 left-0 z-30 mx-auto flex justify-between p-4 max-w-[420px]">
        <Link href="HomePage">
          <div className="rounded-full bg-putih p-0.5 opacity-90">
            <BsArrowLeftShort size={29} />
          </div>
        </Link>
        <div className="flex">
          <div className="mx-2 rounded-full bg-putih p-2 opacity-90">
            <BsBookmark size={17} />
          </div>
          <div 
            className="rounded-full bg-putih p-2 opacity-90"
            onClick={seeImage}
            onKeyPress={seeImage}
            role="button"
            tabIndex="0"
          >
            <BsBoxArrowUp size={17} />
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 z-20 mx-auto bg-putih p-4 max-w-[420px]">
        <p className="pt-1 pl-12 text-left font-bold">Homstay Langit Senja</p>
      </div>
    </div>
  );
}
