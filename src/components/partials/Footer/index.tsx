import { Logo } from "@/components/shared/Logo";
import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
const { Text } = Typography;

const Footer = () => {
  return (
    <footer className="mt-10 bg-primary">
      <div className="px-2 pt-[68px] md:px-8 lg:px-20">
        <Row gutter={[80, 40]} className="!m-0 !mb-12">
          <Col className="!p-0" xs={24} md={12} lg={6}>
            <Logo />
            <p className="my-4 text-[#cfcece]">
              Experience our new platform & Enjoy exiting deals and offers on
              your day to day
            </p>

            <div className="space-y-4">
              {[...Array(3)]?.map((_, i) => (
                <Address
                  key={i}
                  icon={
                    i === 0 ? (
                      <FaLocationDot className="text-[16px] text-black" />
                    ) : i === 1 ? (
                      <MdEmail className="text-[16px] text-black" />
                    ) : (
                      <FaPhoneAlt className="text-[16px] text-black" />
                    )
                  }
                  text={
                    i === 0
                      ? "House #64, Road 13, ASA Center, Uttara, Dhaka-1402"
                      : i === 1
                        ? "01729-1497201"
                        : "falcon@gmail.com"
                  }
                />
              ))}
            </div>
          </Col>

          <Col className="!p-0" xs={24} md={12} lg={6}>
            <Heading title="about" />
            {[...Array(6)].map((_, i) => (
              <LinkTag
                key={i}
                title={
                  i === 0
                    ? "Contact Us"
                    : i === 1
                      ? "About us"
                      : i === 2
                        ? "career"
                        : i === 3
                          ? "press"
                          : i === 4
                            ? "cancellation & returns"
                            : "Terms of Use"
                }
              />
            ))}
          </Col>

          <Col className="!p-0" xs={24} md={12} lg={6}>
            <Heading title="help" />
            {[...Array(7)].map((_, i) => (
              <LinkTag
                key={i}
                title={
                  i === 0
                    ? "payments"
                    : i === 1
                      ? "shipping"
                      : i === 2
                        ? "my orders"
                        : i === 3
                          ? "FAQs"
                          : i === 4
                            ? "Terms of use"
                            : i === 5
                              ? "security"
                              : "privacy"
                }
              />
            ))}
          </Col>

          <Col className="!p-0" xs={24} md={12} lg={6}>
            <div className="">
              <Heading title="need support?" />
              <Text className="mb-[41px] mt-3 flex w-40 items-center justify-center gap-2 rounded border border-neutral px-3 py-2 text-[16px] font-medium leading-[24px] !text-[#cfcece]">
                <SlEarphonesAlt className="text-lg text-secondary" />
                10724-7814XX
              </Text>

              <div className="space-y-3">
                <Heading title="download app" />
                <Image
                  src="/assets/images/google-app.png"
                  alt="google-play"
                  width={150}
                  height={50}
                  className="object-contain"
                />
                <Image
                  src="/assets/images/app-store.png"
                  alt="google-play"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[80, 40]} className="!m-0 !mb-9">
          <Col className="!p-0" xs={24} md={12}>
            <Flex align="center" gap={16}>
              <Text className="text-[16px] font-medium leading-[24px] !text-[#cfcece]">
                Follow us on
              </Text>

              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="flex size-7 items-center justify-center rounded-full bg-neutral"
              >
                <FaFacebookF className="text-[16px] text-black" />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="flex size-8 items-center justify-center rounded-full bg-neutral"
              >
                <CiInstagram className="text-[16px] text-black" />
              </Link>
              <Link
                href="https://www.twitter.com/"
                target="_blank"
                className="flex size-8 items-center justify-center rounded-full bg-neutral"
              >
                <FaTwitter className="text-[16px] text-black" />
              </Link>
            </Flex>
          </Col>
          <Col className="!p-0" xs={24} md={12}>
            <Flex align="center" className="gap-3 lg:gap-[37px]" wrap>
              <Text className="text-[18px] font-medium uppercase leading-[28px] !text-[#94A3B8]">
                payments accepted
              </Text>

              <Flex align="center" gap={8} wrap>
                {[...Array(4)]?.map((_, i) => (
                  <Image
                    key={i}
                    src={
                      i === 0
                        ? "/assets/images/payment-method/visa.png"
                        : i === 1
                          ? "/assets/images/payment-method/express.png"
                          : i === 2
                            ? "/assets/images/payment-method/bkash.png"
                            : "/assets/images/payment-method/nagad.png"
                    }
                    width={68}
                    height={43}
                    alt="visa"
                    className="object-contain"
                  />
                ))}
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>

      <p className="border-t border-[#6e6e6e] pb-[23px] pt-[30px] text-center text-[12px] text-neutral">
        Falcon ©2025. Design by xyz
      </p>
    </footer>
  );
};

export default Footer;

const Heading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <Text
      className={`!text-[18px] font-medium uppercase leading-[28px] !text-[#94A3B8] ${className}`}
    >
      {title}
    </Text>
  );
};

const LinkTag = ({ title, link }: { title: string; link?: string }) => {
  return (
    <Link
      href={link ?? "/"}
      className="mb-2 mt-3 block text-[14px] font-medium capitalize leading-[24px] !text-neutral"
    >
      {title}
    </Link>
  );
};

const Address = ({
  icon,
  text,
  className,
}: {
  icon?: React.ReactNode;
  text?: string;
  className?: string;
}) => {
  return (
    <Flex align="center" gap={8}>
      <div>
        <div className="flex size-8 items-center justify-center rounded-full bg-neutral">
          {icon}
        </div>
      </div>

      {text && (
        <p className="text-[14px] leading-[20px] text-[#cfcece]">{text}</p>
      )}
    </Flex>
  );
};
