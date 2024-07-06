import Image from "next/image";
import CancelBookingButton from "../cancel-book-button";
export default function OngoingCard() {
  return (
    <>
      <div className="my-4 rounded-2xl bg-putih p-4 shadow-2xl shadow-background">
        <div className="flex">
          <Image
            className="m-auto aspect-square w-3/12 rounded-2xl object-cover"
            src="/homestay.png" //{image}
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of the author"
          />
          <div className="mx-4 flex w-9/12 flex-col justify-between py-2">
            <p className="font-bold">President Hotel</p>
            <p className="text-xs leading-6 text-abu2">Paris, France</p>
            <div className="mt-1 w-fit rounded-lg bg-hijau2">
              <p className="px-2 py-1 text-xs text-hijau">Paid</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-row border-t-[1px] border-abu pt-4">
          <div className="mr-1 w-1/2">
            <CancelBookingButton />
          </div>
          <button className="ml-1 w-1/2 rounded-full bg-hijau p-[6px] text-sm text-hijau2">
            View Ticket
          </button>
        </div>
      </div>
    </>
  );
}
