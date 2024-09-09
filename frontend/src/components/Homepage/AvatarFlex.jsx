import { Avatar, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";
import { IoDocumentText, IoLogoGithub, IoLogoLinkedin, IoLogoWordpress } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function AvatarFlex() {
    const navigate = useNavigate();
    return (
        <Flex direction={"column"} gap={15} alignItems={"center"}>
            <Tooltip label="About Me">
                <Avatar
                    src="/astronaut2.webp"
                    boxSize={"16rem"}
                    borderWidth="4px"
                    borderColor="white"
                    onClick={() => navigate("/profile")}
                    cursor="pointer"
                ></Avatar>
            </Tooltip>

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
