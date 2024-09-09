import {
    Card,
    Flex,
    Heading,
    Image,
    Text,
    List,
    ListItem,
} from "@chakra-ui/react";
import React from "react";

function EducationList() {
    return (
        <Flex direction={"row"} gap={4} pt={2}>
            <EducationCard
                imgSrc={"/smu.jpg"}
                school={"Singapore Management University (SMU)"}
                location={"Singapore"}
                duration={"2021 - 2022"}
                description={[
                    "Master of IT in Business (Artificial Intelligence Track)",
                    "Experienced with Machine Learning models and Neural Networks",
                ]}
            />
            <EducationCard
                imgSrc={"/ntu.jpg"}
                school={"Nanyang Technological University (NTU)"}
                location={"Singapore"}
                duration={"2013 - 2017"}
                description={[
                    "Specialized in IC Design.",
                    "Second Upper Class with Honors",
                ]}
            />
        </Flex>
    );
}

function EducationCard({ imgSrc, school, location, duration, description }) {
    return (
        <Card 
            p={6} 
            gap={4} 
            direction={"row"} 
            _hover={{ 
                backgroundColor: "rgba(129, 230, 217, 0.1)", 
                cursor: "pointer" 
            }}
        >
            <Image src={imgSrc} width={20} height={20} borderRadius="md"></Image>
            <Flex direction={"column"} gap={2}>
                <Flex direction={"column"}>
                    <Heading size={"sm"}>{school}</Heading>
                    <Text color={"gray.500"} fontWeight={"bold"}>
                        {location} | {duration}
                    </Text>
                </Flex>

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
            </Flex>
        </Card>
    );
}

export default EducationList;
