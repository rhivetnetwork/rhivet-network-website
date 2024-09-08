import { IoMenuOutline } from "react-icons/io5";

const MenuIcon = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className=" hover:bg-red-500 h-full px-3 bg-zinc-800 "
  >
    <p className=" text-2xl lg:text-4xl text-white">
      <IoMenuOutline />
    </p>
  </button>
);

export default MenuIcon;
