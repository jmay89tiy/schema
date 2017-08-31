const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  faction: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  channeler: {
    type: Boolean,
    required: true
  },
  skills: {
      type: String,
      required: true
    },

  })


const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
