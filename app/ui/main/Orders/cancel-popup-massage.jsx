import clsx from "clsx";
import Link from "next/link";

export default function CancelPopupMassage({ isOpen }) {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-10 flex items-center justify-center bg-hitam bg-opacity-70 p-8 transition-opacity duration-300",
        {
          "pointer-events-none opacity-0": !isOpen,
          "opacity-100": isOpen,
        },
      )}
    >
      <div
        className={clsx(
          "w-full max-w-[420px] rounded-3xl bg-putih p-8 transition-transform duration-300",
          {
            "scale-0": !isOpen,
            "scale-100": isOpen,
          },
        )}
      >
        <div className="flex">
          <div className="m-auto aspect-square w-1/2 rounded-full bg-hijau"></div>
        </div>

        <p className="mt-8 text-center text-lg font-semibold text-hijau">
          Successfull!
        </p>
        <p className="my-2 py-4 text-center font-thin text-abu2">
          You have successfully canceled your order. 80% funds will be returned
          to your account.
        </p>
        <div className="">
          <Link href={`/orders/canceled`} className="">
            <button className="w-full rounded-3xl bg-hijau p-4 text-sm font-semibold text-hijau2 shadow-lg shadow-hijau2">
              OK
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// export default function CancelPopupMassageButton() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModalHandler = () => {
//     setIsOpen(true);
//   };

//   return (
//     <>
//       <div onClick={openModalHandler}>
//         <button className="mb-9 w-full rounded-3xl bg-hijau p-4 text-center text-sm font-medium text-hijau2 shadow-xl shadow-hijau2">
//           Continue
//         </button>
//       </div>
//       <CancelPopupMassage isOpen={isOpen} />
//     </>
//   );
// }
