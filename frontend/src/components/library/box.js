import styled from 'styled-components'
import React from 'react'

export default function Box({children, justify, column, width}) {
  const Box = styled.div`
  display: flex;
  width: ${width ? width : `unset`};
  flex-direction: ${column ? "column" : "row"};
  justify-content: ${justify ? justify : "space-evenly" };
  flex-wrap: wrap;
  padding: 10px;
  margin: auto;
`
  return(
    <>
      <Box>
        {children}
      </Box>
    </>
  )
}
