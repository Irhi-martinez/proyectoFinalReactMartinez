import { Flex,Spinner } from "@chakra-ui/react";

export const Loader = () => {
    return (
        <Flex
        height={"90vh"}
        width={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        >
            <Spinner
            thickness="40px"
            speed="0.65s"
            emptyColor="blue.500"
            size= "xl"
            />
        </Flex>
    );
};