import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import AvatarFlex from "../components/Homepage/AvatarFlex";
import FeatureGrid from "../components/Homepage/FeatureGrid";

function Homepage() {
    return (
        <Stack
            spacing={8}
            direction="row"
            divider={<Box borderLeft="1px" borderColor="gray.300" />}
        >
            <AvatarFlex />
            <Flex direction={"column"} gap={5}>
                <Heading size={"2xl"} marginBottom={10}>
                    Code with Linh
                </Heading>
                <Box>
                    <Text>
                        Welcome to my cosmodrome! Here is the place for my test
                        experiments.
                    </Text>
                    <Text>Try out the games and toolkits, have fun.</Text>
                </Box>
                <FeatureGrid />
            </Flex>
        </Stack>
    );
}

export default Homepage;
