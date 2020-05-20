import React, { useEffect, useState } from 'react';

import gsap from 'gsap';
import styled from 'styled-components';

const content = [
  'Premium audio system specifically tuned for a Tesla ultra-quiet cabin',
  'Cold weather features including heated seats for every passenger, heated steering wheel, wiper blade defrosters and washer nozzle heaters',
  'HEPA air filteration system prevents viruses, bacteria and offensive odours from entering the cabin',
  'Music and media over Bluetooth',
  'LED fog lamps',
  'Tinted glass roof ultraviolet and infrared protection',
  'Auto-dimming, power folding, heated side mirrors',
  'Custom driver profiles',
];

const tl = gsap.timeline();

const InteriorDetailsWrapper = styled.div`
  .title-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    span {
      cursor: pointer;
      color: grey;
      font-size: 1.6rem;
      font-weight: 400;
      position: relative;

      ::after {
        position: absolute;
        height: 1px;
        margin: 0 auto;
        content: '';
        left: 0;
        right: 0;
        width: 100%;
        color: #000;
        background-color: grey;
        left: 0;
        bottom: -4px;
      }
    }
  }
  .list-wrapper {
    padding: 5px 20px 10px 15px;
    font-size: 1.2rem;
    height: 0;
    overflow: hidden;

    ul {
      padding: 0 20px;
      li {
        font-size: 1.4rem;
        font-weight: 500;

        color: #666;
        line-height: 20px;
        margin-bottom: 7px;
      }
    }
  }
`;

const InteriorDetails = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    if (showDetails) {
      tl.to('.list-wrapper', 1.2, {
        height: 'auto',
        ease: 'power4.out',
      });
    } else {
      tl.to('.list-wrapper', 1.2, {
        height: 0,
        ease: 'power4.out',
      });
    }
  });

  return (
    <InteriorDetailsWrapper>
      <div className="title-wrapper">
        <span onClick={handleShowDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </span>
      </div>
      <div className="list-wrapper">
        <h3>Includes Premium Upgrades Package</h3>
        <ul>
          {content.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </InteriorDetailsWrapper>
  );
};

export default InteriorDetails;
