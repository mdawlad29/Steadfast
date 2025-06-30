"use client";

import Container from "@/Layout/Container";
import { DescriptionLayout } from "@/Layout/DescriptionLayout";
import { Button, Col, Flex, Rate, Row, Select, Space } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const ProductDetails = () => {
  const [expanded, setExpanded] = useState(false);

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

      <Container className="bg-neutral py-4">
        <Row gutter={[16, 16]} className="mb-[15px]">
          <Col xs={24} md={8}>
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/product-cart-img.png"
                alt="Product"
                className="w-full rounded shadow"
              />
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  // src={`/product-thumb-${i}.jpg`}
                  src={"/assets/images/product-cart-img.png"}
                  alt={`thumb-${i}`}
                  className="h-20 w-20 rounded border object-cover"
                />
              ))}
            </div>
          </Col>

          <Col xs={24} md={10}>
            <h1 className="mb-2 text-2xl font-bold">
              Men's Stylish & Fashionable Trendy Casual Shirt
            </h1>
            <Space>
              <Rate allowHalf defaultValue={4.5} />
              <span>(2225 reviews)</span>
            </Space>
            <p className="mt-2 text-2xl font-semibold text-green-600">৳1399</p>
            <div className="my-4">
              <Select
                defaultValue="Strong Blue"
                style={{ width: 200 }}
                options={[
                  { value: "blue", label: "Strong Blue" },
                  { value: "black", label: "Black" },
                  { value: "gray", label: "Gray" },
                ]}
              />
            </div>
            <div className="mb-4 flex items-center space-x-4">
              <Button
                type="primary"
                //   icon={<ShoppingCartOutlined />}
                size="large"
              >
                Add to Cart
              </Button>
            </div>
            <p className="text-gray-600">
              Delivery: Inside Dhaka 1-3 days, Outside Dhaka 3-5 days
            </p>
          </Col>

          <Col xs={24} md={6}>
            <h1 className="mb-2 text-2xl font-bold">
              Men's Stylish & Fashionable Trendy Casual Shirt
            </h1>
          </Col>
        </Row>
      </Container>

      {/* Description */}
      <Container>
        <Row className="space-y-[14px]">
          <Col xs={24} lg={18}>
            <DescriptionLayout title="Description">
              <p className="text-[#475569]">
                A denim-looking long-sleeved stylish shirt that fits nicely in a
                modern wardrobe. This piece is made of cotton with a smooth
                finish to keep you comfortable. A denim-looking long-sleeved
                stylish shirt that fits nicely in a modern wardrobe. This piece
                is made of cotton with a smooth finish to keep you comfortable.
                A denim-looking long-sleeved stylish shirt that fits nicely in a
                modern wardrobe. This piece is made of cotton with a smooth
                finish to keep you comfortable. A denim-looking long-sleeved
                stylish shirt that fits nicely in a modern wardrobe. This piece
                is made of cotton with a smooth finish to keep you comfortable.
                A denim-looking long-sleeved stylish shirt that fits nicely in a
                modern wardrobe. This piece is made of cotton with a smooth
                finish to keep you comfortable. A denim-looking long-sleeved
                stylish shirt that fits nicely in a modern wardrobe. This piece
                is made of cotton with a smooth finish to keep you comfortable.
                A denim-looking long-sleeved stylish shirt that fits nicely in a
                modern wardrobe. This piece is made of cotton with a smooth
                finish to keep you comfortable. A denim-looking long-sleeved
                stylish shirt that fits nicely in a modern wardrobe. This piece
                is made of cotton with a smooth finish to keep you comfortable.
                A denim-looking long-sleeved stylish shirt that fits nicely in a
                modern wardrobe. This piece is made of cotton with a smooth
                finish to keep you comfortable. A denim-looking long-sleeved
                stylish shirt that fits nicely in a modern wardrobe. This piece
                is made of cotton with a smooth finish to keep you comfortable.
              </p>
            </DescriptionLayout>
          </Col>

          <Col xs={24} lg={18}>
            <DescriptionLayout title="specification">
              <h3 className="mb-2 mt-4 text-[18px] font-semibold leading-[28px] text-[#252B42]">
                Specification Sharp FP-J30E-B Air Purifier
              </h3>

              {[...Array(5)].map((item, i) => (
                <Flex key={i} align="center" gap={8} className="mb-1 ml-2">
                  <div className="size-1 rounded-full bg-primary" />
                  <li className="text-[#475569]">Manufacturing Practice</li>
                </Flex>
              ))}
            </DescriptionLayout>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
