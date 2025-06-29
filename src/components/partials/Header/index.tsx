import { Logo } from "@/components/shared/Logo";
import { Flex, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between gap-x-10 bg-primary px-2 py-4 md:px-8 lg:px-20">
      <Logo />

      <Flex
        align="center"
        className="h-9 w-full overflow-hidden rounded-md bg-neutral md:h-10 lg:w-[760px]"
      >
        <Input
          className="mr-4 !border-none !text-[#475569] !shadow-none"
          placeholder="Search for anything...."
        />

        <div className="flex h-full w-10 items-center justify-center bg-secondary">
          <IoSearchOutline className="text-lg text-neutral" />
        </div>
      </Flex>

      <Flex align="center" gap={20}>
        <MdOutlineShoppingCart className="text-xl text-neutral" />
        <FaUser className="text-xl text-neutral" />
      </Flex>
    </header>
  );
};

export default Header;
