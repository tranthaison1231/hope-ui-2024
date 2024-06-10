import { Link, useLocation } from "react-router-dom";
import Dashboard from "../assets/svgs/dashboard.svg?react";
import MenuStyles from "../assets/svgs/menu-styles.svg?react";
import Users from "../assets/svgs/users.svg?react";
import { cn } from "../utils/cn";

const MENUS = [
  { label: "Dashboard", link: "/", icon: Dashboard },
  { label: "Menu Styles", link: "/menu-styles", icon: MenuStyles },
  {
    label: "Users",
    link: "/users",
    icon: Users,
    children: [
      {
        label: "User Profile",
        link: "/users/user-profile",
      },
      {
        label: "Edit User",
        link: "/users/edit-user",
      },
    ],
  },
];

export default function Navbar() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col w-[260px] h-[calc(100vh-80px)] p-3">
      {MENUS.map((menu) => (
        <div key={menu.link}>
          <Link
            to={menu.link}
            className={cn("p-2 flex gap-4", {
              "bg-[#3A57E8] text-white": location.pathname === menu.link,
            })}
          >
            <menu.icon/>
            {menu.label}
          </Link>
          <div className="pl-14">
            {menu.children && (
              <div className="flex flex-col gap-2">
                {menu.children.map((child) => (
                  <Link key={child.link} to={child.link} className="p-2">
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
