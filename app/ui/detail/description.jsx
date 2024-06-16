import { HiStar, HiLocationMarker, HiOutlineBookmark } from "react-icons/hi";

export default function Description() {
    return (
        <section className="mx-3 pb-6">
        <div className="mt-5 flex justify-between">
          <h2 className="text-xl font-bold lg:text-3xl">Homestay Langit Senja</h2>
          <div className="hidden rounded-lg border-0 bg-kuning px-6 py-2 lg:flex">
            <div className="pacity-90 mr-1 pt-0.5">
              <HiOutlineBookmark size={20} color="#FFFFFF" />
            </div>
            <p className="text-base font-semibold text-putih">Favorit</p>
          </div>
        </div>
        <div className="my-1 flex">
          <div className="inline-flex">
            <div className="inline-flex lg:pt-0.5">
              <HiStar color="#FFC700" size={18} />
            </div>
            <p className="inline-flex px-1 text-xs lg:text-base">4.3</p>
          </div>
          <div className="inline-flex px-5">
            <div className="inline-flex lg:pt-0.5">
              <HiLocationMarker color="#FF3C3C" size={18} />
            </div>
            <p className="inline-flex px-1 text-xs lg:text-base">Patak Banteng, Dieng</p>
          </div>
        </div>
        <p className="my-5 text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh. Viverra
          venenatis duis massa aliquam. Elit tellus magna quam molestie. Aliquam mauris ipsum eget
          sit.Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh.
        </p>
      </section>
    )
}