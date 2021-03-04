import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Forms() {
  const formValues = useState({
    userName: "",
    password: "",
    mailId: "",
  });

  const FormSubmitHandler = (event) => {
    event.preventDefault();
  };

  const classes = useStyles();
  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.root}
        onSubmit={(event) => FormSubmitHandler(event)}
      >
        <TextField
          label="User Name"
          type="email"
          value={formValues[0].userName}
          onChange={(event) =>
            formValues[1]((previousState) => ({
              userName: event.target.value,
              password: previousState.password,
              mailId: previousState.mailId,
            }))
          }
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          value={formValues[0].password}
          onChange={(event) =>
            formValues[1]((previousState) => ({
              password: event.target.value,
              userName: previousState.userName,
              mailId: previousState.mailId,
            }))
          }
        />
        <TextField
          label="Email id"
          variant="outlined"
          type="email"
          value={formValues[0].mailId}
          onChange={(event) =>
            formValues[1]((previousState) => ({
              mailId: event.target.value,
              password: previousState.password,
              userName: previousState.userName,
            }))
          }
        />
        <Button type="submit">submit</Button>
      </form>
    </>
  );
}
