import React from "react";
import {
    Stack,
    Box,
    Flex,
    Heading,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import AvatarFlex from "../components/Homepage/AvatarFlex";
import ProfileInfoList from "../components/ProfilePage/ProfileInfoList";
import WorkExpList from "../components/ProfilePage/WorkExpList";
import ProfileSection from "../components/ProfilePage/ProfileSection";
import SkillList from "../components/ProfilePage/SkillList";
import EducationList from "../components/ProfilePage/EducationList";

function ProfilePage() {
    const { colorMode } = useColorMode();

    return (
        <Stack
            spacing={8}
            direction="row"
            divider={<Box borderLeft="1px" borderColor="gray.300" />}
        >
            <Flex direction={"column"} gap={10}>
                <AvatarFlex />
                <Flex direction={"column"} gap={2}>
                    <Heading>Linh Vu</Heading>
                    <Text fontWeight="bold" color={"teal.500"}>
                        Software Developer
                    </Text>
                </Flex>
                <ProfileInfoList />
            </Flex>

            <Flex direction={"column"} gap={5} width={"100%"}>
                <ProfileSection title={"Experience"} body={<WorkExpList/>}/>
                <ProfileSection title={"Skills"} body={<SkillList/>}/>
                <ProfileSection title={"Education"} body={<EducationList/>}/>
            </Flex>
        </Stack>
    );
}

export default ProfilePage;
