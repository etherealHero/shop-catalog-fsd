import { Breadcrumbs, FilterByGroup, SortBy } from "@/features"
import { Container, Heading } from "@/shared"
import { Footer, Header } from "@/widgets"
import React from "react"

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Breadcrumbs />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Heading title="Косметика и гигиена" />
            <SortBy />
          </div>
          <FilterByGroup />
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr" }}>
            <div>Sidebar</div>
            <div>Catalog</div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export { Home }
