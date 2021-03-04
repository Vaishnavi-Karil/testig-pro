import React from "react";
import { Container, Typography, Paper, Box, Button } from "@material-ui/core";
import lightGreen from "@material-ui/core/colors/lightGreen";
import Icon from "@material-ui/core/Icon";
import purple from "@material-ui/core/colors/purple";
import pink from "@material-ui/core/colors/pink";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

export default function IconsMatrial() {
  return (
    <Container maxWidth="sm">
      <Typography>Material -Ui</Typography>
      <Paper component={Box} p={3}>
        <Icon color="secondary" style={{ fontSize: 20 }}>
          g_translate
        </Icon>
        <Icon style={{ fontSize: 20, color: lightGreen[500] }}>
          g_translate
        </Icon>
        <Icon
          style={{ fontSize: 20, color: purple[500] }}
          className="fab fa-accessible-icon"
        />
        <Box mt={3}>
          <Button style={{ fontSize: 10, color: pink[500] }} variant="outlined">
            READ ME
          </Button>
        </Box>
        <Box mt={3}>
          <Button
            style={{ fontSize: 10, color: pink[500] }}
            variant="contained"
            fullWidth
            size="large"
            startIcon={<AlternateEmailIcon />}
            endIcon={<AlternateEmailIcon />}
          >
            READ ME
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
