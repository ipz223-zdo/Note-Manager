import React, { useState, useEffect } from 'react';
import '../styles/App.css';

/**
 * Компонент для додавання нової нотатки.
 * Містить форму для введення заголовка та вмісту нотатки.
 *
 * @component
 * @example
 * return (
 *   <AddNote onAddNote={handleAddNote} />
 * );
 *
 * @param {Function} onAddNote - Функція, яка викликається для додавання нової нотатки.
 * @returns {JSX.Element} Форма для додавання нотатки.
 */
const AddNoteForm = ({ addNote, title: initialTitle, content: initialContent }) => {
    const [title, setTitle] = useState(initialTitle || '');
    const [content, setContent] = useState(initialContent || '');

    useEffect(() => {
        setTitle(initialTitle);
        setContent(initialContent);
    }, [initialTitle, initialContent]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            addNote({ title, content });
            setTitle('');
            setContent('');
        } else {
            alert('Both title and content are required!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Note</h2>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Content:
                <br />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default AddNoteForm;
