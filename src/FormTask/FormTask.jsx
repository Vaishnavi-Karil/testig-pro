import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function FormTask() {
  const classes = useStyles();

  const [data, setData] = useState("");
  const [password, setPassword] = useState("");

  function HandlerSubmit(e) {
    e.preventDefault(e);
  }
  return (
    <>
      <div>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            HandlerSubmit(e);
          }}
        >
          <div>
            <TextField
              name="email"
              error
              type="email"
              id="standard-error"
              label="User Name"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <TextField
              name="password"
              error
              id="standard-error-helper-text"
              label="Password"
              helperText="Incorrect entry."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="outlined"
              aria-label="delete"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
