import BackToPreviewsPage from "@/app/ui/main/bact-to-previews";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
export default function Favorite() {
  return (
    <>
      <header className="m-6 flex flex-row justify-between">
        <div className="flex">
          <BackToPreviewsPage />
          <h2 className="my-auto font-bold">Notification</h2>
        </div>
        <div className="flex text-abu2">
          <HiOutlineDotsCircleHorizontal size={24} className="my-auto" />
        </div>
      </header>
      <section></section>
    </>
  );
}
