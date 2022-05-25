import { Grid } from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { MainContainer } from "./ShotsModalStyles";
import halfPitch from "../assets/halfPitch.png";
import Button from "@mui/material/Button";

import { useEffect, useState } from "react";

const ShotsModal = ({ data, onClose }) => {
  const { width } = useWindowDimensions();
  const [screen, setScreen] = useState("");

  useEffect(() => {
    setScreen(width);
  }, [width]);
  return (
    <MainContainer halfPitch={halfPitch}>
      <Grid
        container
      
        top={"300px"}
        height={"100%"}
        justifyContent={"space-between"}
        gap={10}
        alignItems={'center'}
        direction={'column'}
        wrap={'nowrap'}
        width={screen > "750" ? "40%" : 300}
      >
        <Grid container gap={2} width={"80%"} justifyContent={"space-between"} >
          <Grid
            item
            
            padding={2}
            border={"1px red solid"}
            borderRadius={"50%"}
            backgroundColor={"#86a1e1cc"}
            fontSize={screen > "1500" ? "2rem" : "1rem"}
          >
            {data.percentage.centerBox}
          </Grid>
          <Grid
            item
            
            padding={2}
            border={"1px red solid"}
            borderRadius={"50%"}
            backgroundColor={"#86a1e1cc"}
            fontSize={screen > "1500" ? "2rem" : "1rem"}
          >
            {data.percentage.leftBox}
          </Grid>
          <Grid
            item
            
            padding={2}
            border={"1px red solid"}
            borderRadius={"50%"}
            backgroundColor={"#86a1e1cc"}
            fontSize={screen > "1500" ? "2rem" : "1rem"}
          >
            {data.percentage.rightBox}
          </Grid>
        </Grid>
        <Grid
       
          width={"80%"}
          container
          justifyContent={"center"}
          gap={5}
          direction={"column"}
        >
          <Grid
            item
            padding={2}
            border={"1px red solid"}
            borderRadius={30}
            backgroundColor={"#86a1e1cc"}
            fontSize={screen > "1500" ? "2rem" : "1rem"}
          >
            {data.percentage.midRange}
          </Grid>
          <Grid
            item
            padding={2}
            border={"1px red solid"}
            borderRadius={30}
            backgroundColor={"#86a1e1cc"}
            fontSize={screen > "1500" ? "2rem" : "1rem"}
          >
            {data.percentage.longRange}
          </Grid>
        </Grid>
      </Grid>
      <Button onClick={onClose} variant="contained" color="error">
        Close
      </Button>
    </MainContainer>
  );
};

export default ShotsModal;
