const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PlayerSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 2
    },
    position: {
        type: String,
        required: true
    },
    isPlaying: {
        type: Boolean,
        default: true
    },
    isNotPlaying: {
        type: Boolean,
        default: false
    },
    isUndecided: {
        type: Boolean,
        default: false
    },
    _team: {
        type: Schema.Types.ObjectId,
        ref: "Team"}
}, {timestamps: true});

mongoose.model("Player", PlayerSchema);