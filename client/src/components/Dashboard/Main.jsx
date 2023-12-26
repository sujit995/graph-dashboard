import { useState, useEffect } from "react";
import { Box, ChakraProvider, Flex, Grid } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import IntensityChart from "./IntensityChart";
import RegionChart from "./RegionChart";
import TopicChart from "./TopicChart";
import RelevanceChart from "./Relevance";
import SectorChart from "./SectorChart";
import LikelihoodRadarChart from "./LikelihoodChart";
import CountryChart from "./Country";

Chart.register(CategoryScale);

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:8080";
      try {
        const response = await axios.get(`${API_URL}/api/data`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <ChakraProvider>
      <Flex h="100vh">
        <Sidebar />

        <Flex direction="column" flex="1" overflowX="none">
          <Box p="4" bg="blue.500" color="white">
            <Navbar />
          </Box>
          <Box>
            <Flex flex="1" p="1">
              <Box flex="1" borderWidth="1px" borderRadius="lg">
                <IntensityChart data={data} />
              </Box>
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} m={50}>
              <Box
                flex={{ base: "1", md: "0.5" }}
                maxW="50%"
                p={5}
                m={2}
                boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
                borderRadius={20}
              >
                <RegionChart data={data} />
              </Box>
              <Box
                flex={{ base: "1", md: "0.5" }}
                maxW="50%"
                p={5}
                m={2}
                boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
                borderRadius={20}
              >
                <TopicChart data={data} />
              </Box>
            </Flex>
            <RelevanceChart data={data} />
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <SectorChart data={data} />
              </Box>
              <Box>
                <LikelihoodRadarChart data={data} />
              </Box>
            </Grid>
            <CountryChart data={data} />
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default Main;
