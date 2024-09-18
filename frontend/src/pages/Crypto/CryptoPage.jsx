import { Flex, Grid, Heading, Spinner, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CoinCard from "../../components/CryptoPage/CoinCard";
import { BASE_URL } from "../../App";

function CryptoPage() {
    const CRYPTOS = ["bitcoin", "ethereum", "solana", "tether", "ripple", "litecoin", "cardano", "polkadot", "binancecoin"];

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getCryptoData = async () => {
        try {
            const response = await fetch(
                BASE_URL + "/Crypto/data?ids=" + CRYPTOS.join(",")
            );
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }
            console.log(data);
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
