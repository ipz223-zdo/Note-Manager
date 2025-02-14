/**
 * Компонент для відображення списку нотаток.
 * Виводить усі наявні нотатки на сторінці.
 *
 * @component
 * @example
 * return (
 *   <NoteList notes={notes} />
 * );
 *
 * @param {Array<Object>} notes - Масив об'єктів нотаток, кожен з яких має `id`, `title`, та `content`.
 * @returns {JSX.Element} Список нотаток.
 */
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
