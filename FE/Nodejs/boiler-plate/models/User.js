const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRouds = 10;
const jwt = require('jsonwebtoken');
const nodemon = require('nodemon');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        minlength: 5
    },
    role: {
        type: String,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function(next){
    var user = this;
    if(user.isModified('password')) {
        // 비밀번호 암호화
        bcrypt.genSalt(saltRouds, function (err, salt) {
            if(err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err),
            cb(null, isMatch)
    })
}

userSchema.methods.generateToken = async function(cb) {
    // 토큰 생성
    var user = this;
    var token = jwt.sign(user._id, 'secretToken');

    // user._id + 'sercretToken' = token

    user.token = token
    user.save(function(err, user) {
        if(err) return cb(err)
        cb(null, user)
    })
}

const User = mongoose.model('User', userSchema)

module.exports = { User }