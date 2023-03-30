import { CheckboxFilter, FilterByGroupList, PriceFilter } from "@/features"
import { Button, Separator } from "@/shared"
import { trashIcon } from "@/shared/assets/icons"
import { colors } from "@/shared/constants"
import React from "react"
import styled from "styled-components"

const factory = [
  ["Grifon", 56, 1],
  ["Boyscout", 66, 2],
  ["Paclan", 166, 3],
  ["Булгари Грин", 21, 4],
  ["Grifon", 56, 5],
  ["Boyscout", 66, 6],
  ["Paclan", 166, 7],
  ["Булгари Грин", 21, 8],
  ["Grifon", 56, 9],
  ["Boyscout", 66, 10],
  ["Paclan", 166, 11],
  ["Булгари Грин", 21, 12],
]

const brand = [
  ["Nivea", 56, 10],
  ["GRIFON", 66, 20],
  ["Домашний сундук", 166, 30],
  ["HELP", 21, 40],
  ["Grifon", 56, 50],
  ["Boyscout", 66, 60],
  ["Paclan", 166, 70],
  ["Булгари Грин", 21, 80],
  ["Grifon", 56, 90],
  ["Boyscout", 66, 100],
  ["Paclan", 166, 110],
  ["Булгари Грин", 21, 120],
]

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div style={{ marginBottom: 100 }}>
      <Title style={{ margin: "20px 0 10px" }}>Подбор по параметрам</Title>
      <PriceFilter style={{ marginBottom: 30 }} />
      <CheckboxFilter key={1} title="Производитель" options={factory} />
      <Separator style={{ width: "100%", height: 1, margin: "20px 0" }} />
      <CheckboxFilter key={2} title="Бренд" options={brand} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "25px 0 40px",
        }}
      >
        <Button style={{ padding: "21px 51px" }}>Показать</Button>
        <Button style={{ padding: 17 }}>
          <img src={trashIcon} alt="trash" />
        </Button>
      </div>
      <Title style={{ marginBottom: 18 }}>Уход за телом</Title>
      <FilterByGroupList />
    </div>
  )
}

const Title = styled.h4`
  color: ${colors.black};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16;
`

export { Sidebar }
