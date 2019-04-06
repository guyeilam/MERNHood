import styled from 'styled-components'
import React from 'react'

export default function Box() {
  const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`

  const TomatoButton = styled(Button)`
  background: tomato;
`

  return(
    <>
      <Button>I'm purple.</Button>
      <br />
      <TomatoButton>I'm red.</TomatoButton>
    </>
  )
}
