import { Card, Flex, IconButton, Text, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { IoCode, IoRocket } from "react-icons/io5";

function SkillList() {
    return (
        <Flex direction={"column"} gap={2} pt={2}>
            <Flex gap={45}>
                <Flex direction={"column"} gap={4} alignItems={"flex-start"}>
                    <IconButton
                        borderRadius="full"
                        icon={<IoCode />}
                    ></IconButton>
                    <Text fontWeight={"bold"}>Language</Text>
                </Flex>
                <Flex gap={2} flexWrap="wrap">
                    <SkillCard
                        skill={"Python"}
                        description={["Tensorflow/Pytorch", "Flask"]}
                        isHighlight={true}
                    />
                    <SkillCard
                        skill={"C#"}
                        description={[".NET"]}
                        isHighlight={true}
                    />
                    <SkillCard skill={"Golang"} />
                    <SkillCard skill={"Javascript"} description={["React"]} />
                    <SkillCard skill={"Java"} description={["SpringBoot"]} />
                    <SkillCard skill={"HTML & CSS"} />
                </Flex>
            </Flex>
            <Flex gap={45}>
                <Flex direction={"column"} gap={4} alignItems={"flex-start"}>
                    <IconButton
                        borderRadius="full"
                        icon={<IoRocket />}
                    ></IconButton>
                    <Text fontWeight={"bold"}>Development</Text>
                </Flex>
                <Flex gap={2} flexWrap="wrap">
                <SkillCard
                        skill={"Database"}
                        description={["SQL", "MongoDB"]}
                        isHighlight={true}
                    />
                    <SkillCard
                        skill={"SearchEngine"}
                        description={["ElasticSearch"]}
                        isHighlight={true}
                    />
                    <SkillCard skill={"Caching"} description={["Redis"]} />
                    <SkillCard
                        skill={"Message Queues"}
                        description={["RabbitMQ"]}
                    />
                    <SkillCard
                        skill={"Versioning"}
                        description={["Github", "Gitlab/Azure"]}
                    />
                    <SkillCard skill={"Docker"} />
                </Flex>
            </Flex>
        </Flex>
    );
}

function SkillCard({ skill, description, isHighlight }) {
    return (
        <Card
            p={4}
            gap={2}
            transition="all 0.3s"
            _hover={{
                transform: "translateY(-5px) rotate(2deg)",
            }}
            height="fit-content"
            borderWidth={isHighlight ? "2px" : "0"}
            borderColor={isHighlight ? "teal.500" : "transparent"}
        >
            <Text fontWeight={"bold"}>{skill}</Text>
            {description && (
                <List styleType="disc" ml={4}>
                    {Array.isArray(description) ? (
                        description.map((item, index) => (
                            <ListItem key={index} fontSize={"0.8rem"}>
                                {item}
                            </ListItem>
                        ))
                    ) : (
                        <ListItem>{description}</ListItem>
                    )}
                </List>
            )}
        </Card>
    );
}

export default SkillList;
