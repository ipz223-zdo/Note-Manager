// src/stories/NotesList.stories.jsx
import React from 'react';
import NotesList from '../components/NotesList';

export default {
    title: 'Example/NotesList',
    component: NotesList,
    argTypes: {
        notes: { control: 'array' }
    }
};

const Template = (args) => <NotesList {...args} />;

// Варіація для списку нотаток, який порожній
export const EmptyList = Template.bind({});
EmptyList.args = {
    notes: []
};

// Варіація для списку з кількома нотатками
export const WithNotes = Template.bind({});
WithNotes.args = {
    notes: [
        { id: 1, title: 'First Note', content: 'This is the first note.' },
        { id: 2, title: 'Second Note', content: 'This is the second note.' }
    ]
};

export const SingleNote = Template.bind({});
SingleNote.args = {
    notes: [{ id: 1, title: 'Single Note', content: 'This is the only note.' }]
};
