import React from "react";
import styled from "styled-components";
import Dropzone from 'react-dropzone-uploader';

const DropzoneContainer = styled.div`
    display:flex;
  background: red;
  width: 75%;
  height: 50vh;
  align-items: center;
  align-content: center;
  justify-content: center;

  &:hover {
    cursor: grab;
  }


`;
const baseStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    maxHeight: '90vh',
    width: '100%',
    objectFit: 'contain',
    flexDirection: 'column',
    // padding: "20px",
    borderWidth: 2,

    color: '#bdbdbd ',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor: 'pointer',
    overflow: 'hidden',
    border: '10px dashed #eeeeee',
  };
const DropzoneTemp = (props) => {

  const onDropHandler = (e) => {    
    props.fileUplaodHandler( e.file);
  };
  return (
    // <DropzoneContainer
    //   onDragOver={(e) => {
    //     e.preventDefault();
    //   }}
    //   onDrop={(e) => onDropHandler(e)}
    //   onClick={(e) => onDropHandler(e)}
    // >
    //   <p >Drag & drop some files here, or click to select files</p>
    //   <input style={{width:"100%", height:'100%',}} type="file" onChange={(e) => onDropHandler(e)} />
    // </DropzoneContainer>
     <Dropzone
     styles={{ dropzone: baseStyle }}
     getUploadParams={onDropHandler}
     onChangeStatus={onDropHandler}
     onSubmit={onDropHandler}
     accept="/*,*"
    
   />
  );
};

export default DropzoneTemp;
