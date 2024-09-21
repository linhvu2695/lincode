import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Image,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import React from "react";

function CoinCard({ info }) {
    const { colorMode } = useColorMode();
    return (
        <Card
            borderRadius={"md"}
            _hover={{ boxShadow: "0px 0px 8px teal", borderColor: "teal.500" }}
            cursor={"pointer"}
        >
            <CardHeader>
                <Flex
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Image src={info.image} width={16}></Image>
                    <Flex direction={"column"} gap={4} alignItems={"flex-end"}>
                        <Text fontWeight={"bold"}>{info.name}</Text>
                        <Text>{info.symbol.toUpperCase()}</Text>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Flex
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Text fontWeight={"bold"} fontSize={"1.5rem"}>
                        $
                        {info.current_price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 8,
                        })}
                    </Text>
                    <Text
                        fontWeight={"bold"}
                        color={
                            info.price_change_percentage_24h < 0
                                ? "red"
                                : "green"
                        }
                    >
                        {info.price_change_percentage_24h.toFixed(2)}%
                    </Text>
                </Flex>
            </CardBody>
            <CardFooter
                bg={colorMode == "dark" ? "gray.600" : "gray.300"}
                borderBottomRadius={"md"}
            >
                <Flex width={"100%"} justifyContent={"space-between"}>
                    <Text>Market Cap:</Text>
                    <Text fontWeight={"bold"}>
                        ${info.market_cap.toLocaleString()}
                    </Text>
                </Flex>
            </CardFooter>
        </Card>
    );
}

export default CoinCard;
