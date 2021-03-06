import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import useWindowDimensions from "./hooks/useWindowDimensions";
import { useSelector } from "react-redux";
import {ChartContainer} from './BarChartStyles'


const BarChart = (props) => {
  const data = useSelector((state) => state.data.data);
  //   const { data } = props;
  const [names, setNames] = useState([]);
  const [rates, setRates] = useState([]);
  const [ability, setAbility] = useState("Athlete");
    const [averageLine, setAverageLine] = useState([]);

  useEffect(() => {
    const arrayOfNames = data.map((player) => player.Athlete);
    const abilityRate = data.map((player) => player[`${ability}`]);

    const convertedAbility = abilityRate.map((str) => {
      if (!str) {
        return parseInt("0");
      }
      return parseInt(str);
    });
    console.log(convertedAbility);
    const averageLineCalculator = convertedAbility.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    )/convertedAbility.length
    
    const newArr =convertedAbility.map((rate)=>parseInt(averageLineCalculator));

    setAverageLine(newArr);
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
        {
          name: "Average",
          type: "line",
          data: averageLine,
        },
    ],
    options: {
      chart: {
        height: 400,
        type: "line",

        foreColor:'red',
        background: '#fff',
        opacityTo:0.6,
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "50%",
        },

      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1],
      },
      xaxis: {
        categories: names,
        labels: {
          rotate: -45,
        },        
      },
      noData: {
        text: "Loading...",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
            color:'red',
            fontSize: "14px",
          fontFamily: "Helvetica",
        },
      },
      title:{
          text: `Athlete's Statistics`,
          align:'center',
          margin:20,
          offsetY:20,
          style:{
              fontSize:'25px',
              color:'red',
          }
      }
    },
  };

  const AbilitySelectorHandler = (e) => {
    const value = e.target.value;
    setAbility(value);
  };

  return (
    <ChartContainer>
      {data && (
        <Box sx={{ width: "50%", right: 0, height: "300px" }}>
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
        type="line"
        width="100%"
        height="100%"
      />
    </ChartContainer>
  );
};

export default BarChart;
