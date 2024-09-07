import {
    Stack,
    Box,
    Flex,
    Heading,
    Text,
    IconButton,
    Tooltip,
    Image,
    Input,
    useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { BASE_URL } from "../../App";

function RmbgPage() {
    const [imageSrc, setImageSrc] = useState(null);
    const [resultImage, setResultImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    const IMAGE_BOX_WIDTH = 500;
    const IMAGE_BOX_HEIGHT = 300;

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

    const handleConvert = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            var metadata = imageSrc.split(',')[0];
            var image = imageSrc.split(',')[1];

            const response = await fetch(
                BASE_URL + "/RemoveBackground/generate",
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
            if (!response.ok) {
                throw new Error(data.error);
            }

            setResultImage(`data:image/png;base64,${data.result}`);
            toast({
                status: "success",
                title: "Yayy! 🎉",
                description: "Background removed successfully.",
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
                    Remove background
                </Heading>
                <Text>Upload file for background removal</Text>
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
                        <Tooltip
                            label={
                                imageSrc == null
                                    ? "Upload an image first"
                                    : "Convert"
                            }
                        >
                            <IconButton
                                icon={<IoArrowForward />}
                                isDisabled={imageSrc == null}
                                onClick={handleConvert}
                                isLoading={isLoading}
                            />
                        </Tooltip>
                    </Flex>

                    {/* Right side image */}
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
                            {resultImage ? (
                                <Image
                                    src={resultImage}
                                    alt="Uploaded"
                                    maxWidth="100%"
                                    maxHeight="100%"
                                    objectFit="contain"
                                />
                            ) : (
                                <Text color="gray.500">No image uploaded</Text>
                            )}
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Stack>
    );
}

export default RmbgPage;
