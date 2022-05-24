import "./App.css";
import { useState } from "react";

import Input from "./components/Input";
import BarChart from "./components/BarChart";
import Table from "./components/Table";

import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:40px;
  justify-content:center;
  align-items: center;
  width: 100%;
  height:100vh;
`;

function App() {
  const [contacts, setContacts] = useState([]);
  const [fileUplaoded,setFileUplaoded]= useState(false)

  const setData = (data) => {
    console.log(data);
    setContacts(data);
    setFileUplaoded(true)
  };
  return (
    <MainContainer className="App">

      <Input data={setData} fileUplaoded={fileUplaoded} />
      {fileUplaoded && <BarChart data={contacts} />}
      

      {fileUplaoded && <Table data={contacts} />}
    </MainContainer>
  );
}

export default App;
