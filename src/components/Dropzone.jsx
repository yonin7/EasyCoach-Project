import React from "react";
import styled from "styled-components";

const DropzoneContainer = styled.div`
  background: red;
  width: 75%;
  height: 50vh;
  text-align: center;
  justify-item:center;
  margin: 0 auto;
  vertical-align: baseline;


`;
const Dropzone = (props) => {
  console.log("1");
  const onDropHandler = (e) => {
      console.log(e.dataTransfer.files);
    e.preventDefault();
    props.fileUplaodHandler(e);
  };
  return (
    <DropzoneContainer
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => onDropHandler(e)}
    >
      Drug File
    </DropzoneContainer>
  );
};

export default Dropzone;
