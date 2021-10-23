import React from 'react';

// File imported
import HeaderTwo from "../../components/header/HeaderTwo";
import SideHeader from "../../components/SideHeader";
import ContentHomeBlogPage from "../../templates/HomeBlog";

const HomeBlog = () => {
    return (
        <div className={'main-wrapper has-side-header'}>
            <HeaderTwo/>
            <SideHeader mobile={false}/>
            <ContentHomeBlogPage/>
        </div>
    );
};

export default HomeBlog;
