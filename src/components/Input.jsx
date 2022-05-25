import { parse } from "papaparse";
import { dataActions } from "../store/data";
import { UIActions } from "../store/ui";
import { useDispatch } from "react-redux";
import {InputContainer} from './InputStyle'
const Input = (props) => {
  const dispatch = useDispatch();

  const fileUplaodHandler = (e) => {
    Array.from(e.target.files)
      .filter((file) => file.type === "text/csv")
      .forEach(async (eventFile) => {
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
      });
  };

  return (
    <InputContainer>
      <input
        type="file"
        onChange={(e) => fileUplaodHandler(e)}
        style={{ width: "90%", right: 0 }}
      />
    </InputContainer>
  );
};

export default Input;
