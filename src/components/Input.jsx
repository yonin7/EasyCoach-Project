import { parse } from "papaparse";
import Dropzone from "./Dropzone";
import useWindowDimensions from "../hooks/useWindowDimensions";

import { dataActions } from "../store/data";
import { UIActions } from "../store/ui";
import { useDispatch, useSelector } from "react-redux";

const Input = (props) => {
  const showGraphs = useSelector((state)=>state.UI.showGraphs)

  const dispatch = useDispatch();
  const {  width } = useWindowDimensions();

  const fileUplaodHandler = async (data) => {
    const convert = async (eventFile) => {
      try {
        dispatch(dataActions.loadingToggle(true));
        const text = await eventFile.text();

        const result = parse(text, {
          header: true,
        });
        const convertedData = result.data.map((athlete) => {
          const newData = { key: athlete.Athlete, ...athlete };
          return newData;
        });

        dispatch(dataActions.loadingToggle(false));
        dispatch(dataActions.loadData(convertedData));
        dispatch(UIActions.showGraphsToggle(true));

      } catch (error) {
        console.log(error);
      }
    };

    if (data.files) {
      Array.from(data.files)
        .filter((file) => file.type === "text/csv")
        .forEach((file) => convert(file));
    } else {
      convert(data);
    }
  };

  return (
    <div style={{ right: "0", width: "50%" }}>
      {showGraphs ? (
        <input
          type="file"
          onChange={(e) => fileUplaodHandler(e.target)}
          style={{ position: "absolute", right: width < 400 ? -15 : 0 }}
        />
      ) : (
        <Dropzone fileUplaodHandler={fileUplaodHandler} />
      )}
    </div>
  );
};

export default Input;
