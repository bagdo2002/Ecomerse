import React, { useState, useEffect } from "react";
import { Slider } from "./Slider";
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
  ButtonGroup,
  Collapse,
  Zoom,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import Carousel from "react-elastic-carousel";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
const useStyles = makeStyles({
  box: {
    height: "40vh",
  },
  image1: {
    backgroundImage: `url(${image1})`,
    height: "520px",
    width: "400px",
    cursor: "pointer",
    transition: "0.2s ease-in",
    margin: "0",
    "&:hover": {
      opacity: "0.9",
    },
  },
  image2: {
    backgroundImage: `url(${image2})`,
    height: "520px",
    width: "400px",
    cursor: "pointer",
    transition: "0.2s ease-in",
    margin: "0",
    "&:hover": {
      opacity: "0.9",
    },
  },
  image3: {
    backgroundImage: `url(${image3})`,
    height: "520px",
    width: "400px",
    cursor: "pointer",
    transition: "0.2s ease-in",
    margin: "0",
    "&:hover": {
      opacity: "0.9",
    },
  },
  xs: { display: "flex", justifyContent: "center", alignItems: "center" },
  tool: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px",
  },
});
const Thirde = () => {
  const classes = useStyles();
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 800, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
  ];
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  });
  const scroll = () => {
    const scroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) === 936) {
      setCollapse(true);
    }
    console.log(Math.ceil(scrolled) === 936 ? true : false);
  };
  return (
    <div>
      <Box className={classes.box}>
        <Toolbar className={classes.tool}>
          <Typography variant="h4">Hello world i am here</Typography>
        </Toolbar>

        <Grid container>
          {" "}
          <Zoom in={collapse}>
            <Carousel breakPoints={breakPoints}>
              <Slider image={classes.image1} xs={classes.xs} />
              <Slider image={classes.image2} xs={classes.xs} />
              <Slider image={classes.image3} xs={classes.xs} />
            </Carousel>
          </Zoom>
        </Grid>
      </Box>
    </div>
  );
};

export default Thirde;
