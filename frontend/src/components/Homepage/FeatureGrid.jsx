import { Grid } from "@chakra-ui/react";
import FeatureCard from "../Common/FeatureCard";
import { FEATURES } from "../../data/Features";

const FeatureGrid = () => {
    return (
        <>
            <Grid
                templateColumns={{
                    base: "1fr",
                }}
                gap={4}
            >
                {FEATURES.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </Grid>
        </>
    );
};
export default FeatureGrid;
