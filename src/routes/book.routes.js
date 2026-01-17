import express from "express";
import { validateBook, getBookById } from "../middlewares/book.middlewares.js";
import * as BookController from "../controllers/book.controller.js";

export const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - year
 *         - genre
 *         - price
 *         - stock
 *       properties:
 *         id:
 *           type: string
 *           description: ID autogenerado de MongoDB
 *         title:
 *           type: string
 *           description: Título del libro
 *         author:
 *           type: string
 *           description: Autor del libro
 *         year:
 *           type: number
 *           description: Año de publicación
 *         genre:
 *           type: string
 *           description: Género literario
 *         price:
 *           type: number
 *           description: Precio del libro
 *         stock:
 *           type: number
 *           description: Cantidad en inventario
 *         active:
 *           type: boolean
 *           description: Estado del libro
 *       example:
 *         title: El Quijote
 *         author: Miguel de Cervantes
 *         year: 1605
 *         genre: Novela
 *         price: 15.50
 *         stock: 10
 *         active: true
 */

/**
 * @swagger
 * tags:
 *   - name: Books
 *     description: API para gestión de libros
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Retorna la lista de todos los libros
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Lista de libros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get("/books", BookController.getAllBooks);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Obtiene un libro por su ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Datos del libro
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Libro no encontrado
 */
router.get("/books/:id", getBookById, BookController.getBook);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Crea un nuevo libro
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Libro creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post("/books", validateBook, BookController.createBook);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Actualiza un libro completamente
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del libro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Libro actualizado
 *       404:
 *         description: Libro no encontrado
 */
router.put("/books/:id", getBookById, validateBook, BookController.updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   patch:
 *     summary: Actualiza campos específicos de un libro
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del libro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Libro actualizado
 *       404:
 *         description: Libro no encontrado
 */
router.patch("/books/:id", getBookById, BookController.patchBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Elimina un libro
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Libro eliminado
 *       404:
 *         description: Libro no encontrado
 */
router.delete("/books/:id", getBookById, BookController.deleteBook);
