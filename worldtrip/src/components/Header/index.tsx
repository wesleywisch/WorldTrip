import { Flex, Grid, Image, Icon } from "@chakra-ui/react";

import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header(){
    const { asPath } = useRouter();
    const notHomePage = asPath !== '/'

    return(
        <Flex 
        bg="white" 
        w="100%" a
        s="header" 
        mx="auto"
        px="1rem" 
        h={['50px', '100px']} 
        align="center" 
        justify="center"
        >
            <Grid 
            h="100%" 
            mx="auto" 
            w="100%" 
            maxW="1160px" 
            alignItems="center" 
            templateColumns="repeat(3, 1fr)"
            justifyContent="center"
            >

                {notHomePage && (
                    <Link href="/">
                        <a>
                            <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
                        </a>
                    </Link>
                )}

                <Image 
                w={['81px', '184px']} 
                src="/logo.svg" 
                alt="Logo" 
                justifySelf="center" 
                gridColumn="2" 
                />

            </Grid>
        </Flex>
    );
}