import { Logo } from "@/components/shared/Logo";
import { Drawer, Flex, Input, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import TopHeader from "../TopHeader";
import { FiMenu } from "react-icons/fi";
import { HeaderItems } from "./HeaderItems";
import { SlEarphonesAlt } from "react-icons/sl";
import { useState } from "react";
const { Text } = Typography;

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <TopHeader />

      <nav className="bg-neutral px-2 py-2 shadow-md md:px-8 lg:px-20">
        <Flex align="center" justify="space-between">
          {/* left */}
          <Flex align="center" gap={32}>
            <Flex
              onClick={() => setOpenDrawer(true)}
              align="center"
              gap={8}
              className="border-r border-gray-100 md:flex"
            >
              <FiMenu className="text-lg text-secondary" />
              <span className="text-[14px] capitalize leading-[20px]">
                Categories
              </span>
            </Flex>

            {HeaderItems.map((item, i) => (
              <Flex align="center" key={i} className="hidden gap-8 lg:block">
                <Link
                  href={"/"}
                  className="text-[14px] capitalize leading-[20px] text-primary hover:text-secondary"
                >
                  {item?.label}
                </Link>
              </Flex>
            ))}
          </Flex>

          {/* right */}
          <Flex align="center" gap={32}>
            <div className="hidden gap-4 md:flex">
              {[
                {
                  label: "track order",
                  icon: SlEarphonesAlt,
                  href: "/track-order",
                },
                {
                  label: "help center",
                  icon: SlEarphonesAlt,
                  href: "/help-center",
                },
                { label: "sell with us", icon: SlEarphonesAlt, href: "/sell" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2 text-[12px] uppercase leading-[18px] text-[#475569] hover:text-secondary"
                >
                  <item.icon className="text-[12px]" />
                  {item.label}
                </Link>
              ))}
            </div>
          </Flex>
        </Flex>
      </nav>

      {/* mobile drawer */}
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        placement="left"
        width={240}
      >
        <div className="flex flex-col gap-4">
          {/* categories in drawer */}
          <span className="font-semibold">Categories</span>
          <ul className="flex flex-col gap-2">
            {HeaderItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={""}
                  className="block text-primary hover:text-secondary"
                  onClick={() => setOpenDrawer(false)}
                >
                  {item?.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2">
            {[
              {
                label: "track order",
                icon: SlEarphonesAlt,
                href: "/track-order",
              },
              {
                label: "help center",
                icon: SlEarphonesAlt,
                href: "/help-center",
              },
              { label: "sell with us", icon: SlEarphonesAlt, href: "/sell" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="flex items-center gap-2 text-[12px] uppercase leading-[18px] text-[#475569] hover:text-secondary"
                onClick={() => setOpenDrawer(false)}
              >
                <item.icon className="text-[12px]" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
