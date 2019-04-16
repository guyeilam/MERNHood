import React from 'react';
import styled from 'styled-components'
import { COLORS } from "./styles";


function Text(props) {

  const StyledP = styled.p`

    color: ${COLORS[props.color] ?
      `${COLORS[props.color]}` : `${props.color}`};
    font-size: ${props.size} ;
    font-weight: ${props.weight};
    
  `

  return (
    <StyledP>
      {props.children}
    </StyledP>
  )
}

Text.defaultProps = {
  color: "black",
  size: "medium",
  weight: "lighter",
};

export default Text;