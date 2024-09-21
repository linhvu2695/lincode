import React, { useEffect, useState } from "react";
import {
    Stack,
    Heading,
    Flex,
    Spinner,
    Image,
    Grid,
    Button,
    Text,
} from "@chakra-ui/react";
import { BASE_URL } from "../../App";

function CapitalQuizPage() {
    const [quiz, setQuiz] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getCapitalQuiz = async () => {
        try {
            const response = await fetch(BASE_URL + "/Countries/guessCapital");
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
                console.log(data);
            }
            setQuiz(data.result);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCapitalQuiz();
    }, []);

    const handleNextQuestion = () => {
        setIsLoading(true);
        setAnswer(null);
        getCapitalQuiz();
    };

    return (
        <Stack spacing={8} direction="column">
            <Heading>Capital Quiz</Heading>
            <Flex direction={"column"} gap={15}>
                {isLoading && (
                    <Flex justifyContent={"center"}>
                        <Spinner size={"xl"} />
                    </Flex>
                )}
                {!isLoading && quiz !== null && (
                    <Flex
                        direction={"column"}
                        gap={10}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Text fontSize={40}>Where is {quiz.capital}?</Text>
                        {answer !== null && (
                            <Button
                                mx="auto"
                                colorScheme={
                                    answer === quiz.answer ? "green" : "red"
                                }
                            >
                                {answer === quiz.answer
                                    ? "Correct. Yayy! 🎉"
                                    : "Incorrect. Try again!"}
                            </Button>
                        )}
                        <Grid
                            templateColumns="repeat(2, 1fr)"
                            gap={8}
                            mx="auto"
                        >
                            {quiz.options.map((option, index) => (
                                <Button
                                    key={index}
                                    onClick={() => setAnswer(option)}
                                    size="lg"
                                    variant="outline"
                                    borderWidth={
                                        answer === option ? "2px" : "0.5px"
                                    }
                                    borderColor={
                                        answer === option
                                            ? answer === quiz.answer
                                                ? "teal.500"
                                                : "red.500"
                                            : "gray.200"
                                    }
                                >
                                    {String.fromCharCode(65 + index)}. {option}
                                </Button>
                            ))}
                        </Grid>
                        {answer !== null && (
                            <Button
                                mx="auto"
                                colorScheme="blue"
                                onClick={handleNextQuestion}
                            >
                                Next Question
                            </Button>
                        )}
                    </Flex>
                )}
            </Flex>
        </Stack>
    );
}

export default CapitalQuizPage;
