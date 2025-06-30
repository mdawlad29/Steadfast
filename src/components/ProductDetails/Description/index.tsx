import Container from "@/Layout/Container";
import { DescriptionLayout } from "@/Layout/DescriptionLayout";
import { Col, Flex, Row } from "antd";

export const Description = () => {
  return (
    <Container>
      <Row className="space-y-[14px]">
        <Col xs={24} lg={18}>
          <DescriptionLayout title="Description">
            <p className="text-[#475569]">
              A denim-looking long-sleeved stylish shirt that fits nicely in a
              modern wardrobe. This piece is made of cotton with a smooth finish
              to keep you comfortable. A denim-looking long-sleeved stylish
              shirt that fits nicely in a modern wardrobe. This piece is made of
              cotton with a smooth finish to keep you comfortable. A
              denim-looking long-sleeved stylish shirt that fits nicely in a
              modern wardrobe. This piece is made of cotton with a smooth finish
              to keep you comfortable. A denim-looking long-sleeved stylish
              shirt that fits nicely in a modern wardrobe. This piece is made of
              cotton with a smooth finish to keep you comfortable. A
              denim-looking long-sleeved stylish shirt that fits nicely in a
              modern wardrobe. This piece is made of cotton with a smooth finish
              to keep you comfortable. A denim-looking long-sleeved stylish
              shirt that fits nicely in a modern wardrobe. This piece is made of
              cotton with a smooth finish to keep you comfortable. A
              denim-looking long-sleeved stylish shirt that fits nicely in a
              modern wardrobe. This piece is made of cotton with a smooth finish
              to keep you comfortable. A denim-looking long-sleeved stylish
              shirt that fits nicely in a modern wardrobe. This piece is made of
              cotton with a smooth finish to keep you comfortable. A
              denim-looking long-sleeved stylish shirt that fits nicely in a
              modern wardrobe. This piece is made of cotton with a smooth finish
              to keep you comfortable. A denim-looking long-sleeved stylish
              shirt that fits nicely in a modern wardrobe. This piece is made of
              cotton with a smooth finish to keep you comfortable.
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
  );
};
