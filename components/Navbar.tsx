import React, { useState } from "react";
import { Burger } from "@mantine/core";

import { Container } from "@mantine/core";
import { FaDesktop, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useHover } from "@mantine/hooks";
import Link from "next/link";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const { hovered, ref } = useHover();
  return (
    <nav>
      <Container size={"xl"} className="flex items-center justify-between mt-4">
        <div ref={ref}>
          <Burger
            opened={opened}
            onClick={() => setOpened((pre) => !pre)}
            color={hovered ? "rgb(239 68 68)" : ""}
          />
        </div>

        <div className="flex items-center left-0 right-0 bg-black justify-center space-x-10 h-20 fixed bottom-0 md:static md:bg-inherit">
          {/* PC page */}
          <Link href="/">
            <a className="flex space-x-3 items-center group cursor-pointer">
              <span className="hidden md:inline font-bold group-hover:text-red-500">
                PC
              </span>
              <FaDesktop size={25} className="group-hover:text-red-500" />
            </a>
          </Link>
          {/* Playstation page */}
          <Link href="/">
            <a className="flex space-x-3 items-center group cursor-pointer">
              <span className="hidden md:inline font-bold group-hover:text-red-500">
                Playstation
              </span>
              <FaPlaystation size={25} className="group-hover:text-red-500" />
            </a>
          </Link>
          {/* Xbox Page */}
          <Link href="/">
            <a className="flex space-x-3 items-center group cursor-pointer">
              <span className="hidden md:inline font-bold group-hover:text-red-500">
                Xbox
              </span>
              <FaXbox size={25} className="group-hover:text-red-500" />
            </a>
          </Link>
          {/* Nintendo Page */}
          <Link href="/">
            <a className="flex space-x-3 items-center group cursor-pointer">
              <span className="hidden md:inline font-bold group-hover:text-red-500">
                Nintendo
              </span>
              <SiNintendoswitch
                size={25}
                className="group-hover:text-red-500"
              />
            </a>
          </Link>
        </div>
        <Link href="/cart">
          <RiShoppingBag3Line
            size={30}
            className="hover:text-red-500 cursor-pointer"
          />
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
