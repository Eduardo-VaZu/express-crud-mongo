import { BookResponseDTO } from "../dto/book.dto.js";

export const BookMapper = {
  toResponse: (data) => {
    if (Array.isArray(data)) {
      return data.map((book) => new BookResponseDTO(book));
    }
    return new BookResponseDTO(data);
  },
};
