import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { IoLocation, IoLocationSharp, IoMail } from "react-icons/io5";

function ProfileInfoList() {
    return (
        <Flex direction={"column"} gap={4}>
            <Flex gap={5} alignItems={"center"}>
                <IoMail />
                <Text
                    as="span"
                    cursor="pointer"
                    _hover={{ textDecoration: "underline" }}
                    onClick={() =>
                        (window.location.href = "mailto:linhvu2695@gmail.com")
                    }
                    userSelect="none"
                >
                    linhvu2695@gmail.com
                </Text>
            </Flex>
            <Flex gap={5} alignItems={"center"}>
                <IoLocationSharp/>
                    <Text>Ho Chi Minh City</Text>
            </Flex>
        </Flex>
    );
}

export default ProfileInfoList;
