import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PageContainer from "../../../container/CustomPage";
import PortfolioDetailsThumb from "./thumbnail";
import PortfolioDetailsContent from "./content";
import portfolioDetailsData from "../../../data/portfolio/details";

const el = (idToSearch) => {
  return portfolioDetailsData.filter(
    (item) => item.id.toString() === idToSearch,
  );
};

const TemplatePortfolioDetails = () => {
  const { id } = useParams();

  const item = el(id)[0];
  console.log(item);

  return (
    <PageContainer classes={"bg-grey"}>
      <Container>
        <Row>
          <Col lg={7}>
            <PortfolioDetailsThumb images={item.previewImages} />
          </Col>

          <Col lg={5}>
            <PortfolioDetailsContent
              title={item.title}
              category={item.category}
              description={item.description}
              meta={item.meta}
            />
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
};

export default TemplatePortfolioDetails;
