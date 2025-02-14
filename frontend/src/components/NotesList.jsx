import React from 'react';

const NotesList = ({ notes }) => {
    return (
        <div>
            <h2>Notes</h2>
            {notes.length === 0 ? (
                <p>No notes available.</p>
            ) : (
                <ul>
                    {notes.map((note) => (
                        <li key={note.id}>
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotesList;
