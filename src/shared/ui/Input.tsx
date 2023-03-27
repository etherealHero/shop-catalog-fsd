import React from "react"
import styled from "styled-components"
import { colors } from "../constants"

type Props = {
  icon?: string
}

const Input = ({ icon }: Props) => {
  if (!icon) return <InputStyled type="text" placeholder="Поиск..." />

  return (
    <div style={{ position: "relative" }}>
      <InputStyled
        type="text"
        placeholder="Поиск..."
        style={{ paddingRight: 60 }}
      />
      <SubmitButton href="#">
        <img src={icon} alt="Submit" />
      </SubmitButton>
    </div>
  )
}

const InputStyled = styled.input`
  padding: 20px;
  background-color: #ededed;
  border-radius: 36px;
  outline: none;
  border: 0;
  height: 59px;

  ::placeholder {
    color: #5c6370;
  }
`

const SubmitButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.accent};
  border-radius: 50%;
  width: 39px;
  height: 39px;

  position: absolute;
  right: 10px;
  top: 10px;
  /* transform: translateY(-50%); */
`

export { Input }
