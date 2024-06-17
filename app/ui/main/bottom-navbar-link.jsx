"use client";
import {
  HiOutlineHome,
  HiMiniHome,
  HiOutlineClipboardDocumentList,
  HiClipboardDocumentList,
  HiOutlineUser,
  HiMiniUser,
} from "react-icons/hi2";
import { HiOutlineSearch, HiSearch } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "Home",
    href: "/",
    icon: HiOutlineHome,
    active: HiMiniHome,
  },
  {
    name: "Search",
    href: "/search",
    icon: HiOutlineSearch,
    active: HiSearch,
  },
  {
    name: "Orders",
    href: "/orders",
    icon: HiOutlineClipboardDocumentList,
    active: HiClipboardDocumentList,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: HiOutlineUser,
    active: HiMiniUser,
  },
];

export default function BottomNavbarLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const LinkActive = link.active;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("text-abu2", {
              "text-hijau": pathname === link.href,
            })}
          >
            {pathname === link.href ? (
              <LinkActive className="m-auto" size={20} />
            ) : (
              <LinkIcon className="m-auto" size={20} />
            )}
            <p className="text-xs">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
