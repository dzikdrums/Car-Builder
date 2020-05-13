import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

const CarModelWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  .title-container {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 17vh;
    font-size: 2rem;
    overflow: hidden;
    height: 60px;
    color: white;

    .rollout {
      transform: translate(0, -60px);
    }
    .title {
      font-weight: 300;
      letter-spacing: 2px;
      opacity: 0;
    }
  }

  .carousel {
    position: absolute;
    bottom: 25vh;
    width: 100%;
    display: flex;
    justify-content: center;
    opacity: 0;

    ul {
      display: flex;
      list-style: none;
      margin: 5px;
      padding: 0;

      li {
        margin: 0 10px;
      }
    }
  }

  .button-container {
    position: absolute;
    bottom: 15vh;
    width: 100%;
    display: flex;
    justify-content: center;

    .model-pick {
      width: 80vw;
      height: 40px;
      z-index: 100;
      background-color: white;
      border-radius: 30px;
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
      opacity: 0;

      a {
        color: black;
      }
    }
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CarouselIndicator = styled.button`
  padding: 5px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 100%;
  outline: none;

  ${({ active }) =>
    active &&
    css`
      background-color: white;
    `};
`;

const tl = gsap.timeline();

const CarModel = () => {
  const [visibleModel, setVisibleModel] = useState(1);
  const [introPlayer, setIntroPlayed] = useState(false);

  const handleClick = (model) => {
    setVisibleModel(model);
  };

  if (visibleModel === 0) {
    tl.to('.image', 1, {
      x: 370,
      ease: 'expo.inOut',
    });
    tl.to('.rollout', 1, {
      y: 0,
      delay: -1,
      ease: 'expo.inOut',
    });
  } else if (visibleModel === 1) {
    tl.to('.image', 1, {
      x: 0,
      ease: 'expo.inOut',
    });
    tl.to('.rollout', 1, {
      y: -60,
      delay: -1,
      ease: 'expo.inOut',
    });
  } else {
    tl.to('.image', 1, {
      x: -370,
      ease: 'expo.inOut',
    }).to('.rollout', 1, {
      y: -120,
      delay: -1,
      ease: 'expo.inOut',
    });
  }

  useEffect(() => {
    if (!introPlayer) {
      tl.to('.image', 1.5, {
        scale: '3',
        ease: 'power4.inOut',
      })
        .to('.title', 1, {
          opacity: '1',
          ease: 'power4.inOut',
        })
        .to('.carousel', 1, {
          opacity: '1',
          delay: -0.5,
          ease: 'power4.inOut',
        })
        .to('.model-pick', 1, {
          opacity: '1',
          delay: -1,
          ease: 'power4.inOut',
        });
      setIntroPlayed(false);
    }
  }, [introPlayer]);

  return (
    <CarModelWrapper>
      <HeroImage
        className="image"
        src={require('../assets/main_hero_homepage_mobile.jpg')}
      />
      <div className="title-container">
        <div className="rollout">
          <h2 className="title title_S">Model S</h2>
          <h2 className="title title_3">Model 3</h2>
          <h2 className="title title_X">Model X</h2>
        </div>
      </div>
      <div className="carousel">
        <ul>
          <li>
            <CarouselIndicator
              onClick={() => handleClick(0)}
              active={visibleModel === 0}
            />
          </li>
          <li>
            <CarouselIndicator
              onClick={() => handleClick(1)}
              active={visibleModel === 1}
            />
          </li>
          <li>
            <CarouselIndicator
              onClick={() => handleClick(2)}
              active={visibleModel === 2}
            />
          </li>
        </ul>
      </div>
      <div className="button-container">
        <button className="model-pick">
          <NavLink to={`/carbuilder/${visibleModel}`}>custom order</NavLink>
        </button>
      </div>
    </CarModelWrapper>
  );
};

export default CarModel;
