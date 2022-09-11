import React from "react";
import "./App.css";
import "./styles/common.scss";
import "./styles/navbar.scss";

import { SwiperSection } from "./components/SwiperSection";
import { RouteCard } from "./components/RouteCard";
import { Compass } from "./widget/Compass";
import { Curve } from "./widget/Curve";
import { Route } from "./widget/Route";
import { Profile } from "./components/Profile";
import { Curve2 } from "./widget/Curve2";
import { Activities } from "./components/Activities";
import ContactSection from "./components/ContactSection";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const isSmall = useMediaQuery("(max-width:768px)");
  return (
    <div className="App" style={isSmall ? {height: "auto", width:"auto"} : {}}>
      <div
        className="card"
        style={
          isSmall
            ? {
                width: "100vw",
                flexDirection: "column",
                height: "auto",
                paddingInline: "20px",
                borderRadius:"40px",
                overflowX:"hidden"
              }
            : {}
        }
      >
        <div className="left" style={isSmall ? { width: "100%", flex: 1, rowGap:"30px" } : {}}>
          <div className="header">
            <div className="logo">Wingle</div>
            {isSmall && <div className="pdp"></div>}
          </div>
          <div className="main">
            <nav>
              <a href="#">Popular</a>
              <a href="#">Recommended</a>
              <a href="#">Extreme</a>
              <div className="animation start-home"></div>
            </nav>
            <SwiperSection />
          </div>
          <div style={{ display: "flex", columnGap: "15px", ...(isSmall ? {
                width:"100%"
          } : {}) }}>
            <RouteCard
              title="Camping guide"
              icon={<Compass height="73px" width="73px" />}
            />
            <RouteCard
              title="Dangerous hikes"
              icon={<Route height="73px" width="73px" />}
            />
          </div>

          { !isSmall &&
          <>
            <Curve className="curvie" />
            <Curve2 className="curvie cv2" />
          </>
          }
        </div>

        <div
          className="right"
          style={isSmall ? { width: "auto", paddingTop:"30px" } : {}}
        >
          <Profile />
          <Activities />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default App;
