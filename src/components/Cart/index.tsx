"use client";

import {
  Checkbox,
  Button,
  Input,
  Flex,
  Divider,
  Typography,
  Row,
  Col,
} from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";
import Link from "next/link";
import Home from "../../app/page";
import Container from "@/Layout/Container";
const { Text } = Typography;

export default function CartSection() {
  const cartItems = [
    {
      id: 1,
      name: "Bestway Brand Air Inflatable 5 in 1 Semi Double Sofa",
      price: 1139,
      oldPrice: 1539,
      color: "red",
      size: "M",
      qty: 2,
      shop: "BD FASHION HOUSE",
      image: "/product-image.jpg",
    },
    {
      id: 2,
      name: "Bestway Brand Air Inflatable 5 in 1 Semi Double Sofa",
      price: 1139,
      oldPrice: 1539,
      color: "red",
      size: "M",
      qty: 2,
      shop: "BD FASHION HOUSE",
      image: "/product-image.jpg",
    },
    {
      id: 3,
      name: "Bestway Brand Air Inflatable 5 in 1 Semi Double Sofa",
      price: 1139,
      oldPrice: 1539,
      color: "red",
      size: "M",
      qty: 2,
      shop: "BD FASHION HOUSE",
      image: "/product-image.jpg",
    },
  ];

  return (
    <Container>
      <Flex align="center" gap={8} className="mb-3">
        <Link href="/" className="text-[14px] !text-[#0F172A] hover:underline">
          Home
        </Link>
        <IoIosArrowForward className="text-[14px] text-[#5f6061]" />
        <span className="text-[14px] text-[#5f6061]">My cart</span>
      </Flex>

      <Row gutter={[20, 20]}>
        {/* cart list */}
        <Col xs={24} md={16}>
          <div className="rounded-md bg-white pb-5">
            <div className="px-5 pt-5">
              <Flex align="flex-end" justify="space-between">
                <h2 className="text-[32px] font-semibold">My Cart (3)</h2>

                <Flex gap={4}>
                  <Checkbox className="text-sm text-[#475569]">
                    Select All
                  </Checkbox>
                  <button className="text-sm text-[#475569]">Clear All</button>
                </Flex>
              </Flex>

              <Divider className="!mt-27px] !mb-[21px] bg-[#D9D9D9]" />
            </div>

            <div className="pl-5">
              {cartItems.map((item) => (
                <div key={item.id}>
                  <div className="mb-3 bg-[#F1F5F9] px-3 py-[10px]">
                    <Flex align="center" gap={8}>
                      <Checkbox className="checkbox-selector-wrapper mr-3" />

                      <Image
                        src="/assets/icons/fasion-icon.png"
                        width={20}
                        height={20}
                        alt="product"
                        className="rounded object-cover"
                      />
                      <Text className="uppercase leading-[20px] text-[#334155]">
                        BD FASHION HOUSE
                      </Text>
                      <IoIosArrowForward className="text-[#334155]" />
                    </Flex>
                  </div>

                  <Flex
                    gap={16}
                    align="flex-start"
                    className="mb-6 flex-wrap pl-3 pr-5"
                  >
                    <Checkbox />
                    <Image
                      src={"/assets/images/product-cart-img.png"}
                      width={100}
                      height={100}
                      alt="product"
                      className="size-[100px] rounded object-cover"
                    />

                    <div className="w-full">
                      <Flex align="center" justify="space-between" wrap>
                        <Text className="mb-[10px] text-[16px] font-medium leading-[24px] text-primary">
                          {item.name}
                        </Text>

                        <Flex align="center">
                          <span className="mr-2 flex items-center text-[20px] font-bold text-primary">
                            <TbCurrencyTaka /> {item.price}
                          </span>

                          <span className="flex items-center text-sm text-[#475569] line-through">
                            <TbCurrencyTaka /> {item.oldPrice}
                          </span>
                        </Flex>
                      </Flex>

                      <p className="mb-[10px] text-[16px] text-[#475569]">
                        Color: {item.color}, Size: {item.size}
                      </p>

                      <Flex align="center" gap={26}>
                        <Flex
                          align="center"
                          gap={26}
                          className="rounded-full border border-[#E2E8F0] p-0.5"
                        >
                          <MinusOutlined className="flex size-[36px] items-center justify-center rounded-full bg-[#F1F5F9] text-[#64748B]" />
                          <span>{item.qty}</span>
                          <PlusOutlined className="flex size-[36px] items-center justify-center rounded-full bg-[#F1F5F9] text-[#64748B]" />
                        </Flex>

                        <RiDeleteBin6Line className="text-[14px] text-[#94A3B8]" />
                      </Flex>
                    </div>
                  </Flex>
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* summary */}
        <Col xs={24} md={8}>
          <div className="sticky top-32">
            <div className="mb-[17px] rounded-md bg-white px-4 py-[13px] lg:px-6">
              <Text className="text-[24px] font-medium leading-[32px]">
                Order summary
              </Text>

              <div className="mb-3 mt-4 flex justify-between">
                <span className="text-[16px] leading-[24px] text-[#475569]">
                  Price (3 items)
                </span>
                <span className="flex items-center text-[16px] leading-[24px] text-[#475569]">
                  <TbCurrencyTaka /> 00
                </span>
              </div>

              <div className="mb-6 flex justify-between">
                <span className="mb-3 text-[16px] leading-[24px] text-[#475569]">
                  Shipping fee
                </span>
                <span className="text-[14px] leading-[24px] text-[#3B82F6]">
                  To be added
                </span>
              </div>

              <div className="mb-6 flex items-center overflow-hidden rounded border border-[#E2E8F0]">
                <Input
                  placeholder="Store / Falcon coupon"
                  className="!border-none !shadow-none"
                />

                <Button
                  type="primary"
                  size="small"
                  className="h-[40px] w-[82px] !rounded-none !bg-secondary text-center text-[16px] font-medium !text-neutral"
                >
                  Apply
                </Button>
              </div>

              <div className="mb-6 flex justify-between font-semibold">
                <span className="text-[18px] font-medium leading-[28px] text-[#334155]">
                  Sub Total
                </span>
                <span className="flex items-center text-[20px] leading-[28px] text-[#171717]">
                  <TbCurrencyTaka />
                  00
                </span>
              </div>

              <Button
                type="primary"
                size="large"
                block
                className="mb-4 !bg-secondary"
              >
                Proceed to Checkout
              </Button>
            </div>

            <Checkbox className="text-[14px] text-[#475569]">
              I have read and agree to the Terms and Conditions, Privacy Policy
              and Refund and Return Policy
            </Checkbox>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
