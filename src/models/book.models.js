import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    year: Number,
    genre: String,
    price: Number,
    stock: Number,
    active: Boolean,
  },
  {
    timestamps: true,
  },
);

export const Book = mongoose.model("Book", bookSchema);
