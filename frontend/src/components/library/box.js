import styled from 'styled-components'
import React from 'react'

export default function Box({children, justify, column, width, fontSize, padding}) {
  const Box = styled.div`
  display: flex;
  width: ${width ? width : `unset`};
  flex-direction: ${column ? "column" : "row"};
  justify-content: ${justify ? justify : "space-evenly" };
  flex-wrap: wrap;
  padding: ${padding ? padding : "10px"};
  margin: auto;
  font-size: ${fontSize ? fontSize : "inherit"};
`
  return(
    <>
      <Box>
        {children}
      </Box>
    </>
  )
}
