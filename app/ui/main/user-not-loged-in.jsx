"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const pages = [
  {
    href: "/profile",
    title: "Kamu belum masuk!",
    text: "Masuk untuk mengakses profil kamu dan mengupdate informasi pribadi.",
  },
  {
    href: "/orders",
    title: "Kamu belum masuk!",
    text: "Masuk untuk melacak status pesanan kamu dan melihat detailnya.",
  },
  {
    href: "/bookmark",
    title: "Kamu belum masuk!",
    text: "Masuk untuk mengakses dan mengelola penginapan yang kamu simpan.",
  },
  {
    href: "/notification",
    title: "Selamat datand di Diengs.id!",
    text: "Masuk untuk mengakses semua fitur aplikasi. Termasuk fitur bookmark, mengelelola pesanan dan informasi pribadi.",
  },
];

export default function UserNotLogedIn() {
  const pathname = usePathname();

  // Mencari halaman yang cocok berdasarkan pathname
  const currentPage = pages.find((page) => pathname.startsWith(page.href));

  // Jika tidak ada halaman yang cocok, kembalikan null atau tampilan default
  if (!currentPage) return null;

  return (
    <div className="flex h-[75vh]">
      <div className="flex flex-col items-center justify-center px-6 text-center">
        <p className="mb-2 text-lg font-bold">{currentPage.title}</p>
        <p className="text-sm text-abu2">{currentPage.text}</p>
        <Link href="/login">
          <div className="mt-4 rounded-3xl bg-hijau px-6 py-2 text-putih drop-shadow-lg">
            Masuk
          </div>
        </Link>
      </div>
    </div>
  );
}
