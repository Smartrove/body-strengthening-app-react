import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={600}
        sx={{
          fontSize: {
            lg: "43px",
            xs: "29px",
          },
        }}
        textAlign="center"
        mb="50px"
      >
        Awesome Exercises <br /> You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "500px", border: "none", borderRadius: "5px" },
            width: {
              lg: "800px",
              xs: "290px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search exercises"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          className="search-btn"
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
