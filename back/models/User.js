const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Esquema para el usuario en la base de datos
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  telefono: { type: String },
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;