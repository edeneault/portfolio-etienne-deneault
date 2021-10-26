import React from "react";
import Scrollbar from "perfect-scrollbar-react";
import "perfect-scrollbar-react/dist/style.min.css";

const PageContainer = ({ children, classes, fullWidth }) => {
  const isMobile = window.innerWidth < 992;

  // for (let child in children) {
  //   if (children[child].type.name === "BannerPersonalPortfolio") {
  //     setIsHome(!isHome);
  //     // console.log(isHome);
  //   }
  // }

  if (children.length > 2) {
    const isHomePage = children.reduce((acc, curr, idx) => {
      console.log(acc, curr, idx);
      if (children[idx].type.name === "BannerPersonalPortfolio") acc = true;
      return acc;
    }, 0);
    return (
      <div className={`content-body section ${classes}`}>
        <div
          style={{
            display: "flex",
            width: "100%",
            maxHeight: isMobile ? "auto" : "calc(100vh - 100px)",
          }}
        >
          <Scrollbar options={{ suppressScrollX: true }} enable={!isMobile}>
            <div
              className={`section-wrap section 
                ${!fullWidth && !isHomePage ? "section-padding" : null}`}
            >
              {children}
            </div>
          </Scrollbar>
        </div>
      </div>
    );
    console.log(isHomePage);
  } else {
    return (
      <div className={`content-body section ${classes}`}>
        <div
          style={{
            display: "flex",
            width: "100%",
            maxHeight: isMobile ? "auto" : "calc(100vh - 100px)",
          }}
        >
          <Scrollbar options={{ suppressScrollX: true }} enable={!isMobile}>
            <div
              className={`section-wrap section 
                ${!fullWidth ? "section-padding" : null}`}
            >
              {children}
            </div>
          </Scrollbar>
        </div>
      </div>
    );
  }
};

export default PageContainer;
