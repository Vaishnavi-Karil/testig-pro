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

  const [userRegistration, setuserRegistration] = useState({
    firstName: "",
    lastName: "",
    EmployeeEmail: "",
    EmployeePassword: " ",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [EmployeeEmail, setEmployeeEmail] = useState("");
  const [EmployeePassword, setEmployeePassword] = useState("");

  function HandlerSubmit(e) {
    e.preventDefault(e);

    //  const  fname =  firstName;
    //  const lname = lastName;

    console.log(firstName);
    console.log(lastName);
    console.log(EmployeeEmail);
    console.log(EmployeePassword);
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
              name="firstname"
              error
              type="text"
              id="standard-error"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              name="lastname"
              error
              id="standard-error-helper-text"
              label="Last Name"
              helperText="Incorrect entry."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              name="email"
              error
              id="standard-error-helper-text"
              label="Email Id"
              helperText="Incorrect entry."
              value={EmployeeEmail}
              onChange={(e) => setEmployeeEmail(e.target.value)}
            />
            <TextField
              name="password"
              error
              id="standard-error-helper-text"
              label="Password"
              helperText="Incorrect entry."
              value={EmployeePassword}
              onChange={(e) => setEmployeePassword(e.target.value)}
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
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <h1>{EmployeeEmail}</h1>
      <h1>{EmployeePassword}</h1>
    </>
  );
}
