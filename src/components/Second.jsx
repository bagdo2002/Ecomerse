import React, { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  AppBar,
  List,
  ListItem,
  Typography,
  CssBaseline,
  Container,
  Grid,
  Paper,
  CardMedia,
  Button,
  Collapse,
  Zoom,
  Grow,
  Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
const useStyle = makeStyles({
  box: {
    height: "60vh",
    margin: "40px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image1: {
    height: "300px",
    width: "200px",
    backgroundImage: `url(${image1})`,

    left: "200px",
    cursor: "pointer",
    transition: "0.2s ease-in",
    "&:hover": {
      opacity: "0.9",
    },
  },
  image2: {
    height: "300px",
    width: "200px",
    backgroundImage: `url(${image2})`,

    left: "200px",
    cursor: "pointer",
    transition: "0.2s ease-in",
    "&:hover": {
      opacity: "0.9",
    },
  },
  image3: {
    height: "300px",
    width: "200px",
    backgroundImage: `url(${image3})`,

    left: "200px",
    cursor: "pointer",
    transition: "0.2s ease-in",
    "&:hover": {
      opacity: "0.9",
    },
  },
  tool: {
    height: "200px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexDirection: "column",
    fontFamily: "Roboto",
    padding: "10px",
    cursor: "pointer",
  },

  btn: {
    "&::after": {
      content: '""',
      position: "absolute",
      height: "2.5px",
      width: "0",
      backgroundColor: "black",
      top: "80.5%",
      transition: "0.3s linear",
    },
    fontSize: "16px",
    "&:hover::after": {
      content: '"',
      width: "60px",
    },
    "&:hover": {
      opacity: 0.8,
    },
    border: "none",
  },
});
const Second = () => {
  const classes = useStyle();
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  });
  const scroll = () => {
    if (window.innerHeight < 1000) {
      setCollapse(true);
    }
  };
  return (
    <div>
      <Box className={classes.box}>
        <Grid container>
          <CssBaseline />
          <Zoom
            in={collapse}
            style={{ transitionDelay: collapse ? "500ms" : "0ms" }}
          >
            <Grid item xs={12} lg={4} className={classes.container}>
              <CardMedia className={classes.image1}></CardMedia>
              <Toolbar className={classes.tool}>
                <Typography variant="h6">Real comfort by Bagdo</Typography>
                <Button className={classes.btn}>Shop</Button>
              </Toolbar>
            </Grid>
          </Zoom>{" "}
          <Grid itemxs={12} lg={4} className={classes.container}>
            <CardMedia className={classes.image2}></CardMedia>{" "}
            <Toolbar className={classes.tool}>
              <Typography variant="h6">Real comfort by Bagdo</Typography>
              <Button className={classes.btn}>Shop</Button>
            </Toolbar>
          </Grid>
          <Grid item xs={12} lg={4} className={classes.container}>
            <CardMedia className={classes.image3}></CardMedia>{" "}
            <Toolbar className={classes.tool}>
              <Typography variant="h6">Real comfort by Bagdo</Typography>
              <Button className={classes.btn}>Shop</Button>
            </Toolbar>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Second;
