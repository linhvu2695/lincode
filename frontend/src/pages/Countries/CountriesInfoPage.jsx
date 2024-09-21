import { Flex, Grid, Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../App";
import CountryBall from "../../components/CountriesPage/CountryBall";
import { IoCaretForward } from "react-icons/io5";
import CountryInfo from "../../components/CountriesPage/CountryInfo";

function CountriesInfoPage() {
    const [data, setData] = useState(null);
    const [countryName, setCountryName] = useState(null);
    const [countryData, setCountryData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getCountriesData = async () => {
        try {
            const response = await fetch(BASE_URL + "/Countries/balls");
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

    const getCountryData = async (name) => {
        try {
            const response = await fetch(
                BASE_URL + `/Countries/info?country=${name}`
            );
            const data = await response.json();

            if (!response.ok) {
                console.log(data);
                throw new Error(data.error);
            }
            setCountryData(data.result);
        } catch (error) {
            console.error(error);
        }
    };

    const resetCountryData = () => {
        setCountryName(null);
        setCountryData(null);
    };

    const isCountrySelected = () => {
        return countryName != null && countryData != null;
    };

    const handleCountryClick = (name) => {
        setCountryName(name);
        getCountryData(name);
    };

    useEffect(() => {
        getCountriesData();
    }, []);

    return (
        <Stack spacing={8} direction="column">
            <Heading
                gap="12px"
                style={{ display: "flex", alignItems: "center" }}
            >
                <Text
                    _hover={{ color: "teal.200" }}
                    cursor={"pointer"}
                    onClick={() => resetCountryData()}
                >
                    Countries List
                </Text>
                {countryName && (
                    <>
                        <IoCaretForward size={"1.2rem"} /> {countryName}
                    </>
                )}
            </Heading>
            {isLoading && (
                <Flex
                    width={"100%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Spinner size={"xl"} />
                </Flex>
            )}
            {!isLoading && !isCountrySelected() && data != null && (
                <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                    {data.map((country, index) => (
                        <CountryBall
                            key={index}
                            name={country.name}
                            flagUrl={country.flagUrl}
                            onClick={() => handleCountryClick(country.name)}
                        />
                    ))}
                </Grid>
            )}
            {!isLoading && isCountrySelected() && (
                <CountryInfo info={countryData}></CountryInfo>
            )}
        </Stack>
    );
}

export default CountriesInfoPage;
