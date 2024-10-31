import { NavLink } from "react-router-dom";
import CardIcon from "../../../assets/icons/CardIcon";
import Logo from "../../../assets/icons/Logo";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { useState } from "react";
import Filter from "../../filter";
import filter from "../../../assets/icons/Filter.png";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
interface IMenu {
  path: string;
  name: string;
}
export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const menu: IMenu[] = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/shop",
      name: "Shop",
    },
    {
      path: "/plat-care",
      name: "Plant Care",
    },
    {
      path: "/blogs",
      name: "Blogs",
    },
  ];
  return (
    <header className="">
      <div className="px-6 py-4 hidden items-center justify-between border-b-[0.3px] border-b-[#46A35880] sm:flex">
        <Logo />
        <nav className="flex space-x-6">
          {menu?.map((el: IMenu) => (
            <NavLink
              key={el?.name}
              to={el?.path}
              className={({ isActive }) =>
                isActive
                  ? "text-gray-800 font-bold hover:text-green-600  "
                  : "text-gray-800 font-normal hover:text-green-600"
              }
            >
              {el?.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-6">
          <SearchIcon />
          <div className="relative">
            <CardIcon />
            <span className="absolute top-0 right-[-8px] bg-green-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
            Login
          </button>
        </div>
      </div>
      <div className="sm:hidden flex items-center justify-between pt-[20px]" >
        <Input
          placeholder="Find your plants"
          prefix={<SearchOutlined className="text-gray-400" />}
          className="w-full !bg-[#F8F8F8] focus:outline-none border-none placeholder-gray-400 mr-[20px] h-[35px]"
        />
        <button
          onClick={() => setSidebar(true)}
          className="sm:hidden block  text-[16px] font-semibold py-[7.5px] px-[10px] bg-[#46A358] text-white rounded-[30%]"
        >
          <img src={filter} alt="filter" />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full z-10 w-64 bg-[#F5F5F580] overflow-y-auto text-white transform transition-transform duration-300 ease-in-out ${
          sidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setSidebar(false)}
          className="sm:hidden block absolute top-[20px] right-[20px] text-[16px] font-semibold py-[7.5px] px-[25px] bg-[#46A358] text-white rounded"
        >
          Close
        </button>
        <div className="p-4 mt-[30px]">
          <Filter />
        </div>
      </div>
    </header>
  );
}
