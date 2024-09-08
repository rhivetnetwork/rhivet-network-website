import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillCloseSquare,
} from "react-icons/ai";
import { FiPhone, FiMail } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Button from "./Button";
import { MdCloseFullscreen } from "react-icons/md";
import { VscClose } from "react-icons/vsc";

const ModalMenu = ({ isOpen, onClose }: any) => (
  <div
    className={`fixed h-screen bg-black inset-0 z-50  bg-opacity-50 backdrop-filter backdrop-blur-sm transition-opacity flex flex-col justify-between items-center ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <div className="w-full h-[80%]  rounded-b-[2.5rem] bg-transparent z-50 shadow-2xl overflow-y-auto border border-white border-opacity-10 backdrop-filter backdrop-blur-2xl bg-opacity-10">
      <div className="flex justify-end relative">
        <button
          onClick={onClose}
          className="text-5xl bg-white text-white focus:outline-none hover:text-gray-500 absolute top-0 right-0"
        >
          <VscClose className="text-black" />
        </button>
      </div>
      <nav className="px-1 md:px-10 py-16">
        <ul className="space-y-4">
          <li>
            <Link href={"/AboutUs"}>
              <Button
                id="aboutUs"
                text="About"
                icon={<FiArrowUpRight className="h-10 w-10 text-white" />}
                customStyles={
                  "w-[100%] px-4 py-2 flex justify-between border-opacity-10 hover:bg-slate-400 hover:bg-opacity-10 border-b border-b-white "
                }
              />
            </Link>
          </li>
          <li>
            <Link href={"/services"}>
              <Button
                id="services"
                text="Services"
                icon={<FiArrowUpRight className="h-10 w-10 text-white" />}
                customStyles={
                  "w-[100%] px-4 py-2 flex justify-between border-opacity-10 hover:bg-slate-400 hover:bg-opacity-10 border-b border-b-white "
                }
              />
            </Link>
          </li>
          <li>
            <Link href={"/ContactUs"}>
              <Button
                id="contact"
                text="Say Hello"
                icon={<FiArrowUpRight className="h-10 w-10 text-white" />}
                customStyles={
                  "w-[100%] px-4 py-2 flex justify-between border-opacity-10 hover:bg-slate-400 hover:bg-opacity-10 border-b border-b-white "
                }
              />
            </Link>
          </li>
        </ul>

        {/* Social Media Links and Call/Email Buttons */}
      </nav>
    </div>
    <div className="px-5 pb-12 rounded-3xl ">
      <div className="flex justify-center gap-4 items-center space-x-4 border px-10 py-4 rounded-full border-white border-opacity-10 backdrop-filter backdrop-blur-2xl">
        {/* Social Media Links */}
        <Link href="https://twitter.com" target="_blank">
          <FaXTwitter className="text-white hover:text-blue-400 text-2xl" />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank">
          <AiFillLinkedin className="text-white hover:text-blue-600 text-2xl" />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <AiFillInstagram className="text-white hover:text-pink-500 text-2xl" />
        </Link>
        <Link href="tel:+1234567890" target="_blank">
          <FiPhone className="text-white hover:text-pink-500 text-2xl" />
        </Link>
        <Link href="mailto:info@example.com" target="_blank">
          <FiMail className="text-white hover:text-pink-500 text-2xl" />
        </Link>
      </div>
    </div>
  </div>
);

export default ModalMenu;
