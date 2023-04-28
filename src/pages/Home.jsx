import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DeviceTable from "./components/DeviceTable";
import edit from "../assets/edit.png";
import LoaderBox from "./components/LoaderBox";
import { Link } from "react-router-dom";
import eye from "../assets/eye.png";
const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const options = ["Option 1", "Option 2", "Option 3"];
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const buttons = [
    { id: 0, label: "Details" },
    { id: 1, label: "Settings" },
    { id: 2, label: "Users" },
    { id: 3, label: "Permissions" },
    { id: 4, label: "Devices" },
  ];
  const [selectedButton, setSelectedButton] = useState(
    buttons[buttons.length - 1].id
  );
  const [dataLoaded, setDataLoaded] = useState(true);

  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
  ];

  const tabs = [
    { id: 0, label: "Option 1" },
    { id: 1, label: "Option 2" },
    { id: 2, label: "Option 3" },
  ];
  const [open, setOpen] = useState(true);

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false);

    setTimeout(() => {
      setFadeIn(true);
    }, 800);
  }, [selectedButton]);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#7652DC] min-h-screen ${
          open ? "w-72" : "w-24"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-center">
          <HiMenuAlt3
            size={50}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-2 flex flex-col gap-6 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">
        <nav className="hidden md:flex items-center text-sm text-gray-600">
          <span>Teams</span>
          <span className="mx-2">&gt;</span>
          <span>Automation Testing</span>
        </nav>
        <h1 className="text-2xl font-bold flex items-center mt-4 md:mt-0">
          Organization Management for Kobiton Inc.
          <span className="ml-2 p-1">
            <img src={edit} alt="" style={{ width: "40px", height: "40px" }} />
          </span>
        </h1>
        <div className="flex border-b border-gray-200 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`text-sm font-medium py-2 px-2 ${
                selectedTab === tab.id
                  ? "text-[#7652DC] border-b-2 border-[#7652DC]"
                  : "text-gray-500 hover:text-[#7652DC]"
              }`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div>
          &nbsp;
          <div className="flex flex-col">
            <div className="flex">
              {buttons.map((button, index) => (
                <button
                  key={button.id}
                  className={`text-sm font-medium py-2 px-4 ${
                    selectedButton === button.id
                      ? "bg-gradient-to-t bg-[#C8BAF1] bg-[#F1EEFC] text-[#7652DC]"
                      : "border border-gray-200 hover:bg-gray-200 hover:text-black"
                  }`}
                  onClick={() => setSelectedButton(button.id)}
                >
                  <p className="px-1 lg:px-6">{button.label}</p>
                </button>
              ))}
            </div>
          </div>
          &nbsp;
          <div className="relative flex flex-wrap items-center">
            <div className="flex items-center border border-gray-300 rounded-lg w-full md:w-[80rem] h-[50px]">
              <div className="w-8 h-8 p-2 text-gray-400">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  style={{ color: "#7652DC/900" }}
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-full md:w-64 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-purple-500"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="relative w-full md:w-auto md:ml-4 mt-4 md:mt-0">
              <div className="flex items-center border border-gray-300 rounded-lg h-[50px] w-full md:w-[10rem]">
                <div className="w-16 h-16 mt-6 ml-2 p-2 text-gray-400">
                  <img src={eye} alt="eye.png" />
                </div>
                <select
                  className="w-full md:w-48 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-purple-500"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="">Show</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="container mx-auto p-4">
                {selectedButton === 4 ? (
                  <div
                    className={`container mx-auto p-4 mt-4 ${
                      fadeIn
                        ? "opacity-100 transition-opacity duration-1000"
                        : "opacity-0"
                    }`}
                    style={{ width: "90rem", marginLeft: "-3rem" }}
                  >
                    {dataLoaded ? (
                      <DeviceTable />
                    ) : (
                      <LoaderBox onLoad={() => setDataLoaded(true)} />
                    )}
                  </div>
                ) : (
                  <div
                    className={`container mx-auto p-4 mt-4 ${
                      fadeIn
                        ? "opacity-100 transition-opacity duration-1000"
                        : "opacity-0"
                    }`}
                  >
                    {" "}
                    <LoaderBox />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
