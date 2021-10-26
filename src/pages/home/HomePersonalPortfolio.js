import React from "react";
import Scrollbar from "perfect-scrollbar-react";
import "perfect-scrollbar-react/dist/style.min.css";

// File imported
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import BannerPersonalPortfolio from "../../components/HeroBanner/PersonalPortfolio";
import PersonalPortfolio from "../../container/portfolio/PersonalPortfolio";
import PersonalPortfolioService from "../../container/service";
import PersonalPortfolioTeam from "../../container/team";
import Contact from "../../container/contact";
import Footer from "../../components/footer/FooterThree";
import PageContainer from "../../container/CustomPage";

const HomePersonalPortfolio = ({ type }) => {
  const isMobile = window.innerWidth < 992;

  return (
    <div className={"main-wrapper p-0 m-0"}>
      <div className='content-body section'>
        <div
          style={{
            display: "flex",
            maxHeight: isMobile ? "auto" : "calc(100vh)",
          }}
        >
          <Scrollbar options={{ suppressScrollX: true }} enable={!isMobile}>
            <Header classes={"position-static"} />
            <SideHeader mobile={true} />
            <PageContainer
              classes={"bg-grey "}
              className={type !== "page" ? "section-padding section" : null}
            >
              <BannerPersonalPortfolio />
              <PersonalPortfolio />
              <PersonalPortfolioService />
              <PersonalPortfolioTeam />
              <Contact />
            </PageContainer>
            <Footer position={"fixed"} />
          </Scrollbar>
        </div>
      </div>
    </div>
  );
};

export default HomePersonalPortfolio;
