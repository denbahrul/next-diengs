import {
  HiOutlineBell,
  HiOutlineCreditCard,
  HiOutlineLogout,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineUser,
} from "react-icons/hi";
import Link from "next/link";
import LogoutButton from "./logout-button";
import UndoBookmarkButton from "../undo-bookmark-button";

const menus = [
  {
    name: "Edit Profile",
    href: "/profile/edit",
    icon: HiOutlineUser,
  },
  {
    name: "Payment",
    href: "/profile/payment",
    icon: HiOutlineCreditCard,
  },
  {
    name: "Notifications",
    href: "/profile/notifications",
    icon: HiOutlineBell,
  },
  {
    name: "Security",
    href: "/profile/security",
    icon: HiOutlineShieldCheck,
  },
  {
    name: "Help",
    href: "/profile/help",
    icon: HiOutlineQuestionMarkCircle,
  },
];

export default function ProfileMenu() {
  return (
    <>
      {menus.map((menu) => {
        return (
          <Link key={menu.name} href={menu.href}>
            <div className="m-6 flex">
              <menu.icon className="mr-4" size={24} />
              <p className="my-auto">{menu.name}</p>
            </div>
          </Link>
        );
      })}
      <LogoutButton />
    </>
  );
}
