import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="m-auto items-center justify-center text-center">
        <h1 className="mb-4">Page Not Found</h1>
        <Link href="/">
          <div className="mt-4 rounded-3xl bg-hijau px-6 py-2 text-putih drop-shadow-lg">
            Lets go home
          </div>
        </Link>
      </div>
    </div>
  );
}
