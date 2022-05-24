import { parse } from "papaparse";
import Dropzone from "./Dropzone";


const Input = (props) => {
  const fileUplaodHandler = (e) => {
    // console.log(e.target.files);
    const eventFile = e.target.files || e.dataTransfer.files
    Array.from(eventFile)
      .filter((file) => file.type === "text/csv")
      .forEach(async (file) => {
        const text = await file.text();
        console.log(text);
        const result = parse(text, {
          header: true,
        });
        const data = result.data.map((athlete) => {
          const newData = { key: athlete.Athlete, ...athlete };

          return newData;
        });
        props.data(data);
      });
  };

  console.log(props.fileUplaoded);
  return (
    <>
      {props.fileUplaoded ? (
        <input type="file" onChange={(e) => fileUplaodHandler(e)} />
      ) : (
        <Dropzone fileUplaodHandler={fileUplaodHandler} />
      )}
    </>
  );
};

export default Input;
