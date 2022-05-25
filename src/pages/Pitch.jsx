// import Input from "../components/Input";
// import BarChart from "../components/BarChart";
// import Table from "../components/Table";
// import useWindowDimensions from "../hooks/useWindowDimensions";
import PitchImg from "../assets/pitch.png";
import Puebla from "../assets/Puebla.png";
import Juarez from "../assets/Juarez.png";
import ShotsModal from "../components/ShotsModal";
import {
  MainContainer,
  Title,
  PitchContainer,
  ModalContainer,
  ImagesContainer,
  ImageContainer,
} from "./PitchStyles";

import { useSelector } from "react-redux";
import { useState } from "react";

const Pitch = () => {
  const shotsData = useSelector((state) => state.shots.shots);

  const [selectedTeam, setSelectedTeam] = useState({});
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [title, setTitle] = useState("Select Team");

  // const { width } = useWindowDimensions();

  const selectedTeamHandler = (data) => {
    setSelectedTeam(data);
    setShowTeamModal(true);
    setTitle("Shots statistics");
  };
  const onCloseHandler = () => {
    setShowTeamModal(false);
    setTitle("Select Team");
  };
  return (
    <MainContainer className="App">
      <Title>{title}</Title>
      {!showTeamModal && (
        <ModalContainer>
          <img style={{ width: "100%" }} src={PitchImg} alt="Pitch" />
          <PitchContainer>
            <ImagesContainer>
              {shotsData.map((team) => (
                <ImageContainer onClick={() => selectedTeamHandler(team)}>
                  <img
                    style={{ width: "100%" }}
                    src={team.teamName === "Puebla" ? Puebla : Juarez}
                    alt="Puebla"
                  />
                </ImageContainer>
              ))}
            </ImagesContainer>
          </PitchContainer>
        </ModalContainer>
      )}
      {showTeamModal && (
        <ShotsModal data={selectedTeam} onClose={onCloseHandler} />
      )}
    </MainContainer>
  );
};

export default Pitch;
