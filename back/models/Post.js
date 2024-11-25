const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now, // Asignar la fecha actual por defecto
  },
    image: { type: String, required: true },
    likes: { type: Number, default: 0 }, // Campo para los "Me gusta"
    likedBy: { type: [String], default: [] } // Lista de IDs de usuarios que han dado "Me gusta"
  },
  { timestamps: true } // Asegúrate de que el modelo tenga timestamps para manejar createdAt y updatedAt
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;