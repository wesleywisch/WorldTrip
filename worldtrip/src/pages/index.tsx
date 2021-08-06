import { Flex, Heading } from "@chakra-ui/react";

import { Caracteristicas } from "../components/caracteristicas";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Separador } from "../components/Separador";
import { Slider } from "../components/Slider";


export default function Home() {
  return (
   <Flex direction="column">
     <Header />
     <Banner />
     <Caracteristicas />
     <Separador />

    <Heading textAlign="center" fontWeight="500" mb={['5', '14']} fontSize={['lg', '3xl', '4xl']}>
      Vamos nessa?<br />Então escolha seu continente
    </Heading>

    <Slider />
   </Flex>
  );
}
