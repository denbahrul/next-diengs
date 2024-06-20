import { BsLink45Deg, BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import { HiX } from "react-icons/hi";

export default function Share() {
    const closeImage = () => {
        document.querySelector("#shareOption").classList.add("hidden");
      };


    const shareToWhatsApp = () => {
        const currentURL = window.location.href;
        const whatsappURL = `https://wa.me/?text=${encodeURIComponent(currentURL)}`;
        window.open(whatsappURL, '_blank');
    };

    const shareToFacebook = () => {
        const currentURL = window.location.href;
        const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`;
        window.open(facebookURL, '_blank');
    };
      
    return (
        <div id="shareOption" className="fixed top-0 left-0 right-0 flex items-center justify-center z-30 w-full h-full bg-[#000000a2] hidden">
            <div className="rounded-lg object-right-top w-full max-w-[425px] bg-putih p-4 m-1">
                <div
                className="flex justify-end cursor-pointer"
                onClick={closeImage}
                onKeyPress={closeImage}
                role="button"
                tabIndex="0"
                >
                    <HiX size={30} />
                </div>
                <div className="my-3 flex rounded-md bg-biru3 p-4">
                    <div className="w-16 h-16 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover" />
                    <div className="ml-4 pt-3 grow">
                        <p className="text-sm font-bold">Homestay Langit Senja</p>
                        <p className="text-xs font-medium text-abu2">Bintang Standart Room</p>
                    </div>
                </div>
                <p className="font-semibold">Mau bagikan lewat mana?</p>
                <div className="flex justify-between mt-4">
                    <div className="p-1.5 border-[1px] border-abu rounded-lg" onClick={shareToWhatsApp} role="button">
                        <div className="flex justify-center" >
                            <BsLink45Deg size={30} />
                        </div>
                        <p className="text-xs">Salin Link</p>
                    </div>
                    <div className="p-1.5 border-[1px] border-abu rounded-lg" onClick={shareToWhatsApp} role="button">
                        <div  className="flex justify-center pb-1.5">
                            <BsWhatsapp size={24} />
                        </div>
                        <p className="text-xs">Whatsapp</p>
                    </div>
                    <div className="p-1.5 border-[1px] border-abu rounded-lg" onClick={shareToWhatsApp} role="button">
                        <div  className="flex justify-center pb-1.5">
                            <BsInstagram size={24} />
                        </div>
                        <p className="text-xs">Instagram</p>
                    </div>
                    <div className="p-1.5 border-[1px] border-abu rounded-lg" onClick={shareToFacebook} role="button">
                        <div  className="flex justify-center pb-1.5">
                            <BsFacebook size={24} />
                        </div>
                        <p className="text-xs">Facebook</p>
                    </div>
                </div>
            </div>
        </div>
    )
}