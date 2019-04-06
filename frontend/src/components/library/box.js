import styled from 'styled-components'
import React from 'react'

export default function Box({children, column}) {
  const Box = styled.div`
  display: flex;
  flex-direction: ${column ? "column" : "row"};
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
`
  return(
    <>
      <Box>
        {children}
      </Box>
    </>
  )
}
