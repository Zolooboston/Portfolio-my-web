import { About } from "@/components/About";
import { ToggleTheme } from "../ToggleTheme";
import { CloseIcon } from "./CloseIcon";
import { Work } from "@/components/Work";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export const HumMenu = ({ onClick }) => {
  return (
    <div className="absolute top-0 right-0 ease-in duration-200 flex-col w-[85%] h-screen p-5 bg-white dark:bg-black dark:text-white">
      <div className="flex justify-between">
        <p className="flex justify-self-start text-[50px] leading-9 not-italic font-bold tracking-[-0.6px] mr-10 dark:text-[#F9FAFB] pb-5">
          Saruul
        </p>
        <button onClick={onClick}>
          <CloseIcon />
        </button>
      </div>
      <hr />
      <div className="flex flex-col gap-3 items-start pt-4 pb-4 text-[16px] leading-7 font-normal text-gray-600 dark:text-[#D1D5DB]">
        <button>
          <a href="#about">About</a>
        </button>
        <button>
          <a href="#work">Work</a>
        </button>
        <button>
          <a href="#skills">Testimonials</a>
        </button>
        <button>
          <a href="#footer">Contact</a>
        </button>
      </div>
      <hr />
      <div className="flex justify-between pt-4 text-[16px] leading-7 font-normal text-gray-600 dark:text-[#D1D5DB]">
        <p>Switch Theme</p>
        <ToggleTheme />
      </div>
      <button className="w-full bg-black  text-white dark:bg-white dark:text-black rounded-2xl text-[16px] mt-3 ">
        Download CV
      </button>
    </div>
  );
};
