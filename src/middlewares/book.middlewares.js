import { Book } from "../models/book.models.js";

export const validateBook = (req, res, next) => {
  const requiredFields = [
    "title",
    "author",
    "year",
    "genre",
    "price",
    "stock",
    "active",
  ];
  const missingFields = requiredFields.some((field) => {
    const value = req.body[field];
    if (field === "active") {
      return value === undefined || value === null;
    }
    return value === undefined || value === null || value === "";
  });

  if (missingFields) {
    return res
      .status(400)
      .json({ message: "Missing required fields in request body" });
  }
  next();
};

export const getBookById = async (req, res, next) => {
  const { id } = req.params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    req.book = book;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
