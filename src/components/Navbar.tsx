import { Link } from "react-router-dom";

const MENUS = [
  { label: "Dashboard", link: "/" },
  { label: "Menu Styles", link: "/menu-styles" },
  { label: "Users", link: "/users" },
];

export default function Navbar() {
  return (
    <div className="flex flex-col h-[calc(100vh-80px)]">
      {MENUS.map((menu) => (
        <Link key={menu.link} to={menu.link} className="p-2">
          {menu.label}
        </Link>
      ))}
    </div>
  );
}
