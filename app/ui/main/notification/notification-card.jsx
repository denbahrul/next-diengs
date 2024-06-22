import { HiCheckCircle } from "react-icons/hi";

export default function NotificationCard() {
  return (
    <>
      <div className="my-4 rounded-2xl p-4 shadow-2xl shadow-background">
        <div className="flex">
          <div className="flex aspect-square w-2/12 items-center justify-center rounded-full bg-hijau2">
            <HiCheckCircle size={24} className="text-hijau" />
          </div>
          <div className="w-10/12 p-2 px-4">
            <p className="mx-auto text-sm font-semibold">Notification title</p>
            <p className="text-xs font-light text-abu2">
              Some simple text here bla bla
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
