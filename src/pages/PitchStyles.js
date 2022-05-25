import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 40px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 93vh;
  margin: 0 auto;
  padding: 20px;
  background-image: url(https://researchoutreach.org/wp-content/uploads/2020/01/SciSports-1920x1080.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Title = styled.h1`
  color: red;
  font-size: 5rem;
  margin-bottom: 0em;
  @media screen and (max-width: 764px) {
    font-size: 2rem;
  }
`;
export const ModalContainer = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PitchContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
`;
export const ImagesContainer = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;
export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }

  @media screen and (max-width: 764px) {
    width: 50px;
    height: 50px;
  }
`;
