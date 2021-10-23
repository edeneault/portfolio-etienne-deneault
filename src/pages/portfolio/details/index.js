import React, {Fragment} from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import FooterThree from "../../../components/footer/FooterThree";
import TemplatePortfolioDetails from "../../../templates/portfolio/details";

const PortfolioDetailsPage = () => {
    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplatePortfolioDetails/>
            <FooterThree position='fixed'/>
        </Fragment>
    );
};

export default PortfolioDetailsPage;