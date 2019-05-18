import React from 'react'
import styled from 'styled-components'
import { Camera } from 'styled-icons/evil/Camera'

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
`
const ButtonBorder = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.4);
  height: 80px;
  width: 80px;
  border-radius: 50%;
`

const CameraIcon = styled(Camera)`
  color: white;
`

export default props => (
  <RecWrapper>
    <ButtonBorder>
      <Button style={{ outline: 'none' }} {...props}>
        <CameraIcon />
      </Button>
    </ButtonBorder>
  </RecWrapper>
)
