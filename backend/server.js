const express = require("express");
const cors = require("cors");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const swaggerSpec = require("./swagger/swaggerDefinition");

app.use(cors());
app.use(express.json());

// Підключення Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Читання нотаток з файлу
function loadNotes() {
    try {
        const data = fs.readFileSync("notes.json", "utf8");
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

// Запис нотаток у файл
function saveNotes(notes) {
    fs.writeFileSync("notes.json", JSON.stringify(notes), "utf8");
}

let notes = loadNotes();

/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Отримати всі нотатки
 *     description: Повертає список усіх нотаток.
 *     responses:
 *       200:
 *         description: Список нотаток
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 */
app.get("/notes", (req, res) => {
    res.json(notes);
});

/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Додати нову нотатку
 *     description: Додає нову нотатку в список.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Нова нотатка додана
 *       400:
 *         description: Title and content are required
 */
app.post("/notes", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    const newNote = { id: notes.length + 1, title, content };
    notes.push(newNote);
    saveNotes(notes);
    res.status(201).json(newNote);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
