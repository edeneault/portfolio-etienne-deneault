import React from "react";
import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from "../../../assets/images/hero/slider-1.jpg";
import personalInfo from "../../../data/PersonalInfo";
import { Row, Col } from "react-bootstrap";

const BannerPersonalPortfolio = () => {
  return (
    <HeroBannerContainer bg={bannerBg} overlay={false}>
      <Row>
        {/* <Col>
          <Image
            src='https://res.cloudinary.com/edeneault-cloudinary/image/upload/v1620777477/myProfile-images/Etienne-Deneault-Headshot_g0gikz.jpg'
            rounded
          />
        </Col> */}
        <Col xs={{ offset: 3 }} md={{ offset: 2 }}>
          <div className='main-slider-content'>
            <h2>Hello , I’m</h2>
            <h1>{personalInfo.name}</h1>
            <h2>{personalInfo.designation}</h2>
            <a href={`${process.env.PUBLIC_URL + personalInfo.resumeURL}`}>
              Download Resume
            </a>
          </div>
        </Col>
      </Row>
    </HeroBannerContainer>
  );
};

export default BannerPersonalPortfolio;
