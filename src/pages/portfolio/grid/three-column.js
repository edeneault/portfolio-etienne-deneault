import React, { Fragment, useState } from "react";
import Scrollbar from "perfect-scrollbar-react";
import "perfect-scrollbar-react/dist/style.min.css";
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridThreeColumn from "../../../templates/portfolio/grid/three-column";
import FooterThree from "../../../components/footer/FooterThree";
import portfolioData from "../../../data/portfolio";

const PortfolioGridThreeColumnPage = () => {
  const isMobile = window.innerWidth < 992;
  const [count, setCount] = useState(9);
  const [loading, setLoading] = useState(false);
  const portfolios = portfolioData.slice(0, count);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setCount(count + 3);
      setLoading(false);
    }, 200);
  };

  const allItems = count >= portfolioData.length;

  return (
    <Fragment>
      <Scrollbar options={{ suppressScrollX: true }} enable={!isMobile}>
        <Header classes={"position-static"} />
        <SideHeader mobile={true} />

        <PortfolioGridThreeColumn portfolios={portfolios} loading={loading} />

        <FooterThree allItems={allItems} loadHandler={loadMore} />
      </Scrollbar>
    </Fragment>
  );
};

export default PortfolioGridThreeColumnPage;
