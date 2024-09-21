import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IoLocation, IoPeople, IoGrid, IoEarth, IoCash } from "react-icons/io5";

function CountryInfo({ info }) {
    return (
        <Flex gap={20} alignItems={"flex-start"}>
            <InfoList info={info} />
            <Image
                src={info.href.flag}
                objectFit="contain"
                boxShadow="md"
                borderRadius={"md"}
                borderWidth={2}
                borderStyle="solid"
                borderColor={{ base: "transparent", dark: "white" }}
            />
        </Flex>
    );
}

function InfoList({ info }) {
    return (
        <Flex direction={"column"} gap={8}>
            <InfoItem
                label={"Capital"}
                value={info.capital}
                icon={<IoLocation />}
            />
            <InfoItem
                label={"Population"}
                value={info.population}
                icon={<IoPeople />}
            />
            <InfoItem label={"Area"} value={info.size} icon={<IoGrid />} />
            <InfoItem
                label={"Currency"}
                value={info.currency}
                icon={<IoCash />}
            />
            <InfoItem
                label={"Continent"}
                value={info.continent}
                icon={<IoEarth />}
            />
        </Flex>
    );
}

function InfoItem({ label, value, icon }) {
    return (
        <Flex gap={5} alignItems={"center"}>
            {React.cloneElement(icon, { size: "2.4rem" })}
            <Box>
                <Text fontWeight={"bold"}>{label}</Text>
                <Text>{value}</Text>
            </Box>
        </Flex>
    );
}

export default CountryInfo;
