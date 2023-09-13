const User = require('./userSchema')

// Get all users
function getAllUsers(req, res) {
    User.find().select('_id name age')
        .then((allUsers) => {
            return res.status(200).json({
                success: true,
                message: 'A list of all users',
                User: allUsers,
            });
            //res.render('userView', {users: allUsers})
        })
        .catch((err) => {
            return res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        });
    }
//module.exports = {getAllUsers} // xuất ra Danh sách các hàm
module.exports = getAllUsers // xuat ra 1 ham