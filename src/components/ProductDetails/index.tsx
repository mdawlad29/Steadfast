"use client";

import Container from "@/Layout/Container";
import { DescriptionLayout } from "@/Layout/DescriptionLayout";
import { Button, Col, Flex, Rate, Row, Select, Space, Typography } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Description } from "./Description";
import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
import { CiShare2 } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Delivery } from "./Delivery";
import { SoldBy } from "./SoldBy";
import { ProductInfo } from "./ProductInfo";
const { Title, Text } = Typography;

const ProductDetails = () => {
  return (
    <section>
      <Flex align="center" gap={8} className="my-3 px-2 md:px-8 lg:px-20">
        <Link href="/" className="text-[14px] !text-[#0F172A] hover:underline">
          Home
        </Link>
        <IoIosArrowForward className="text-[14px] text-[#0F172A]" />
        <span className="text-[14px] text-[#0F172A]">Topics</span>
        <IoIosArrowForward className="text-[14px] text-[#5f6061]" />
        <span className="text-[14px] text-[#5f6061]">T-shirt</span>
      </Flex>

      <Container className="mb-[15px] bg-neutral py-6">
        <Row gutter={[40, 40]} className="!m-0 mb-[15px]">
          <Col className="!p-0" xs={24} lg={7} md={8}>
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/product-cart-img.png"
                alt="Product"
                className="w-full rounded shadow"
              />
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto">
              {[1, 2, 3, 4, 5].map((i) => (
                <Image
                  key={i}
                  // src={`/product-thumb-${i}.jpg`}
                  src={"/assets/images/product-cart-img.png"}
                  alt={`thumb-${i}`}
                  width={68}
                  height={68}
                  className="size-[68px] rounded border object-cover"
                />
              ))}
            </div>
          </Col>

          <Col className="!p-0" xs={24} lg={10} md={16}>
            <ProductInfo />
          </Col>

          <Col className="space-y-4 !p-0" xs={24} lg={7}>
            <Delivery />
            <SoldBy />
          </Col>
        </Row>
      </Container>

      {/* Description */}
      <Description />
    </section>
  );
};

export default ProductDetails;
