import Image from "next/image";
import { HiExclamationCircle } from "react-icons/hi";
export default function CanceledCard() {
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
            <div className="mt-1 w-fit rounded-lg bg-merah2">
              <p className="px-2 py-1 text-xs text-merah">
                Canceled & Refounded
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t-[1px] border-abu pt-4">
          <div className="flex rounded-lg bg-merah2 p-2 text-merah">
            <HiExclamationCircle size={20} className="mr-1" />
            <p className="my-auto text-xs">You canceled this booking</p>
          </div>
        </div>
      </div>
    </>
  );
}
