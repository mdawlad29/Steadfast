import { useState, useRef, useEffect } from "react";
import { Flex } from "antd";
import { IoIosArrowDown } from "react-icons/io";

export const DescriptionLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | undefined>(
    undefined
  );
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className="bg-neutral px-4 py-6 md:px-8">
      <h2 className="mb-2 text-[24px] font-medium capitalize leading-[28px] text-[#252B42]">
        {title}
      </h2>

      <div
        ref={contentRef}
        style={{
          maxHeight: expanded ? contentHeight : 120,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        {children}
      </div>

      {contentHeight && contentHeight > 120 && (
        <Flex
          align="center"
          justify="center"
          gap={4}
          className="mt-2 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="text-sm capitalize text-primary">
            {expanded ? "see less" : "see more"}
          </span>
          <IoIosArrowDown
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </Flex>
      )}
    </div>
  );
};
