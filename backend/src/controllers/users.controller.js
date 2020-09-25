const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({message: []})

usersCtrl.createUsers = (req, res) => res.json({message: 'User Saved'});

usersCtrl.getUser = (req, res) => res.json({tittle: 'asjaskjass'})

usersCtrl.updateUser = (req, res) => res.json({message: 'User Updated'})

usersCtrl.deleteUser = (req, res) => res.json({message: 'User Deleted'})

module.exports = usersCtrl;