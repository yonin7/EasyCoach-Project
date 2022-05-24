import { useLocation,useHistory } from 'react-router';

import styled from "styled-components";

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

const NotFound = () => {
  const history = useHistory()
  const location = useLocation()
  return (
    <MainContainer className="App">
        not found
    </MainContainer>
  );
};

export default NotFound;
