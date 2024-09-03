import {
    Box,
    Button,
    Container,
    Flex,
    Text,
    Tooltip,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { IoHome, IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import React from "react";

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();

    return (
        <Container maxW={"1500px"}>
            <Box
                px={4}
                my={4}
                borderRadius={5}
                bg={useColorModeValue("gray.200", "gray.700")}
            >
                <Flex
                    h="16"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    {/* Left side */}
                    <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={3}
                        display={{ base: "none", sm: "flex" }}
                    >
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? (
                                <IoMoon />
                            ) : (
                                <LuSun size={20} />
                            )}
                        </Button>
                        <Text fontSize={"18px"} fontWeight={"bold"}>
                            lincode
                        </Text>
                    </Flex>
                    {/* Right side */}
                    <Flex gap={3} alignItems={"center"}>
                        <Tooltip label="Home">
                            <Button
                                onClick={() => navigate("/")}
                                aria-label="Home"
                            >
                                <IoHome />
                            </Button>
                        </Tooltip>
                    </Flex>
                </Flex>
            </Box>
        </Container>
    );
}

export default Navbar;
