import { Avatar, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWordpress } from "react-icons/io5";

function AvatarFlex() {
    return (
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
    );
}

function ContactLinkButton({ url, icon }) {
    return (
        <Tooltip label={url}>
            <IconButton
                href={url}
                fontSize="2xl"
                variant="ghost"
                borderRadius="full"
                icon={icon}
            ></IconButton>
        </Tooltip>
    );
}

export default AvatarFlex;
