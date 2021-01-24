import { Grid, makeStyles, useScrollTrigger, Zoom } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "fill-available",
  },
}));

export default function Company(props) {
  const company = props.company;
  const imgSrc = require(`../assets/img/companies/${company.img}`).default;
  const classes = useStyles();
  const [transitionShown, setTransitionShown] = React.useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  return (
    <Zoom
      in={transitionShown || trigger}
      style={{ transitionDelay: props.delay }}
      onEnter={() => setTransitionShown(true)}
    >
      <Grid item xs={6} sm={4} md={company.md}>
        <img src={imgSrc} alt={company.alt} className={classes.img} />
      </Grid>
    </Zoom>
  );
}