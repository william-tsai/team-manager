const mongoose = require("mongoose");
// const autoIncrement = require("mongodb-autoincrement");
const Schema = mongoose.Schema;
  
const TeamSchema = new Schema({
    name: {
        type: String,
        required: true, 
        trim: true, 
        minlength: 2
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: "Player",
        unique: true
    }],
    _user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

mongoose.model("Team", TeamSchema);
// mongoose.plugin(autoIncrement.mongoosePlugin);