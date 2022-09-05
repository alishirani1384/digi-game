import React, { useState } from "react";
import { Burger } from "@mantine/core";
import { Container, Menu } from "@mantine/core";
import {
  FaDesktop,
  FaPlaystation,
  FaXbox,
  FaRegUserCircle,
  FaRegSun,
  FaRegMoon,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useClickOutside, useHover } from "@mantine/hooks";
import Link from "next/link";

const Navbar = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const { hovered, ref } = useHover();
  const outRef = useClickOutside(() => setOpened(false));
  const navbarLinks = [
    {
      direction: "/pc",
      name: "PC",
      icon: <FaDesktop size={25} className="group-hover:text-red-500" />,
    },
    {
      direction: "/playstation",
      name: "Playstation",
      icon: <FaPlaystation size={25} className="group-hover:text-red-500" />,
    },
    {
      direction: "/xbox",
      name: "Xbox",
      icon: <FaXbox size={25} className="group-hover:text-red-500" />,
    },
    {
      direction: "/nintendo",
      name: "Nintendo",
      icon: (
        <SiNintendoswitch size={25} className="group-hover:text-red-500" />
      ),
    },
  ];
  return (
    <nav className="z-50">
      <Container
        size={"xl"}
        className="flex items-center justify-between mt-4 md:mt-2">
        <div className="relative z-50" ref={ref}>
          <Menu shadow="md" width={200} position="bottom-start" opened={opened}>
            <Menu.Target>
              <Burger
                ref={outRef}
                opened={opened}
                onClick={() => setOpened((pre) => !pre)}
                color={hovered ? "rgb(239 68 68)" : ""}
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Link href="/login">
                <Menu.Item
                  icon={<FaRegUserCircle size={30} />}
                  className="font-bold text-lg">
                  Log In
                </Menu.Item>
              </Link>
              <Menu.Divider />
              <Menu.Item icon={<FaRegSun size={20} />} className="font-[500]">
                Light Theme
              </Menu.Item>
              <Menu.Item icon={<FaRegMoon size={20} />} className="font-[500]">
                Dark Theme
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div className="flex items-center left-0 right-0 bg-black z-10 justify-center space-x-10 h-20 fixed bottom-0 md:static md:bg-inherit">
          {navbarLinks.map((link, index) => {
            return (
              <Link href={link.direction} key={index}>
                <a className="flex space-x-3 items-center group cursor-pointer">
                  <span className="hidden md:inline font-bold group-hover:inline group-hover:text-red-500">
                    {link.name}
                  </span>
                  {link.icon}
                </a>
              </Link>
            );
          })}
        </div>
        <Link href="/cart">
          <RiShoppingBag3Line
            size={30}
            className="hover:text-red-500 cursor-pointer z-50"
          />
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
