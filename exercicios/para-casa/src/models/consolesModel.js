const mongoose = require ("mongoose");

const consoleSchema = new mongoose.Schema(
    {
      _id:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
      },
      name:{
        type: String,
        require: true,
        unique: true
      },
      developer:{
        type: String,
        require: true,
      },
      realeaseDate:{
        type: Number,
        require: true
      },
      display:{
        type: [String],
        required: true
      },
      storageCapacities:{
        type: [String],
        required: true

      },
      numberOfPlayers:{
        type: [Number],
        required: true
      },
      available:{
        type: Boolean,
        required: true
      },
      description :{
        type: String,
        minLenght: 0,
        maxLenght: 1000,
        default: "no description"
      },
    },
    {timestamp:true},
);

const Model = mongoose.model("Console",consoleSchema)

module.exports = Model