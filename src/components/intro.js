import { Box, Container, makeStyles } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { SECTION_PADDING_Y } from "utils/constants";
import Locale from "utils/localization";

const useStyles = makeStyles((theme) => ({
  desc: {
    whiteSpace: "pre-line",
  },
}));

export default function Intro(props) {
  const classes = useStyles();

  const getYears = () => {
    return moment().diff("20110815", "years");
  };

  return (
    <Box id="intro" py={SECTION_PADDING_Y}>
      <Container>
        <h1>{Locale.intro_title}</h1>
        <p className={classes.desc}>
          {Locale.formatString(Locale.intro_description, {
            expYears: getYears(),
          })}
        </p>
      </Container>
    </Box>
  );
}