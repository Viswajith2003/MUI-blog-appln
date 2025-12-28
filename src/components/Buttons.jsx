import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

export default function Buttons() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: "skyblue",
    color: theme.palette.otherColor.main,
    margin: 5,
    "&:hover": {
      backgroundColor: "black",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));
  return (
    <div>
      <h1>MUi app</h1>
      <BlueButton>Hello</BlueButton>
    </div>
  );
}
