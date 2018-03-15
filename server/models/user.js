const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 12
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 12
    },
    email: {
        type: String, 
        trim: true,
        lowercase: true,
        required: [true, "Email is required"], 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: true
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: "Team"
    }]
}, {timestamps: true})

UserSchema.pre("save", function(next) {
    var self = this;
    console.log(self.password);
    if (self.isNew == true) {
        bcrypt.hash(self.password, 10, function(err, hash){
            if (err) {
                console.log(err);
            } else {
                console.log("pre hook save executed");
                console.log(hash);
                self.password = hash;
                next();
            };
        });
    } else {
        next();
    };
});

mongoose.model("User", UserSchema);