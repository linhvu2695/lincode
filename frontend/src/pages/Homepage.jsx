import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { IoGlobe, IoLogoGithub, IoLogoLinkedin, IoLogoWebComponent, IoLogoWordpress, IoPencilSharp } from "react-icons/io5";

function Homepage() {
    return (
        <Stack
            spacing={8}
            direction="row"
            divider={<Box borderLeft="1px" borderColor="gray.300" />}
        >
            <Flex direction={"column"} gap={15} alignItems={"center"}>
                <Avatar
                    src="/astronaut2.webp"
                    boxSize={"16rem"}
                    borderWidth="4px"
                    borderColor="white"
                ></Avatar>

                {/* Contact link buttons */}
                <Flex>
                    <ContactLinkButton
                        url={"https://github.com/linhvu2695"}
                        icon={<IoLogoGithub />}
                    />
                    <ContactLinkButton
                        url={"https://www.linkedin.com/in/linhvu2695/"}
                        icon={<IoLogoLinkedin />}
                    />
                    <ContactLinkButton
                        url={"https://www.llinexplore.com"}
                        icon={<IoLogoWordpress />}
                    />
                </Flex>
            </Flex>
            <Box>
                <Heading size={"2xl"} marginBottom={10}>
                    Code with Linh
                </Heading>
                <Text>
                    Welcome to my cosmodrome! Here is the place for my test
                    experiments.
                </Text>
                <Text>Try out the games and toolkits, have fun.</Text>
            </Box>
        </Stack>
    );
}

function ContactLinkButton({ url, icon }) {
    return (
        <Tooltip label={url}>
            <Button
                as="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                fontSize="2xl"
                variant="ghost"
                borderRadius="full"
                width="3rem"
                height="3rem"
                padding="0"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {icon}
            </Button>
        </Tooltip>
    );
}

export default Homepage;
