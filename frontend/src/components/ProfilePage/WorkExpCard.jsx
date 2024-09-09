import { Card, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";

function WorkExpCard({ postion, company, duration, location, logo, description }) {
    return (
        <Card
            py={4}
            px={8}
            justifyContent={"space-between"}
            direction={"row"}
            transition="all 0.3s"
            _hover={{
                transform: "scale(1.02)",
                boxShadow: "lg",
            }}
        >
            {/* Left side */}
            <Flex gap={8} alignItems={"center"} maxW={"70%"}>
                {logo}
                <Flex direction={"column"} gap={2} alignItems={"flex-start"}>
                    <Text color="gray.500" fontWeight="bold">
                        {postion}
                    </Text>
                    <Text fontWeight="bold">{company}</Text>
                    <Text>{description}</Text>
                </Flex>
            </Flex>

            {/* Right side */}
            <Flex direction={"column"} gap={2} alignItems={"flex-end"}>
                <Text fontSize={"sm"}>{duration}</Text>
                <Flex gap={2} alignItems={"center"}>
                    <IoLocationSharp/>
                    <Text fontWeight="bold" fontSize="xs">
                        {location}
                    </Text>
                </Flex>
            </Flex>
        </Card>
    );
}

export default WorkExpCard;
