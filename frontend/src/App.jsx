/**
 * Основний компонент додатку для управління нотатками та відображення Cookie Popup.
 * Це головний компонент, що рендерить інші підкомпоненти.
 *
 * @component
 * @example
 * return (
 *   <App />
 * );
 */
import React, { useState, useEffect } from 'react';
import './styles/App.css';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import CookiePopup from './components/CookiePopup';

/**
 * Головна функція додатку. Включає в себе логіку для відображення Cookie Popup,
 * додавання нових нотаток та їх відображення.
 *
 * @returns {JSX.Element} Рендер основних компонентів додатку: CookiePopup, AddNote, NoteList.
 */
const App = () => {
    const [notes, setNotes] = useState([]);

    /**
     * Функція для додавання нової нотатки в масив нотаток.
     *
     * @param {Object} newNote - Об'єкт нотатки, що містить заголовок та вміст.
     */
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
            <CookiePopup />
            <AddNoteForm addNote={addNote} />
            <NotesList notes={notes} />
        </div>
    );
};

export default App;
