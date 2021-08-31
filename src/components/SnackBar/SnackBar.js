import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSnackChanges } from "../../redux/ActionCreator";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const dispatch = useDispatch();

  const handler = (prop, value) => {
    dispatch(handleSnackChanges({ prop: prop, value: value }));
  };

  const isVisible = useSelector((state) => state.snack.isVisible);
  const msg = useSelector((state) => state.snack.msg);
  const severity = useSelector((state) => state.snack.severity);

  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    handler("isVisible", !isVisible);
  };

  const { vertical, horizontal } = { vertical: "top", horizontal: "right" };
  return (
    <div className={classes.root}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={isVisible}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
