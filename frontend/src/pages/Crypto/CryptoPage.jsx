import { Flex, Grid, Heading, Spinner, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CoinCard from "../../components/CryptoPage/CoinCard";
import { BASE_URL } from "../../App";

const CRYPTOS = [
    "bitcoin",
    "ethereum",
    "binancecoin",
    "tether",
    "ripple",
    "cardano",
    "solana",
    "dogecoin",
    "matic-network",
    "usd-coin",
    "polkadot",
    "avalanche-2",
    "litecoin",
    "chainlink",
    "shiba-inu",
    "uniswap",
    "stellar",
    "bitcoin-cash",
    "vechain",
    "filecoin",
];

function CryptoPage() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getCryptoData = async () => {
        try {
            const response = await fetch(
                BASE_URL + "/Crypto/data?ids=" + CRYPTOS.join(",")
            );
            const data = await response.json();

            if (!response.ok) {
                console.log(data);
                throw new Error(data.error);
            }
            setData(data.result);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCryptoData();
    }, []);

    return (
        <Stack spacing={8} direction="column">
            <Heading>Cryptocurrency</Heading>
            {isLoading && (
                <Flex
                    width={"100%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Spinner size={"xl"} />
                </Flex>
            )}
            {!isLoading && data != null && (
                <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                    {data.map((crypto) => (
                        <CoinCard key={crypto.id} info={crypto} />
                    ))}
                </Grid>
            )}
        </Stack>
    );
}

export default CryptoPage;
