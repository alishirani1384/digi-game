import React, { useState } from "react";
import { Burger, Indicator } from "@mantine/core";
import { useRouter } from "next/router";
import { Container, Menu } from "@mantine/core";
import {
  FaDesktop,
  FaPlaystation,
  FaXbox,
  FaRegUserCircle,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useClickOutside, useHover } from "@mantine/hooks";
import Link from "next/link";
import { useLanguage } from "../hooks/useLanguage";
import { useStore } from "../store/useStore";
import { useLoginStore } from "../store/useLoginStore";
import LoginModal from "./LoginModal";
import Image from "next/image";



const Navbar = () => {
  const {t} = useLanguage();
  const router = useRouter()
  
  
  const setLanguageFa = () => {
    router.push("/", "/", { locale: "fa-IR" });
  }
  const setLanguageEn = () => {
    router.push("/", "/", { locale: "en-US" });
  }
  
  const [opened, setOpened] = useState<boolean>(false);
  const { hovered, ref } = useHover();
  const outRef = useClickOutside(() => setOpened(false));
  const cartItems = useStore((state: any) => state.cartItems)
  
  const handleModal = useLoginStore((state: any) => state.openModal);
  function handle() {
    handleModal()
  }

  const navbarLinks = [
    {
      direction: "/pc",
      name: t.navbar.pc,
      icon: <FaDesktop size={25} className="group-hover:text-white" />,
    },
    {
      direction: "/playstation",
      name: t.navbar.playstation,
      icon: <FaPlaystation size={25} className="group-hover:text-white" />,
    },
    {
      direction: "/xbox",
      name: t.navbar.xbox,
      icon: <FaXbox size={25} className="group-hover:text-white" />,
    },
    {
      direction: "/nintendo",
      name: t.navbar.nintendo,
      icon: <SiNintendoswitch size={25} className="group-hover:text-white" />,
    },
  ];
  return (
    <nav className="z-50">
      <Container
        size={"xl"}
        className="flex items-center justify-between mt-4 md:mt-2">
        <div className="relative z-50" ref={ref}>
          <LoginModal />
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
              <Menu.Item
                icon={<FaRegUserCircle size={30} />}
                className="font-bold text-lg"
                onClick={handle}>
                {t.menu.login}
              </Menu.Item>

              <Menu.Divider />
              <Menu.Item className="font-bold text-lg" onClick={setLanguageEn}>
                English - en
              </Menu.Item>
              <Menu.Item className="font-bold text-lg" onClick={setLanguageFa}>
                ?????????? - fa
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <Link href='/'>
          <Image src='/logo.svg' width='150px' height='100px' objectFit="contain" className="z-50" alt="logo"/>
        </Link>
        <Link href="/cart" className="z-50">
          <Indicator
            color="red"
            position="top-end"
            size={25}
            withBorder
            className="z-50"
            label={`${cartItems.length}`}>
            <RiShoppingBag3Line
              size={33}
              className="hover:text-red-500 text-[#C1C2C5] cursor-pointer z-50 overflow-visible"
            />
          </Indicator>
        </Link>
      </Container>
      <Container size={'sm'}>
        <div className="flex bg-orange-700 mt-4 rounded-full items-center p-4 z-10 justify-center space-x-10 md:bg-inherit">
          {navbarLinks.map((link, index) => {
            return (
              <Link href={link.direction} key={index}>
                <a className="flex space-x-3 items-center group cursor-pointer">
                  <span className="hidden md:inline ml-2 font-bold group-hover:text-white">
                    {link.name}
                  </span>
                  {link.icon}
                </a>
              </Link>
            );
          })}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
