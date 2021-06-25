import React, { useState, useEffect } from "react";
import AppleIcon from "@material-ui/icons/Apple";
import image from "../images/image.jpg";
import Second from "./Second";
import Thirde from "./Thirde";
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { maxWidth } from "@material-ui/system";
import transitions from "@material-ui/core/styles/transitions";
const useStyles = makeStyles({
  image: {
    height: "110vh",
    backgroundPosition: "center",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    minWidth: "400px",
    maxWidth: "1000px",
    margin: 0,
    padding: 0,
  },
  textArea: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  grid: {
    position: "absolute",
    color: "white",
    cursor: "pointer",
  },
  box: {
    position: "absolute",
    height: "100vh",
    float: "right",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "300",
    color: "black",
    margin: "10px",
  },
  btn: {
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "400",
    outline: "none",
    border: "none",
  },
  hover: {
    zIndex: 100,
    "&::before": {
      content: '""',
      position: "absolute",
      height: "1.5px",
      width: "0",
      backgroundColor: "white",
      top: "6.5%",
      transition: "0.3s linear",
    },
    fontSize: "13px",
    "&:hover::before": {
      content: '"',
      width: "50px",
    },
    "&:hover": {
      opacity: 0.8,
    },
  },
  btn: {
    borderBottom: "2px solid black",
    transition: "0.3s ease-in",

    "&:hover": {
      backgroundColor: "black",
      color: "white",
      opacity: "0.75",
    },
    margin: "10px",
    width: "100px",
  },
  none: {
    display: "none",
  },
  apple: {
    transition: "0.3s linear",
    width: "50px",
    height: "50px",
    "&:hover": {
      color: "black",
    },
  },
});
const First = () => {
  const classes = useStyles();
  const [collapse, setCollapse] = useState(false);
  const [trie, setTrie] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", width);
  });
  useEffect(() => {
    if (window.innerWidth > 1500) {
      setCollapse(true);
    }
    setShow(true);
  }, []);
  const width = () => {
    if (window.innerWidth > 1200) {
      setTrie(true);
    } else {
      setTrie(false);
    }
  };
  return (
    <div>
      <Box>
        <CssBaseline />
        <Grid
          className={classes.grid}
          container
          direction="row"
          spacing={4}
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={1} lg={1}>
            <AppleIcon className={classes.apple} />
          </Grid>
          <Grid item xs={1} lg={1}>
            <Typography className={classes.hover}> Man</Typography>
          </Grid>{" "}
          <Grid item xs={1} lg={1}>
            <Typography className={classes.hover}> Women</Typography>
          </Grid>{" "}
          <Grid item xs={1} lg={1}>
            <Typography className={classes.hover}> Shop</Typography>
          </Grid>
          <Grid style={{ color: "black" }} container justify="flex-end">
            {" "}
            <Grid
              className={trie ? classes.textArea : classes.none}
              style={{}}
              item
              lg={4}
            >
              <Collapse in={collapse} {...(collapse ? { timeout: 1000 } : {})}>
                {" "}
                <Typography variant="h3">Clasic return</Typography>
                <Typography variant="h4" className={classes.text}>
                  Lorem ipsum dolor sit amet consectetur
                  <br /> adipisicing elit.
                  <br />
                  Esse, repellendus?
                </Typography>
                <Button className={classes.btn}>SHOP</Button>
              </Collapse>
            </Grid>
          </Grid>
        </Grid>
        <Collapse in={show} {...(collapse ? { timeout: 1000 } : {})}>
          {" "}
          <CardMedia className={classes.image}> </CardMedia>{" "}
        </Collapse>
      </Box>
      <Box>
        <Second />
      </Box>
      <Box>
        <Thirde />
      </Box>
    </div>
  );
};

export default First;
