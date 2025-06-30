import { Button, Divider, Flex, Space, Typography } from "antd";
import Image from "next/image";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const { Text } = Typography;
export const SoldBy = () => {
  return (
    <div className="rounded-[12px] border border-[#E2E8F0] px-4 py-3">
      <Text className={`mb-2 block text-[12px] leading-[24px] text-[#475569]`}>
        Sold by
      </Text>

      <Flex gap={8} align="flex-start" className="mb-4">
        <Image
          src={"/assets/images/p&g.png"}
          width={40}
          height={40}
          alt="icon"
          className="size-10 rounded-full object-contain"
        />

        <div>
          <Space className="mb-2">
            <Text
              className={`text-[14px] uppercase leading-[24px] text-[#475569]`}
            >
              BD FASHION HOUSE
            </Text>
            <MdVerified className="text-[20px] text-blue-600" />
          </Space>

          <Image
            src={"/assets/images/rising-star.png"}
            width={138}
            height={20}
            alt="icon"
            className="h-[20px] w-[138px] object-contain"
          />
        </div>
      </Flex>

      <Space className="mb-3">
        <Button className="flex w-[135px] items-center gap-2 rounded-md !border-none !bg-[#E6F8F4] px-4 py-2 font-medium !text-secondary">
          <IoChatbubbleEllipsesOutline size={16} /> Chat Now
        </Button>

        <Button className="w-[135px] rounded-md !border-none !bg-[#F1F5F9] px-4 py-2 font-medium !text-[#475569]">
          View Shop
        </Button>
      </Space>

      <Divider className="!m-0 !mb-4 bg-[#E2E8F0]" />

      <Flex align="center" gap={22}>
        {[...Array(3)]?.map((_, i) => (
          <div key={i}>
            <p className="mb-3 text-[12px] leading-[24px] text-[#475569]">
              {i === 0
                ? "Ship on Time"
                : i === 1
                  ? "Chat Response"
                  : "Shop Rating"}
            </p>
            <p className="text-[28px] leading-[24px] text-[#64748B]">
              {i === 0 ? "100" : i === 1 ? "90" : "99.8"}%
            </p>
          </div>
        ))}
      </Flex>
    </div>
  );
};
