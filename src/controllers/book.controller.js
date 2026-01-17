import { Book } from "../models/book.models.js";
import { BookMapper } from "../mapper/book.mapper.js";
import { createBookRequestDTO, updateBookRequestDTO } from "../dto/book.dto.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    if (books.length === 0)
      return res.status(404).json({ message: "No books found" });
    res.status(200).json(BookMapper.toResponse(books));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBook = async (req, res) => {
  res.status(200).json(BookMapper.toResponse(req.book));
};

export const createBook = async (req, res) => {
  try {
    const bookData = createBookRequestDTO(req.body);
    const book = new Book(bookData);
    await book.save();
    res.status(201).json(BookMapper.toResponse(book));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    Object.assign(req.book, createBookRequestDTO(req.body));
    const updatedBook = await req.book.save();
    res.status(200).json(BookMapper.toResponse(updatedBook));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const patchBook = async (req, res) => {
  try {
    const updateData = updateBookRequestDTO(req.body);
    Object.assign(req.book, updateData);
    const updatedBook = await req.book.save();
    res.status(200).json(BookMapper.toResponse(updatedBook));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    await req.book.deleteOne();
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
