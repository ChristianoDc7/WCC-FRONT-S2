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

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="left">
          <div className="header">
            <div className="logo">Wingle</div>
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
          <div style={{ display: "flex", columnGap: "15px" }}>
            <RouteCard
              title="Camping guide"
              icon={<Compass height="73px" width="73px" />}
            />
            <RouteCard
              title="Dangerous hikes"
              icon={<Route height="73px" width="73px" />}
            />
            
          </div>

          <Curve className="curvie"/>
          <Curve2 className="curvie cv2"/>
        </div>
        <div className="right">
            <Profile />
            <Activities />
            <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default App;
