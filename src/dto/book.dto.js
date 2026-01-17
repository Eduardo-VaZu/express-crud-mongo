// DTO para la respuesta (lo que el cliente recibe)
export class BookResponseDTO {
  constructor(book) {
    this.id = book._id;
    this.title = book.title;
    this.author = book.author;
    this.year = book.year;
    this.genre = book.genre;
    this.price = book.price;
    this.stock = book.stock;
    this.active = book.active;
    // Ocultamos __v y otros campos internos
  }
}

// DTO para la creación/actualización (lo que entra a la DB)
export const createBookRequestDTO = (body) => {
  return {
    title: body.title,
    author: body.author,
    year: body.year,
    genre: body.genre,
    price: body.price,
    stock: body.stock,
    active: body.active,
  };
};

export const updateBookRequestDTO = (body) => {
  const dto = {};
  const fields = [
    "title",
    "author",
    "year",
    "genre",
    "price",
    "stock",
    "active",
  ];
  fields.forEach((field) => {
    if (body[field] !== undefined) {
      dto[field] = body[field];
    }
  });
  return dto;
};
