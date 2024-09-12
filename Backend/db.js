const mongoose= require('mongoose')
const mongoURI = "mongodb://localhost:27017/Noteguard"

async function connectToMongo() {
    await mongoose.connect(mongoURI).then(()=> 
        console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }
  
  module.exports = connectToMongo;