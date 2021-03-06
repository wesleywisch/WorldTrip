import { Flex, Heading, Text } from '@chakra-ui/react';

import Link from 'next/link';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function Slider() {
    return (
        <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]}>
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                }}
                style={{ width: '100%', flex: '1' }}
            >

                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('/continentImage.svg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold">
                                    Europa
                                </Heading>
                                <Text
                                    fontWeight="bold"
                                    color="gray.300"
                                    fontSize={["0.8rem", "1xl", "2xl"]}
                                    mt={["2", "4"]}>
                                    O continente mais antigo
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('/continentImage.svg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold">
                                    Am??rica do Norte
                                </Heading>
                                <Text
                                    fontWeight="bold"
                                    color="gray.300"
                                    fontSize={["0.8rem", "1xl", "2xl"]}
                                    mt={["2", "4"]}>
                                   A Am??rica do Norte ?? um subcontinente.
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('/continentImage.svg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold">
                                    Am??rica do Sul
                                </Heading>
                                <Text
                                    fontWeight="bold"
                                    color="gray.300"
                                    fontSize={["0.8rem", "1xl", "2xl"]}
                                    mt={["2", "4"]}>
                                    A Am??rica do Sul ?? um continente que compreende a por????o meridional da Am??rica. 
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('/continentImage.svg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold">
                                    ??sia
                                </Heading>
                                <Text
                                    fontWeight="bold"
                                    color="gray.300"
                                    fontSize={["0.8rem", "1xl", "2xl"]}
                                    mt={["2", "4"]}>
                                    A ??sia ?? o maior dos continentes, tanto em ??rea como em popula????o.
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('/continentImage.svg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold">
                                    ??frica
                                </Heading>
                                <Text
                                    fontWeight="bold"
                                    color="gray.300"
                                    fontSize={["0.8rem", "1xl", "2xl"]}
                                    mt={["2", "4"]}>
                                    A ??frica ?? o terceiro continente mais extenso.
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('/continentImage.svg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading
                                    fontSize={["3xl", "4xl", "5xl"]}
                                    color="gray.100"
                                    fontWeight="bold">
                                    Oceania
                                </Heading>
                                <Text
                                    fontWeight="bold"
                                    color="gray.300"
                                    fontSize={["0.8rem", "1xl", "2xl"]}
                                    mt={["2", "4"]}>
                                    A Oceania tem uma ??rea de 8.525.989 quil??metros quadrados.
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>

            </Swiper>
        </Flex>
    )
}