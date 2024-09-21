import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../App";

function CountryInfoPage() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getCountryData = async () => {
        try {
            const response = await fetch(BASE_URL + `/Countries/${country}`);
            const data = await response.json();

            if (!response.ok) {
                console.log(data);
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
        getCountryData();
    }, []);

    return (
        <Stack spacing={8} direction="column">
            <Heading>Countries List</Heading>
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
                <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                    {data.map((country) => (
                        <CountryBall
                            key={country.id}
                            name={country.name}
                            flagUrl={country.flagUrl}
                        />
                    ))}
                </Grid>
            )}
        </Stack>
    );
}

export default CountryInfoPage;
