
import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

export function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades +100</Heading>
      <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px', '45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>

        <City
          image="/city/londres.svg"
          ImageAlt="Londres"
          name="Londres"
          city="Reino Unido"
          icon="/city/reinoUnido.svg"
        />

        <City
          image="/city/paris.svg"
          ImageAlt="Paris"
          name="Paris"
          city="França"
          icon="/city/frança.svg"
        />

        <City
          image="/city/roma.svg"
          ImageAlt="Roma"
          name="Roma"
          city="Itália"
          icon="/city/italia.svg"
        />

        <City
          image="/city/praga.svg"
          ImageAlt="Praga"
          name="Praga"
          city="República Tcheca"
          icon="/city/republica.svg"
        />

        <City
          image="/city/amsterda.svg"
          ImageAlt="Amsterdã"
          name="Amsterdã"
          city="Holanda"
          icon="/city/holanda.svg"
        />

      </Grid>
    </>
  )
}