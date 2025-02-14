import React, { useState } from 'react';

const AddNoteForm = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

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
                <br/>
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
