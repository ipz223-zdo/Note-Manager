const express = require("express");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

// Отримати всі нотатки
app.get("/notes", (req, res) => {
    res.json(notes);
});

// Додати нову нотатку
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
