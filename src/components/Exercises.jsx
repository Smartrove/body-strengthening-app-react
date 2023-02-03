import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Stack, Box, Typography } from "@mui/material";
import { options, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log({ exercises });
  return (
    <Box id="exercises" sx={{ marginTop: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="42px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <p>{exercise.name}</p>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
