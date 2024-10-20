import React from 'react';

const MacintoshIllustration = () => {
  return (
    <div className="macintosh" aria-label="1984 Macintosh illustration">
      <div className="monitor">
        <div className="monitor-inner">
          <div className="screen-cutout">
            <div className="screen"></div>
          </div>
          <div className="logo">
            <p>🏳️‍🌈</p>
          </div>
          <div className="opening">
            <div className="opening-inner"></div>
          </div>
        </div>
      </div>
      <div className="foot">
        <div className="inset"></div>
        <div className="cable-container">
          <div className="cable-hole"></div>
        </div>
      </div>
      <style jsx>{`
        .macintosh {
          display: block;
          width: 408px; /* Increased by 20% */
          height: 570px; /* Increased by 20% */
          margin: 125px auto;
          position: relative;
          box-shadow: 0 80px 60px -60px rgba(0,0,0,0.4);
        }
        
        .monitor {
          z-index: 2;
          display: block;
          width: 100%;
          height: 492px; /* Increased by 20% */
          border-radius: 15px;
          background-color: #DDDBC2;
          position: absolute;
          background-image: conic-gradient(
            #DDDBC2 0 10.5%, #ECECD5 11% 11.5%, #CECDAF 12% 38%, #C8C4A7 39% 61.5%, #C7C3A6 62% 88%, #DFDAC4 88.5% 89%, #DDDBC2 89.25%
          );
          box-shadow: 0 60px 20px -20px rgba(142,137,97,0.5);
        }
        
        .monitor-inner {
          display: block;
          width: 384px; /* Increased by 20% */
          height: 432px; /* Increased by 20% */
          background-image: linear-gradient(#CAC6A9, #CFCEB0);
          margin: auto;
          position: absolute;
          top: 26px; /* Adjusted to maintain balance */
          left: 0;
          right: 0;
          border-radius: 5px;
        }
        
        .screen-cutout {
          display: block;
          width: 336px; /* Increased by 20% */
          height: 270px; /* Increased by 20% */
          background-color: #DDDBC2;
          margin: auto;
          position: absolute;
          left: 0;
          right: 0;
          top: 24px; /* Adjusted for scaling */
          border-radius: 5px;
          background-image: conic-gradient(
            #938F6A 12.5%, #B5B293 15.5% 33%, #E0DFC3 34% 65.5%, #C2C1A2 66.5% 83.5%, #938F6A 86.5%
          );
        }
        
        .screen {
          display: block;
          width: 312px; /* Increased by 20% */
          height: 234px; /* Increased by 20% */
          background-color: #4F5555;
          background-image: radial-gradient(#525B5A, #50585A);
          margin: auto;
          position: absolute;
          top: 12px; /* Adjusted for scaling */
          left: 0;
          right: 0;
          border-radius: 20px;
          box-shadow: 0 0 20px 10px #2B3030 inset;
        }
        
        .logo {
          display: block;
          width: 26px; /* Increased by 20% */
          height: 26px; /* Increased by 20% */
          background-image: radial-gradient(#C9C6B5, #CBC9BA);
          border-radius: 2px;
          position: absolute;
          left: 26px; /* Adjusted for scaling */
          bottom: 26px; /* Adjusted for scaling */
          padding-left: 3.5px;
          box-shadow: 0 0 2px 0px #979181 inset;
        }
        
        .opening {
          display: block;
          width: 186px; /* Increased by 20% */
          height: 18px; /* Increased by 20% */
          background-image: conic-gradient(
            #BEBB9C 0% 23.5%, #C7C2A2 24.5% 25%, #DCD8BD 26% 73.5%, #CAC8A7 74.5% 75.5%, #BEBB9C 76.5%
          );
          position: absolute;
          bottom: 66px; /* Adjusted for scaling */
          right: 25px; /* Adjusted for scaling */
          border-radius: 4px;
        }
        
        .opening-inner {
          display: block;
          width: 151px; /* Increased by 20% */
          height: 9.6px; /* Increased by 20% */
          background-color: #181914;
          border-radius: 2px;
          margin: auto;
          position: absolute;
          left: 0;
          right: 0;
          top: 4.2px; /* Adjusted for scaling */
        }
        
        .foot {
          display: block;
          width: 100%;
          height: 102px; /* Increased by 20% */
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1;
          border-radius: 7px;
          background-image: linear-gradient(#BBB497, #C1BE9F);
          box-shadow: 14px 0 3px -7px #CCCAB1 inset,
            -14px 0 3px -7px #CECDB1 inset,
            0 32px 3px -7px #C1BE9F inset,
            0 -6px 3px -4px #AEAA87 inset;
        }
        
        .inset {
          display: inline;
          width: 19px; /* Increased by 20% */
          height: 19px; /* Increased by 20% */
          background-color: #C3BEA0;
          position: absolute;
          bottom: 24px; /* Adjusted for scaling */
          left: 42px; /* Adjusted for scaling */
          border-radius: 2px;
          box-shadow: 0 0 2px #C9C3A3 inset,
            0 0px 2px 1px #BCB694;
        }
        
        .cable-container {
          display: block;
          width: 72px; /* Increased by 20% */
          height: 36px; /* Increased by 20% */
          background-color: #C3BEA0;
          position: absolute;
          right: 36px; /* Adjusted for scaling */
          bottom: 18px; /* Adjusted for scaling */
          border-radius: 3px;
          box-shadow: 0 2px 1px -1px #D0CBAE inset,
            4px 0 1px -1px #BAB492 inset,
            -5px 0 2px -2px #A8A281 inset,
            0 -4px 2px -3px #ADA88B inset;
        }
        
        .cable-hole {
          display: block;
          width: 21.6px; /* Increased by 20% */
          height: 24px; /* Increased by 20% */
          background-color: #848580;
          position: absolute;
          top: 6px;
          right: 8.4px;
          border-radius: 3px;
          box-shadow: 0 -4px 0.5px -0.5px rgba(25,25,25,0.2) inset,
            -2px 0 0.5px -0.5px rgba(25,25,25,0.2) inset,
            2px 0 0.5px -0.5px rgba(25,25,25,0.2) inset;
          background-image: linear-gradient(
            #848580 20%,
            transparent 20% 80%,
            #848580 80%
          ), linear-gradient(
            90deg,
            transparent 30%,
            #181914 30% 70%,
            transparent 70%
          );
        }
      `}</style>
    </div>
  );
};

export default MacintoshIllustration;
