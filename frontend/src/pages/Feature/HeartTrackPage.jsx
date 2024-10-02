import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import {
    Stack,
    Flex,
    Heading,
    Text,
    Box,
    Input,
    IconButton,
    Tooltip,
    Image,
} from "@chakra-ui/react";
import { IoArrowForward } from "react-icons/io5";
import { BASE_URL } from "../../App";
import CategoriesBoard from "../../components/HeartTrack/CategoriesBoard";

function HeartTrackPage() {
    const [imageSrc, setImageSrc] = useState(null);
    const [resultMetrics, setResultMetrics] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    const IMAGE_BOX_WIDTH = 500;
    const IMAGE_BOX_HEIGHT = 300;

    const getMetricColor = (metric, normalMin, normalMax, preMax) => {
        if (metric >= normalMin && metric < normalMax) {
            return "green";
        } else if (metric >= normalMax && metric < preMax) {
            return "yellow";
        }
        return "red";
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            var metadata = imageSrc.split(",")[0];
            var image = imageSrc.split(",")[1];

            const response = await fetch(
                BASE_URL + "/ObjectDetection/heartMonitor",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        metadata: metadata,
                        image: image,
                    }),
                }
            );
            const data = await response.json();
            console.log(data);
            if (!response.ok) {
                throw new Error(data.error);
            }

            setResultMetrics(data.result);
            toast({
                status: "success",
                title: "Yayy! 🎉",
                description: "Submit successfully.",
                duration: 2000,
                position: "top-center",
            });
        } catch (error) {
            toast({
                status: "error",
                title: "An error occurred.",
                description: error.message,
                duration: 4000,
                position: "top-center",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Stack
            spacing={8}
            direction="column"
            divider={<Box borderLeft="1px" borderColor="gray.300" />}
        >
            <Flex direction={"column"} gap={5}>
                <Heading size={"2xl"} marginBottom={10}>
                    Track you heart
                </Heading>
                <Text>Upload image of your heart monitor result</Text>
                <Flex>
                    {/* Left side image */}
                    <Flex
                        direction={"column"}
                        gap={4}
                        width={IMAGE_BOX_WIDTH}
                        height={IMAGE_BOX_HEIGHT}
                    >
                        <Box
                            flex={1}
                            width={"100%"}
                            height={"100%"}
                            borderWidth="1px"
                            borderRadius="lg"
                            p={4}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {imageSrc ? (
                                <Image
                                    src={imageSrc}
                                    alt="Uploaded"
                                    maxWidth="100%"
                                    maxHeight="100%"
                                    objectFit="contain"
                                />
                            ) : (
                                <Text color="gray.500">No image uploaded</Text>
                            )}
                        </Box>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            variant={"filled"}
                        />
                    </Flex>

                    {/* Convert arrow */}
                    <Flex alignItems="center" px={4}>
                        <Tooltip label={"Submit"}>
                            <IconButton
                                icon={<IoArrowForward />}
                                isDisabled={imageSrc == null}
                                onClick={handleSubmit}
                                isLoading={isLoading}
                            />
                        </Tooltip>
                    </Flex>

                    {/* Right result */}
                    <Flex direction={"column"} gap={5}>
                        {resultMetrics && !isLoading && (
                            <Flex gap={10}>
                                <Box
                                    border="1px"
                                    borderColor="gray.200"
                                    borderRadius="lg"
                                    p={4}
                                >
                                    <Text>
                                        Systolic (mmHg):{" "}
                                        <Text
                                            as="span"
                                            fontWeight="bold"
                                            color={`${getMetricColor(
                                                resultMetrics.systolic,
                                                90,
                                                130,
                                                140
                                            )}.200`}
                                        >
                                            {resultMetrics.systolic}
                                        </Text>
                                    </Text>
                                    <Text>
                                        Diastolic (mmHg):{" "}
                                        <Text
                                            as="span"
                                            fontWeight="bold"
                                            color={`${getMetricColor(
                                                resultMetrics.diastolic,
                                                60,
                                                85,
                                                89
                                            )}.200`}
                                        >
                                            {resultMetrics.diastolic}
                                        </Text>
                                    </Text>
                                    <Text>
                                        Pulse (/min):{" "}
                                        <Text as="span" fontWeight="bold">
                                            {resultMetrics.pulse}
                                        </Text>
                                    </Text>
                                </Box>
                            </Flex>
                        )}

                        <CategoriesBoard></CategoriesBoard>
                    </Flex>
                </Flex>
            </Flex>
        </Stack>
    );
}

export default HeartTrackPage;
