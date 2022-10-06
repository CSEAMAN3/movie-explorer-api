// create express app

// Create an end point called favourites

// It needs to accept 1 query param called title
// Filter favourites.json by that title
// return something that can be displayed on the page if the title searched for is in favourites.json

// REMEMBER TO NPM START ON MY FRONT END - REACT
// REMEMBER TO NODEMON SERVER ON THE BACK END - API

"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const favourites = require("./data/favourites.json");

const app = express();

app.use(cors());

const getMovie = (title) => {
  const movieObj = favourites.find((movie) => movie.Title === title);
  return movieObj;
};

app.get("/", (request, response) => {
  response.send("Home Root");
});

app.get("/favourites", (request, response) => {
  const title = request.query.title || "Error, your movie does not exist";

  let favList = getMovie(title);

  response.status(200).json(favList);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
