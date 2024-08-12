import axios from "axios";
import styled from "styled-components"
import { useState, FormEvent, useEffect } from "react";

import { Header } from "./components/Header"
import { DataDisplay } from "./components/DataDisplay";
import { Map } from "./components/Map";

interface ApiResponse {
  ip: string;
  location: {
    country: string;
    region: string;
    timezone: string;
  }
  as: {
    asn: string;
    name: string;
    route: string;
    domain: string;
    type: string;
  }
  isp: string;
}

export const App = () => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const [data, setData] = useState<ApiResponse | null>(null);
  const [position, setPosition] = useState<[number, number]>([-10.536, -51.690]);

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    
    const apiKey = "at_LPqEWbMJGn92FFdwG0Hq1NMhV4K0E"
    const URL = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&`

    try {
      const response = await axios.get(`${URL}ipAddress=${ipAddress}`)
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getCoordinates() {
      try {
        console.log({ country: data?.location.country, state: data?.location.region });
        
        await axios.get("https://nominatim.openstreetmap.org/search", {
          params: {
            country: data?.location.country,
            state: data?.location.region,
            format: "json"
          }
        })
        .then(({ data }) => {
          setPosition([data[0].lat, data[0].lon])
        })
      } catch (error) {
        console.log(error);
      }
    }
    getCoordinates();
  }, [data])

  return (
    <AppContainer>
      <Header 
        ipAddress={ipAddress}
        setIpAddress={setIpAddress}
        handleSubmit={handleSubmit}
      />
      
      <DataDisplay data={data} />

      <Map position={position} />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-height: 800px;

  @media (max-width: 768px) {
    max-height: 100vh;
  }
`