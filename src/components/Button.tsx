type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="px-8 py-1 text-base font-base text-center rounded  text-white bg-[#3A57E8]  hover:bg-blue-800sm:w-auto"
      {...rest}
    >
      {children}
    </button>
  );
}
