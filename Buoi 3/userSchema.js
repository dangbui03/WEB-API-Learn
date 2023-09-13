const mongoose = require("mongoose")

// Định nghĩa schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
}); 
    const User = mongoose.model('User',userSchema); // Tạo model từ schema

module.exports = User