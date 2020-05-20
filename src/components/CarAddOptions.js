import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

const CarAddOptionsWrapper = styled.section``;

const CarAddOptions = ({ options, title }) => {
  console.log(options);
  return (
    <CarAddOptionsWrapper>
      <h1>Car Add Opt</h1>
    </CarAddOptionsWrapper>
  );
};

export default CarAddOptions;
