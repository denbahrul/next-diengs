import {
  HiOutlineBell,
  HiOutlineCreditCard,
  HiOutlineLogout,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineUser,
} from "react-icons/hi";
import Link from "next/link";

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
  {
    name: "Logout",
    href: "",
    icon: HiOutlineLogout,
  },
];

export default function ProfileMenu() {
  return (
    <>
      {menus.map((menu) => {
        return (
          <Link key={menu.name} href={menu.href}>
            <div className="my-6 flex">
              <menu.icon className="mr-4" size={24} />
              <p className="my-auto">{menu.name}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
