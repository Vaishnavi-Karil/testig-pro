import React from "react";
import { Container, Typography, Paper, Box, Button } from "@material-ui/core";
// import lightGreen from "@material-ui/core/colors/lightGreen";
// import purple from "@material-ui/core/colors/purple";
import pink from "@material-ui/core/colors/pink";

export default function Icons() {
  return (
    <Container>
      <Typography>Material -Ui</Typography>
      <Paper component={Box} p={3}>
        {/* <Icon color="secondary" style={{ fontSize: 100 }}>
          g_translate
        </Icon>
        <Icon style={{ fontSize: 100, color: lightGreen[500] }}>
          g_translate
        </Icon> */}
        {/* <Icon
          style={{ fontSize: 100, color: purple[500] }}
          className="fab fa-accessible-icon"
        /> */}
        <Box mt={3}>
          <Button style={{ fontSize: 50, color: pink[500] }} variant="outlined">
            READ ME
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
