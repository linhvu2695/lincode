import React, { useState } from "react";
import { Flex, Heading, Button, Stack } from "@chakra-ui/react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

function ProfileSection({ title, body }) {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <Stack spacing={6}>
            <Flex gap={4} alignItems="center">
                <Heading>{title}</Heading>
                <Button
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                    size="sm"
                    variant="ghost"
                >
                    {isExpanded ? <IoChevronUp /> : <IoChevronDown />}
                </Button>
            </Flex>

            <Flex
                overflow="hidden"
                transition="max-height 0.5s ease-in-out"
                maxHeight={isExpanded ? "1000px" : "0"}
            >
                {body}
            </Flex>
        </Stack>
    );
}

export default ProfileSection;
