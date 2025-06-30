import { Flex, Typography } from "antd";
import Image from "next/image";

const { Text } = Typography;
export const Delivery = () => {
  return (
    <div className="rounded-[12px] border border-[#E2E8F0] px-4 py-3">
      <Text className="!mb-3 block text-[18px] font-medium capitalize leading-[28px] text-[#475569]">
        delivery option
      </Text>

      {[...Array(2)]?.map((_, i) => (
        <Flex key={i} gap={8} align="flex-start" className="mb-3">
          <Image
            src={
              i === 0
                ? "/assets/icons/package-icon.png"
                : "/assets/icons/package-icon-1.png"
            }
            width={24}
            height={24}
            className="object-contain"
            alt="delivery-icon"
          />

          <div>
            <Text
              className={`mb-1 block text-[16px] capitalize leading-[24px] ${i === 0 ? "text-primary" : "text-[#CBD5E1]"}`}
            >
              {i === 0 ? "regular" : "express"}
              {i === 1 && (
                <span className="ml-2 text-[10px] text-[#F87171]">
                  Not available
                </span>
              )}
            </Text>

            <Text
              className={`text-[12px] leading-[24px] ${i === 0 ? "text-[#475569]" : "text-[#CBD5E1]"}`}
            >
              {i === 0
                ? "Delivery within 2-3 days"
                : "Delivery within 24 Hours"}
            </Text>
          </div>
        </Flex>
      ))}
    </div>
  );
};
