import React from "react";
import { Flex, Image, useColorMode } from "@chakra-ui/react";
import { IoLogoTiktok } from "react-icons/io5";
import WorkExpCard from "./WorkExpCard";

function WorkExpList() {
    const { colorMode } = useColorMode();

    return (
        <Flex direction={"column"} gap={2} px={10} width={"100%"}>
            <WorkExpCard
                postion={"Software Engineer"}
                company={"OrangeLogic"}
                duration={"Feb 23 - Now"}
                location={"Ho Chi Minh City"}
                logo={
                    <Image
                        width={12}
                        height={6}
                        src="/ol.png"
                        alt="OrangeLogic logo"
                        filter={colorMode === "dark" ? "invert(1)" : "none"}
                    />
                }
                description={
                    "Develop and stabilize Orange Logic web app product Cortex, one of the most innovative Digital Asset Management systems on the market. Focus on delivering new features for the Search and Indexing modules. Develop the foundation for AI Inference module for the system."
                }
            />
            <WorkExpCard
                postion={"Backend Engineer"}
                company={"Bytedance"}
                duration={"May 22 - Dec 2022"}
                location={"Singapore"}
                logo={<IoLogoTiktok size={"1.5rem"} />}
                description={
                    "Develop R&D products for HDFS infrastructure supporting all core products and business lines."
                }
            />
            <WorkExpCard
                postion={"Senior Failure Analysis Engineer"}
                company={"Qualcomm"}
                duration={"Aug 17 - Aug 2021"}
                location={"Singapore"}
                logo={
                    <Image
                        width={6}
                        height={6}
                        src="/QCOM.D.svg"
                        alt="Qualcomm logo"
                        filter={colorMode === "light" ? "invert(1)" : "none"}
                    />
                }
                description={
                    "Perform a complete analysis of Qualcomm products (System-on Chip/5G modem/automotive chipset) to determine the root cause of the failure."
                }
            />
            <WorkExpCard
                postion={"Internship"}
                company={"Broadcom"}
                duration={"Jun 15 - Dec 2015"}
                location={"Singapore"}
                logo={
                    <Image
                        width={6}
                        height={6}
                        src="/broadcom.svg"
                        alt="Broadcom logo"
                        filter={colorMode === "dark" ? "invert(1)" : "none"}
                    />
                }
            />
        </Flex>
    );
}

export default WorkExpList;
