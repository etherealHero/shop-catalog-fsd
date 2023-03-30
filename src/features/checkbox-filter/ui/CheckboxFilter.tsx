import { Input } from "@/shared"
import { searchIcon } from "@/shared/assets/icons"
import { colors } from "@/shared/constants"
import React, { useState } from "react"
import styled from "styled-components"

type Props = {
  title: string
  options: (string | number)[][]
}

const CheckboxFilter = ({ title, options }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h4
        style={{
          fontWeight: 500,
          fontSize: 16,
          color: colors.black,
          marginBottom: 15,
        }}
      >
        {title}
      </h4>
      <Input icon={searchIcon} style={{ marginBottom: 15 }} />
      {options
        .map(([title, count, idx]) => {
          return (
            <div
              key={idx}
              style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
            >
              <CustomCheckbox
                type="checkbox"
                id={"" + idx}
                style={{ opacity: 0, position: "absolute" }}
              />
              <label htmlFor={"" + idx}>
                <span style={{ marginRight: 5 }}>{title}</span>
                <span style={{ fontSize: 10 }}>({count})</span>
              </label>
            </div>
          )
        })
        .slice(0, isOpen ? -1 : 4)}
      <a
        href="#"
        style={{ fontWeight: 500, fontSize: 12, marginTop: 15 }}
        onClick={(e) => {
          e.preventDefault()
          setIsOpen(!isOpen)
        }}
      >
        {isOpen ? "Свернуть " : "Показать все "}
        <span
          style={{
            display: "inline-block",
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
            width: 7,
            height: 7,
            backgroundColor: colors.dark,
            transform: `${isOpen ? "rotate(0deg)" : "rotate(180deg)"}`,
          }}
        />
      </a>
    </div>
  )
}

const CustomCheckbox = styled.input`
  + label {
    position: relative;
    padding-left: 20px;

    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      display: block;
      width: 10px;
      height: 10px;
      border: 0.5px solid #3f4e65;
      border-radius: 1px;
    }

    ::after {
      content: "\u2713";
      position: absolute;
      left: 1px;
      top: 50%;
      transform: scale(0.8) translateY(-65%);

      opacity: 0;
      transition: opacity 0.2s ease;
    }
  }

  :checked + label {
    ::before {
      background-color: ${colors.accent};
      opacity: 0.7;
    }

    ::after {
      opacity: 1;
    }
  }
`

export { CheckboxFilter }
