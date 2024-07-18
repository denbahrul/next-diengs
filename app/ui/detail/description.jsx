import { HiLocationMarker } from "react-icons/hi";

export default function Description() {
    return (
      <section className="mx-5 pb-6">
        <div className="mt-5 flex justify-between">
          <h2 className="text-xl font-bold">Homestay Langit Senja</h2>
        </div>
        <div className="inline-flex pt-2">
          <div className="inline-flex">
            <HiLocationMarker color="#009933" size={18} />
          </div>
          <p className="inline-flex px-1 items-center text-xs text-abu2">Patak Banteng, Dieng</p>
        </div>
        <p className="my-5 text-sm">
          Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh. Viverra
          venenatis duis massa aliquam. Elit tellus magna quam molestie. Aliquam mauris ipsum eget
          sit.Lorem ipsum dolor sit amet consectetur. Ipsum hac accumsan congue faucibus nibh.
        </p>
      </section>
    )
}