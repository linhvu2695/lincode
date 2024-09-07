import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
    Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ feature }) => {
    const navigate = useNavigate();
    return (
        <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
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

                <CardFooter>
                    <Button
                        onClick={() => navigate(feature.page_url)}
                        variant="solid"
                        colorScheme="blue"
                    >
                        Try out
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};
export default FeatureCard;
