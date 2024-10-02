import { Box, Card, CardBody, CardHeader, Flex, Text } from "@chakra-ui/react";
import React from "react";

function CategoriesBoard() {
    return (
        <Card>
            <CardHeader fontWeight={"bold"} borderBottomWidth="1px" p={4}>
                Blood Pressure Categories
            </CardHeader>
            <CardBody>
                <Flex gap={5}>
                    <Box
                        bg={"green.100"}
                        color={"green.800"}
                        borderRadius={"md"}
                        p={5}
                    >
                        <Text fontWeight={"bold"}>Normal</Text>
                        <Text>Systolic: 90 - 130 mmHg</Text>
                        <Text>Diastolic: 60 - 85 mmHg</Text>
                    </Box>
                    <Box
                        bg={"yellow.100"}
                        color={"yellow.800"}
                        borderRadius={"md"}
                        p={5}
                    >
                        <Text fontWeight={"bold"}>Pre-hypertension</Text>
                        <Text>Systolic: 130 - 139 mmHg</Text>
                        <Text>Diastolic: 85 - 89 mmHg</Text>
                    </Box>
                    <Box
                        bg={"red.100"}
                        color={"red.800"}
                        borderRadius={"md"}
                        p={5}
                    >
                        <Text fontWeight={"bold"}>Hypertension</Text>
                        <Text>Systolic: ≥ 140 mmHg</Text>
                        <Text>Diastolic: ≥ 90 mmHg</Text>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    );
}

export default CategoriesBoard;
