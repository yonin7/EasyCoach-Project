import { parse } from "papaparse";
import Dropzone from 'react-dropzone-uploader';
import{ dataActions } from "../store/data";
import { UIActions } from "../store/ui";
import { useDispatch } from "react-redux";
import {baseStyle} from './DropzoneStyles'

const DropzoneTemp = (props) => {
    const dispatch = useDispatch();

    const fileUplaodHandler = async (e) => {
        const data = e.file
          try {
            dispatch(dataActions.loadingToggle(true));
            const text = await data.text();
    
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

 
  return (
     <Dropzone
     styles={{ dropzone: baseStyle }}
     getUploadParams={fileUplaodHandler}
     onChangeStatus={fileUplaodHandler}
     onSubmit={fileUplaodHandler}
     accept="/*,*"
    
   />
  );
};

export default DropzoneTemp;
