import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ feature }) => {
    const navigate = useNavigate();
    return (
        <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            _hover={{ boxShadow: "0px 0px 8px teal", borderColor: "teal.500" }}
            cursor={"pointer"}
            onClick={() => navigate(feature.page_url)}
        >
            <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={feature.img_url}
                alt={feature.name}
            />

            <Stack>
                <CardBody>
                    <Heading size="md">{feature.title}</Heading>

                    <Text py="2">{feature.description}</Text>
                </CardBody>
            </Stack>
        </Card>
    );
};
export default FeatureCard;
