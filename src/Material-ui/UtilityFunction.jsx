import React from "react";
import { Container, Typography, Paper, Box, Button } from "@material-ui/core";

export default function UtilityFunction() {
  return (
    <>
      <div>
        <Container>
          <Paper
            component={Box}
            width="50%"
            p={5}
            ml={5}
            borderLeft={5}
            borderColor="secondary"
          >
            <Typography variant="h4"> Get started</Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              nesciunt odio autem debitis quasi libero. A dignissimos id fugit
              natus
            </Typography>
            <Button color="primary" variant="outlined">
              Portfolio
            </Button>
          </Paper>
        </Container>
      </div>
    </>
  );
}
