const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    
    const users = await User.find();
    res.json(users)
}

usersCtrl.createUsers = async (req, res) => {
    
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User created')
}

usersCtrl.getUser = async (req, res) => {
    
    const user = await User.findById(req.params.id);
    res.json(user)
}

usersCtrl.updateUser = async (req, res) => {
    
    const{username} = req.body;
    await User.findOneAndUpdate({_id: req.params.id},{
        username
    });
    res.json('User Update')
}

usersCtrl.deleteUser = async (req, res) => {
    
    await User.findByIdAndDelete(req.params.id)
    res.json('User Delete')
}

module.exports = usersCtrl;