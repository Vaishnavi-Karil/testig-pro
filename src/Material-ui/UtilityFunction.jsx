import React from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50vw",
    height: "50vh",
    marginLeft: 0,
    backgroundColor: theme.palette.grey[200],
  },

  paperContaintent: {
    fontSize: 10,
  },
  paper: {
    fontSize: 20,
  },
}));
export default function UtilityFunction() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Container className={classes.root}>
          <Paper
            component={Box}
            width="100%"
            height="100%"
            borderLeft={3}
            borderColor="secondary"
            m={0}
          >
            <Typography variant="h4" className="paper">
              Get started
            </Typography>
            <Typography variant="body1" className=" paperContaintent">
              Lorem ipsum dolor sit amet consectetur A dignissimos id fugit
              natus
            </Typography>
            <Button
              color="primary"
              variant="outlined"
              className="paperContaintent"
              m={2}
            >
              Portfolio
            </Button>
          </Paper>
        </Container>
      </div>
    </>
  );
}
