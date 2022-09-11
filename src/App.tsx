import React from 'react';
import './App.css';
import './styles/common.scss'
import './styles/navbar.scss'

import { SwiperSection } from './components/SwiperSection';
import { RouteCard } from './components/RouteCard';
import { Compass } from './widget/Compass';
import { Curve } from './widget/Curve';
import { Route } from './widget/Route';

function App() {
  return (
    <div className="App">
       <div className="card">
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
            <div style={{display:"flex", columnGap:"15px"}}>
              <RouteCard title='Camping guide' icon={<Compass height='73px' width='73px'/>}/>
              <RouteCard title='Dangerous hikes' icon={<Route height='73px' width='73px'/>}/>
            </div>
            
            <Curve height='100px'/>
            <Curve height='100px' rotation='90'/>
       </div>
    </div>
  );
}

export default App;
