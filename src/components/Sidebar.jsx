import { Box } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import React from "react";

export default function Sidebar() {
  return (
    <Box
      bgcolor="lightBlue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
}
