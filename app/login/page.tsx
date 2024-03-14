"use client";
import styled from "@emotion/styled";
import { Card, Input } from "@nextui-org/react";
import React from "react";
import MainTitleName from "../components/content/MainTitleName";

type Props = {};

const StyledLoginCard = styled(Card)`
  background: linear-gradient(199deg, black 0%, rgb(57, 203, 203, 0.7) 100%);
  box-shadow: 0px 4px 4px rgba(57, 203, 203, 0.71);
  border: 2px solid rgb(57, 203, 203);
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;

const StyledInput = styled(Input)`
  margin: 1rem;
  width: 80%;
  padding: 1rem;
  border: 2px solid rgba(57, 203, 203, 0.71);
  border-radius: 1rem;
  background: linear-gradient(199deg, black 0%, rgb(0, 0, 0, 0.2) 100%);
`;

const page = (props: Props) => {
  return (
    <div
      style={{
        height: "92vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledLoginCard className="w-full mx-6 border lg:w-1/2 h-3/4">
        <h1>Login or Sign Up</h1>
        <StyledInput placeholder="Email" />
        <StyledInput placeholder="Password" type="password" />
        <p>Click Here To Sign Up</p>
      </StyledLoginCard>
    </div>
  );
};

export default page;
