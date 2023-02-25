import React from "react";
import {
    Box,
    Text,
    SimpleGrid,
    Button,
} from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { color } from "framer-motion";
export const Reviews = () => {
    return (
        <Box
            width={"60%"}
            marginLeft={"10%"}
            //   border={"1px solid red"}
            marginBottom={20}
            backgroundColor={"white"}
        >
            <SimpleGrid
                columns={2}
                justifyContent={"space-arround"}
            // border={"1px solid red"}
            >
                <Text fontWeight={"bold"} fontSize={"20px"}>
                    User Reviews{" "}
                    <span style={{ fontWeight: "normal", fontSize: "15px", color:"blue" }}>From our happy customer</span>
                </Text>
                <Button
                    _hover={{
                        border: "1px solid #008BCF",
                        color: "white",
                        backgroundColor: "#008BCF",
                    }}
                    marginLeft={250}
                    borderRadius={0}
                    color={"#008BCF"}
                    width={100}
                    backgroundColor={"white"}
                    border={"1px solid blue"}
                >
                    Show More
                </Button>
            </SimpleGrid>

            <Box>
                <SimpleGrid columns={2}>
                    <Box
                        //   border={"1px solid red"} 
                        width={"100%"} padding={5}>
                        <Text fontWeight={"bold"}>
                            {" "}
                            <FaQuoteLeft style={{ color: "Orange" }} /> Sunil Wada
                        </Text>
                        <SimpleGrid
                            columns={2}
                            borderBottom={"1px solid gray"}
                            marginBottom={5}
                        >
                            <Text>Pune</Text>
                            <Text>19:40 Sep 19,2016</Text>
                        </SimpleGrid>
                        <Text>
                            This is very best srvices.Intially i always use OLX but when i
                            came to know about door step service of quikr i start using it.it
                            is very good.Keep up the great work Quikr.{" "}
                            <FaQuoteRight style={{ color: "Orange" }} />
                        </Text>
                    </Box>
                    <Box
                        //    border={"1px solid red"} 
                        width={"100%"} padding={5}>
                        <Text fontWeight={"bold"}>
                            {" "}
                            <FaQuoteLeft style={{ color: "Orange" }} /> Saad Ahmad
                        </Text>
                        <SimpleGrid
                            columns={2}
                            borderBottom={"1px solid gray"}
                            marginBottom={5}
                        >
                            <Text>Bengalore</Text>
                            <Text>17:14 Sep 10,2018</Text>
                        </SimpleGrid>
                        <Text>
                            It was really greate experience. Quiker come to doorstep and took my item and deliver to buyer.
                            I need not to go anywhere. In my convenient time they come and pick mmy item.
                            That really superb service.
                            {" "}
                            <FaQuoteRight style={{ color: "Orange" }} />
                        </Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
};