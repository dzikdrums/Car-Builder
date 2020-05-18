import React, { useEffect } from 'react';

import EngineSpecsWrapper from '../styles/EngineSpecsStyles';
import { connect } from 'react-redux';
import { getCars } from '../redux/carsRedux';
import { updateValueOvertime } from '../utils';

const EngineSpecs = ({ option }) => {
  useEffect(() => {
    let speed = document.getElementById('speed');
    let range = document.getElementById('range');

    updateValueOvertime(option.topspeed, 0.7, function (value) {
      speed.innerHTML = Math.round(value);
    });

    updateValueOvertime(option.range, 1.2, function (value) {
      range.innerHTML = Math.round(value);
    });
  });

  return (
    <EngineSpecsWrapper>
      <ul>
        <li className="spec acceleration">
          <span id="acceleration" className="spec-value">
            {option.acceleration}
            <span className="spec-value-unit">s</span>
          </span>
          <span className="spec-description">0-100 km/h</span>
        </li>
        <li className="spec speed">
          <span id="speed" className="spec-value">
            <span className="spec-value-unit">km/h</span>
          </span>
          <span className="spec-description">Top Speed</span>
        </li>
        <li className="spec range">
          <span id="range" className="spec-value">
            <span className="spec-value-unit">km</span>
          </span>
          <span className="spec-description">range</span>
        </li>
      </ul>
    </EngineSpecsWrapper>
  );
};

const mapStateToProps = (state) => ({
  cars: getCars(state),
});

export default connect(mapStateToProps, null)(EngineSpecs);
