import React from "react";
import Scrollbar from "perfect-scrollbar-react";
import "perfect-scrollbar-react/dist/style.min.css";

import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import ContentAboutPage from "../../templates/AboutPage";
import FooterThree from "../../components/footer/FooterThree";

const AboutPage = () => {
  const isMobile = window.innerWidth < 992;

  return (
    <div className={`main-wrapper p-0`}>
      <Scrollbar options={{ suppressScrollX: true }} enable={!isMobile}>
        <Header classes={"position-static"} />
        <SideHeader mobile={true} />
        <ContentAboutPage />
        <FooterThree position={"fixed"} />
      </Scrollbar>
    </div>
  );
};

export default AboutPage;
