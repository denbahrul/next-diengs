"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "All",
    href: "/orders",
  },
  {
    name: "Ongoing",
    href: "/orders/ongoing",
  },
  {
    name: "Completed",
    href: "/orders/completed",
  },
  {
    name: "Canceled",
    href: "/orders/canceled",
  },
];

export default function OrdersNavbar() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "rounded-full border-hijau px-3 py-1 text-hijau transition-all duration-200 ease-in",
              {
                "bg-hijau text-hijau2": pathname === link.href,
              },
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
