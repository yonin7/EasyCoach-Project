import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  width: 85%;
  height:400px;
`;

const BarChart = (props) => {
  const { data } = props;
  console.log(data);
  const [names, setNames] = useState([]);
  const [rates, setRates] = useState([]);
  const [ability, setAbility] = useState("");
  const [averageLine, setAverageLine] = useState();

  useEffect(() => {
    const arrayOfNames = data.map((player) => player.Athlete);
    const abilityRate = data.map((player) => player[`${ability}`]);
    console.log(abilityRate);

    // const convertedAbility = abilityRate.map((str) => {
    //   if (!str) {
    //     return parseInt("0");
    //   }
    //   return parseInt(str);
    // });
    // console.log(convertedAbility);
    // const averageLineCalculator = convertedAbility.reduce(
    //   (previousValue, currentValue) => previousValue + currentValue,
    //   0
    // );

    // setAverageLine(averageLineCalculator);
    setNames(arrayOfNames);
    setRates(abilityRate);
  }, [data, ability]);

  const barData = {
    series: [
      {
        name: "AthletesRates",
        type: "column",
        data: rates,
      },
    //   {
    //     name: "Average",
    //     type: "line",
    //     data: averageLine,
    //   },
    ],
    options: {
      chart: {
        height: 400,
        type: "bar",
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: names,
        labels: {
          rotate: -45,
        },
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
        },
      },
    },
  };

  console.log(ability);
  const AbilitySelectorHandler = (e) => {
    const value = e.target.value;
    setAbility(value);
  };

  return (
    <ChartContainer id="chart">
      {data && (
        <Box sx={{ width: "100%", right: 0 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Ability</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ability}
              label="Ability"
              onChange={(e) => AbilitySelectorHandler(e)}
            >
              {Object.keys(data[0]).map((ability) => (
                <MenuItem value={ability}>{ability}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}

      <ReactApexChart
        options={barData.options}
        series={barData.series}
        type="bar"
        width="100%"
        height='100%'

      />
    </ChartContainer>
  );
};

export default BarChart;