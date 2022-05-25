import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  min-height: 65vh;
  padding-top: 200px;

  margin: 0 auto;
  background-image:${(props) => `url(${props.halfPitch})`}; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 15px;
  @media screen and (max-width: 1490px) {
    width: 100%;
    padding-top: 90px;
    max-height: 50vh;
    background-size: cover;

  }

`;