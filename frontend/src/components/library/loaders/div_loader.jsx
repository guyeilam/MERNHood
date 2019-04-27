import React from "react";
import styled, { keyframes } from "styled-components";

function DivLoader() {
  const keyframeAnimations = keyframes`
  0%   {background-color: lightGray;}
  50% {background-color: gray;}
  100% {background-color: lightGray;}
  `;

  const Loader = styled.div`
    height: fill-available;
    width: fill-available;
    border-radius: 4px;
    animation: ${keyframeAnimations} 3.5s ease-in-out 0s infinite;
  `;
  return <Loader />;
}

export default DivLoader;
