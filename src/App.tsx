import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

const RepoItem = styled.div`
  background: rgba(187, 67, 187, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  /* padding: 1rem; */
`;

const Container = styled.div`
  margin: 2rem;
  display: grid;
  grid-gap: 1rem;

  /* @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  } */

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const InfoContainer = styled.div`
  padding: 1rem;
`;

const fetcher = (url: any) => fetch(url).then((res) => res.json());

function App() {
  // const { data, error } = useSWR(
  //   "https://sheet.best/api/sheets/825b6498-0384-4726-bd63-d951628db88c",
  //   fetcher,
  // );
  // console.log("data : ", data);

  const getUrl = async () => {
    const axios = await import("axios");
    //@ts-ignore
    // const username = item?.Instragram?.replace(
    //   "https://www.instagram.com/",
    //   "",
    // );
    // const url = `https://www.instagram.com/${username}?__a=1`;
    // console.log("url : ", url);
    // //@ts-ignore
    // const { data } = await axios.get(
    //   `https://cors-proxy.htmldriven.com/?url=${url}`,
    // );
    // console.log("data : ", data);
    return "";
  };
  getUrl();
  return (
    <Container>
      <h2>repo</h2>
      {/* {data?.map((item, index) => {
        return (
          <RepoItem key={index}>
            <img
              width={"100%"}
              height={200}
              style={{ objectFit: "cover", borderRadius: "10px 10px 0px 0px" }}
              src={getUrl(item)}
            />
            <InfoContainer>
              <a href={item?.Instragram} style={{ textDecoration: "none" }}>
                {item?.Instragram?.replace(
                  "https://www.instagram.com/",
                  "",
                ).replace("/", "")}
              </a>
            </InfoContainer>
          </RepoItem>
        );
      })} */}
    </Container>
  );
}

export default App;
