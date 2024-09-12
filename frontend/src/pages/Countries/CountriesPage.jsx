import { Card, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IoFlag } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function CountriesPage() {
    return (
        <Stack spacing={8} direction="column">
            <Heading>Countries</Heading>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <CountriesOption
                    icon={<IoFlag size={"5rem"} />}
                    title={"Flag Quiz"}
                    page_url={"/flagQuiz"}
                />
            </Grid>
        </Stack>
    );
}

function CountriesOption({ icon, title, page_url }) {
    const navigate = useNavigate();
    return (
        <Card
            p={8}
            gap={4}
            alignItems={"center"}
            transition="all 0.2s"
            _hover={{
                borderColor: "teal.500",
                borderWidth: "2px",
            }}
            cursor={"pointer"}
            onClick={() => navigate("/countries" + page_url)}
        >
            {icon}
            <Text>{title}</Text>
        </Card>
    );
}

export default CountriesPage;
