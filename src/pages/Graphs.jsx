import Input from "../components/Input";
import Dropzone from "../components/Dropzone";

import BarChart from "../components/BarChart";
import Table from "../components/Table";
import {MainContainer,GraphsContainer } from "./GraphsStyles"

import { useSelector } from "react-redux";


const Graphs = () => {
  const showGraphs = useSelector((state) => state.UI.showGraphs);

  return (
    <MainContainer>
      {!showGraphs && <Dropzone />}
      <GraphsContainer>
        {showGraphs && <BarChart />}
        {showGraphs && <Input />}
      </GraphsContainer>

      {showGraphs && <Table />}
    </MainContainer>
  );
};

export default Graphs;
