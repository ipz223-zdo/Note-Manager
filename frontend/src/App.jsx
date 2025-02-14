import React, { useState, useEffect } from 'react';
import './styles/App.css';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';

const App = () => {
    const [notes, setNotes] = useState([]);

    // Завантажуємо нотатки з серверу
    useEffect(() => {
        fetch('http://localhost:5000/notes')
            .then((response) => response.json())
            .then((data) => setNotes(data))
            .catch((error) => console.error('Error fetching notes:', error));
    }, []);

    // Додаємо нову нотатку
    const addNote = (note) => {
        fetch('http://localhost:5000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
            .then((response) => response.json())
            .then((newNote) => setNotes((prevNotes) => [...prevNotes, newNote]))
            .catch((error) => console.error('Error adding note:', error));
    };

    return (
        <div>
            <h1>Notes App</h1>
            <AddNoteForm addNote={addNote} />
            <NotesList notes={notes} />
        </div>
    );
};

export default App;
