import React, { useEffect } from 'react';

import { SummaryWrapper } from '../styles/SummaryStyles';
import { connect } from 'react-redux';
import { getSpecs } from '../redux/carsRedux';
import { updateValueOvertime } from '../utils';

const Summary = ({ specs }) => {
  let totalPrice = 0;

  specs.forEach((element) => {
    if (element.category !== 'features') {
      totalPrice += parseInt(element.price);
    } else {
      element.pick.forEach((feature) => {
        totalPrice += parseInt(feature.price);
      });
    }
  });

  useEffect(() => {
    let totalPriceElement = document.getElementById('total-price');
    updateValueOvertime(totalPrice, 0.7, function (value) {
      totalPriceElement.innerHTML = `${Math.round(value)} $`;
    });

    specs.forEach((element) => {
      if (element.category !== 'features') {
        let price;
        price = document.getElementById(`${element.category}-price`);

        if (price.innerHTML !== `${element.price} $`) {
          updateValueOvertime(element.price, 0.7, function (value) {
            price.innerHTML = `${Math.round(value)} $`;
          });
        }
      }
    });
  });

  return (
    <SummaryWrapper>
      {specs.map(({ category, pick, price }) => {
        if (category !== 'features') {
          return (
            <div key={category} className="specWrapper">
              <span className="category">{category}</span>
              <span className="pick">{pick}</span>
              <span className="price" id={`${category}-price`}></span>
            </div>
          );
        } else {
          return (
            <div key={category} className="specWrapper">
              <span className="category">{category}</span>
              <div className="featuresWrapper">
                {pick.map((feature) => (
                  <div className="featureWrapper" key={feature.name}>
                    <span className="pick">{feature.name}</span>
                    <span className="price" id={`${category}-price`}>
                      {`${feature.price} $`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      })}
      <div className="totalPrice">
        <span className="totalPrice_title">Total Price: </span>
        <span id="total-price"></span>
      </div>
    </SummaryWrapper>
  );
};

const mapStateToProps = (state) => ({
  specs: getSpecs(state),
});

export default connect(mapStateToProps)(Summary);
