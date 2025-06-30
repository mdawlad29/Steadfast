import { Button, Flex, Rate, Space, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { CiShare2 } from "react-icons/ci";
const { Text, Title } = Typography;

export const ProductInfo = () => {
  return (
    <div className="md:px-5">
      <Title className="!mb-2 !text-[20px] font-medium leading-[28px] !text-primary">
        Men's Stylish & Fashionable Trendy Good Looking Long Sleeve Casual
        Shirt.
      </Title>

      <Flex align="center" justify="space-between" className="mb-[17px]">
        <Space>
          <span className="text-[16px] text-[#475569]">4.5</span>
          <Rate
            disabled
            allowHalf
            defaultValue={4.5}
            className="text-[16px] text-[#EAB308]"
          />
          <span className="text-[16px] text-[#475569]">2.254</span>
          <IoIosArrowDown className="ml-2 text-[16px] text-primary" />
        </Space>

        <Space>
          <GrFavorite className="text-[24px] text-[#475569]" />
          <CiShare2 className="text-[24px] text-[#475569]" />
        </Space>
      </Flex>

      <Flex align="center" className="mb-[27px]">
        <span className="mr-2 flex items-center text-[24px] font-semibold leading-[32px] text-[#00A788]">
          <TbCurrencyTaka /> 132
        </span>

        <span className="flex items-center text-[16px] text-[#94A3B8] line-through">
          <TbCurrencyTaka />
          25
        </span>
      </Flex>

      <Space className="mb-[26px]">
        <Text className="text-[14px] capitalize leading-[24px] text-[#475569]">
          promotion
        </Text>
        <div className="promotion-wrapper flex items-center">
          Min. spend <TbCurrencyTaka /> 550 <IoIosArrowDown className="ml-2" />
        </div>
      </Space>

      <Space className="mb-2 flex">
        <Text className="text-[14px] capitalize leading-[24px] text-[#475569]">
          available color:
        </Text>
        <Text className="text-[14px] leading-[24px] text-primary">
          Navy blue
        </Text>
      </Space>

      <Flex align="center" gap={8} className="mb-4">
        {[...Array(5)]?.map((_, i) => (
          <Image
            key={i}
            src={"/assets/images/product-cart-img.png"}
            alt="Product"
            width={56}
            height={56}
            className="size-[56px] cursor-pointer rounded object-contain"
          />
        ))}
      </Flex>

      <Space className="mb-2 flex">
        <Text className="text-[14px] capitalize leading-[24px] text-[#475569]">
          select size:
        </Text>
        <Text className="text-[14px] leading-[24px] text-primary">XL</Text>
      </Space>

      <Flex align="center" gap={8} className="mb-4">
        {[...Array(5)]?.map((_, i) => (
          <div
            key={i}
            className="flex size-10 cursor-pointer items-center justify-center rounded border border-[#E2E8F0] uppercase text-[#334155]"
          >
            xl
          </div>
        ))}
      </Flex>

      <div className="mb-[22px]">
        <Text className="mb-2 block text-[16px] capitalize leading-[24px] text-[#171717]">
          quantity
        </Text>

        <Flex
          align="center"
          justify="space-between"
          gap={26}
          className="w-[195px] rounded-full border border-[#E2E8F0] p-0.5"
        >
          <MinusOutlined className="flex size-[36px] items-center justify-center rounded-full bg-[#F1F5F9] text-[#64748B]" />
          <span>5</span>
          <PlusOutlined className="flex size-[36px] items-center justify-center rounded-full bg-[#F1F5F9] text-[#64748B]" />
        </Flex>
      </div>

      <Button
        type="primary"
        size="large"
        className="w-[240px] !rounded-none !bg-secondary text-[16px] leading-[24px] xl:w-[412px]"
      >
        Add to Cart
      </Button>
    </div>
  );
};
