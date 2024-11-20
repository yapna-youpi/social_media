const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema(
    {
        pseudo: {
            type: String,
            require: true,
            minLength: 3,
            maxLength: 25,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            validate: [isEmail],
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            require: true,
            max: 1024,
            minLength: 6
        },
        picture: {
            type: String,
            default: "./uploads/profile/random-user.png"
        },
        bio:{
            type: String,
            max: 1024
        },
        followers: {
            type: [String]
        },
        following: {
            type: [String]
        },
        likes:{
            type: [String]
        }
    },
    {
        timestamps: true
    }
)

// play function before save db
userSchema.pre("save", async function(next) {
   const salt = await bcrypt.genSalt();
   this.password = await bcrypt.hash(this.password, salt);
   next();
} )

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;