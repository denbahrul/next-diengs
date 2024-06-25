import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="m-auto items-center justify-center text-center">
        <h1 className="mb-4">Page Not Found</h1>
        <Link
          className="shadow-3xl mt-4 rounded-2xl bg-hijau px-6 py-2 text-putih shadow-hijau"
          href="/"
        >
          Lets go home
        </Link>
      </div>
    </div>
  );
}
