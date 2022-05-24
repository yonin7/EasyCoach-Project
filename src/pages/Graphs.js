import Input from "../components/Input";
import BarChart from "../components/BarChart";
import Table from "../components/Table";
import useWindowDimensions from "../hooks/useWindowDimensions";

import styled from "styled-components";
import { useSelector } from "react-redux";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  minheight: 100vh;
  margin: 0 auto;
  padding: 20px;
`;

const Graphs = () => {
    const showGraphs = useSelector((state)=>state.UI.showGraphs)
    console.log(showGraphs);
  const {  width } = useWindowDimensions();
  
  return (
    <MainContainer className="App">
      {width > 500 && <Input  />}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {showGraphs && <BarChart/>}
        {width < 500 && <Input />}
      </div>

      {showGraphs && <Table />}
    </MainContainer>
  );
};

export default Graphs;
