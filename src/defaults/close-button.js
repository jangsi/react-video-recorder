import React from 'react'
import styled from 'styled-components'
import { Close } from 'styled-icons/evil/Close'

const Button = styled.button`
  background: ${props => props.backgroundColor};
  color: ${props => props.color};
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  :hover {
    background: #fb6d42;
  }
`

const RecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 2%;
`
const ButtonBorder = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.4);
  height: 68px;
  width: 68px;
  border-radius: 50%;
`

const CloseIcon = styled(Close)`
  color: white;
`

export default props => (
  <RecWrapper>
    <ButtonBorder>
      <Button style={{ outline: 'none' }} {...props}>
        <CloseIcon />
      </Button>
    </ButtonBorder>
  </RecWrapper>
)
