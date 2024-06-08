import message from "../assets/images/message.png";
import notification from "../assets/images/notification.png";
import avatar from "../assets/images/avatar.png";
import logo from "../assets/images/logo.png";
import imguk from "../assets/images/imguk.png";

export default function Header() {
  return (
    <section className="flex">
      <div className="w-[260px] relative flex items-center justify-center gap-4">
        <img src={logo} alt="logo" />
        <h2 className="text-3xl"> Hope UI</h2>
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 cursor-pointer bg-[#3A57E8] rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left text-white"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between flex-1 px-8 py-4">
        <input
          className="w-80 h-9 "
          type="text"
          placeholder="Search"
          name="search"
        />
        <div className="flex justify-end md:mt-0 space-x-6 rtl:space-x-reverse">
          <img src={imguk} alt="imguk"></img>
          <img src={message} alt="message"></img>
          <img src={notification} alt="notification"></img>
          <img src={avatar} alt="avatar"></img>
          <h1>Austin Robertson</h1>
          <p>Marketing Administrator</p>
        </div>
      </div>
    </section>
  );
}
