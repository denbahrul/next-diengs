import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import BackToPreviewsPage from "./main/bact-to-previews";

export default function PageTitle({ title }) {
  return (
    <nav className="m-6 flex flex-row justify-between">
      <div className="flex">
        <BackToPreviewsPage />
        <h2 className="my-auto font-bold">{title}</h2>
      </div>
      <div className="flex text-abu2">
        <HiOutlineDotsCircleHorizontal size={24} className="my-auto" />
      </div>
    </nav>
  );
}
