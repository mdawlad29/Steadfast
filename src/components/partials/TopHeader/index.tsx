import { Logo } from "@/components/shared/Logo";
import Container from "@/Layout/Container";
import { Flex, Input } from "antd";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const TopHeader = () => {
  return (
    <Container className="flex w-full items-center justify-between gap-x-10 bg-primary">
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
        <Link href={"/cart"}>
          <MdOutlineShoppingCart className="text-xl text-neutral" />
        </Link>
        <FaUser className="text-xl text-neutral" />
      </Flex>
    </Container>
  );
};

export default TopHeader;
