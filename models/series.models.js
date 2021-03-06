const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const serieSchema = new Schema(
  {
    title: String, //título
    cast: [], //elenco
    genre: String, // gênero
    image: String, //foto de capa
    description: String, //descrição
    rate: {
      //avaliação
      type: Number,
      min: 0,
      max: 10,
    },
    favoriteSeries: [{
      type: Schema.Types.ObjectId, ref: "Serie"
    }]//use populete
  },
  {
    timestamps: true,
  }
);

module.exports = model("Serie", serieSchema);
