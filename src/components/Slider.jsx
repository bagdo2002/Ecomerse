import React from "react";
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
} from "@material-ui/core";
import Carousel from "react-elastic-carousel";
export const Slider = ({ image, xs }) => {
  return (
    <div className="box">
      <Grid item lg={12} xs={12} className={xs}>
        <CardMedia className={image}></CardMedia>
      </Grid>{" "}
    </div>
  );
};
