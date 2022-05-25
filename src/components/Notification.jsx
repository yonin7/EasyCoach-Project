import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { useSelector, useDispatch } from "react-redux";
import { UIActions } from "../store/ui";
import MuiAlert from "@mui/material/Alert";

const Alert = function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
};

const Notification = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.UI.message);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(UIActions.messageHandler(null));
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={Boolean(message)}
        autoHideDuration={1500}
        onClose={handleClose}
        action={action}
      >
        <Alert severity="error">{message}</Alert>
      </Snackbar>
    </div>
  );
};
export default Notification;
