import {
  BsLink45Deg,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import { HiX } from "react-icons/hi";

export default function Share() {
  const closeImage = () => {
    document.querySelector("#shareOption").classList.add("hidden");
  };

  const shareToWhatsApp = () => {
    const currentURL = window.location.href;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(currentURL)}`;
    window.open(whatsappURL, "_blank");
  };

  const shareToFacebook = () => {
    const currentURL = window.location.href;
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`;
    window.open(facebookURL, "_blank");
  };

  return (
    <div
      id="shareOption"
      className="fixed left-0 right-0 top-0 z-30 flex hidden h-full w-full items-center justify-center bg-[#000000a2]"
    >
      <div className="m-1 w-full max-w-[425px] rounded-lg bg-putih object-right-top p-4">
        <div
          className="flex cursor-pointer justify-end"
          onClick={closeImage}
          onKeyPress={closeImage}
          role="button"
          tabIndex="0"
        >
          <HiX size={30} />
        </div>
        <div className="my-3 flex rounded-md bg-biru3 p-4">
          <div className="h-16 w-16 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover" />
          <div className="ml-4 grow pt-3">
            <p className="text-sm font-bold">Homestay Langit Senja</p>
            <p className="text-xs font-medium text-abu2">
              Bintang Standart Room
            </p>
          </div>
        </div>
        <p className="font-semibold">Mau bagikan lewat mana?</p>
        <div className="mt-4 flex justify-between">
          <div
            className="rounded-lg border-[1px] border-abu p-1.5"
            onClick={shareToWhatsApp}
            role="button"
          >
            <div className="flex justify-center">
              <BsLink45Deg size={30} />
            </div>
            <p className="text-xs">Salin Link</p>
          </div>
          <div
            className="rounded-lg border-[1px] border-abu p-1.5"
            onClick={shareToWhatsApp}
            role="button"
          >
            <div className="flex justify-center pb-1.5">
              <BsWhatsapp size={24} />
            </div>
            <p className="text-xs">Whatsapp</p>
          </div>
          <div
            className="rounded-lg border-[1px] border-abu p-1.5"
            onClick={shareToWhatsApp}
            role="button"
          >
            <div className="flex justify-center pb-1.5">
              <BsInstagram size={24} />
            </div>
            <p className="text-xs">Instagram</p>
          </div>
          <div
            className="rounded-lg border-[1px] border-abu p-1.5"
            onClick={shareToFacebook}
            role="button"
          >
            <div className="flex justify-center pb-1.5">
              <BsFacebook size={24} />
            </div>
            <p className="text-xs">Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}
