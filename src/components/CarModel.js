import {
  CarModelWrapper,
  CarouselIndicator,
  HeroImage,
} from '../styles/CarModelStyles';
import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

const tl = gsap.timeline();

const CarModel = () => {
  const isMobile = window.innerWidth < 540;
  const [visibleModel, setVisibleModel] = useState(1);
  const [introPlayed, setIntroPlayed] = useState(false);

  // sizes that fit mobile view
  let imageScale = 2.8;
  let imageShift = window.innerWidth * 0.9;
  let imageOrigin = 'center center';
  // sizes that up to tablet view
  if (window.innerWidth > 540 && window.innerWidth < 768) {
    imageScale = 2;
    imageShift = 600;
    // sizes that up to desktop view
  } else if (window.innerWidth > 768 && window.innerWidth < 1150) {
    imageScale = 2.8;
    imageShift = 800;
    // sizes that fit >desktop view
  } else if (window.innerWidth > 1150) {
    imageShift = 700;
  }

  const handleClick = (model) => {
    setVisibleModel(model);
  };

  useEffect(() => {
    if (!introPlayed) {
      tl.to('.image', 1, {
        scale: imageScale,
        ease: 'power4.in',
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
      setIntroPlayed(true);
    }

    if (visibleModel === 0) {
      tl.to('.image', 1, {
        x: imageShift,
        ease: 'expo.inOut',
      }).to('.rollout', 1, {
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
        x: -imageShift,
        ease: 'expo.inOut',
      }).to('.rollout', 1, {
        y: -120,
        delay: -1,
        ease: 'expo.inOut',
      });
    }
  }, [imageOrigin, imageScale, imageShift, introPlayed, visibleModel]);

  return (
    <CarModelWrapper>
      <HeroImage
        className="image"
        src={
          isMobile
            ? require('../assets/main_hero_homepage_mobile.jpg')
            : require('../assets/main_hero_homepage_desktop.jpg')
        }
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
