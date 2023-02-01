import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { options, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  // console.log({ search });

  useEffect(() => {
    const fetchingExerciseData = async () => {
      const bodyPartData = await fetchData(
        "https://zylalabs.com/api/392/exercise+database+api/309/list+of+body+parts",
        options
      );
      // console.log({ bodyPartData });
      setBodyPart(["all", ...bodyPartData]);
    };

    fetchingExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://zylalabs.com/api/392/exercise+database+api/313/list+of+all+exercise",
        options
      );
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setExercises("");
      setExercises(searchedExercises);
      console.log({ exerciseData });
    }
  };
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
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
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
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", padding: "20px", width: "100%" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
