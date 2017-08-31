const mongoose = require('mongoose')
const Players =require('./models/CollectorItems')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/peopledb') // is  needed


function getAll () {
  return Players.find()
} // get all info from schema


function findChar (charId) {
  return Players.find({_id: charId}).catch(function (err) {
    console.log(err)
    //get char by name i.e. fade
  })
}

function addChar (newChar) {
  let charachter = new Players(newChar)
  charachter.save(function (err){
    console.log(err)
  })
  return Promise.resolve('You feel the weave tighten around you, Success!')
  // add char complete when above sentence displays
}

function deleteChar (charId) {
  return Players.deleteOne({ _id: charId})
} // deletes single char based off of id given

module.exports = {
  getAll,
  addChar,
  findChar,
  deleteChar,
}
