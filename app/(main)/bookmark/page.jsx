import BackToPreviewsPage from "@/app/ui/main/bact-to-previews";
import { HiOutlineViewGrid, HiViewGrid } from "react-icons/hi";
import { HiOutlineQueueList, HiQueueList } from "react-icons/hi2";
export default function Favorite() {
  return (
    <>
      <nav className="m-6 flex flex-row justify-between">
        <div className="flex">
          <BackToPreviewsPage />
          <h2 className="my-auto font-bold">My Bookmark</h2>
        </div>
        <div className="flex text-abu2">
          <HiOutlineQueueList size={24} className="my-auto mr-4" />
          <HiOutlineViewGrid size={24} className="my-auto" />
        </div>
      </nav>
      <section></section>
    </>
  );
}
