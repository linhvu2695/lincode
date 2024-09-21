import { Circle, Flex, Text } from "@chakra-ui/react";
import React from "react";

function CountryBall({ name, flagUrl, onClick }) {
    return (
        <Flex
            onClick={onClick}
            alignItems={"center"}
            gap={5}
            padding={2}
            borderRadius={"60px"}
            _hover={{
                backgroundColor: "rgba(129, 230, 217, 0.1)",
                cursor: "pointer",
            }}
            cursor={"pointer"}
        >
            <Circle
                size="60px"
                bgImage={flagUrl}
                bgSize="cover"
                bgPosition="center"
                boxShadow="md"
            />
            <Text fontWeight={"bold"}>{name}</Text>
        </Flex>
    );
}

export default CountryBall;
