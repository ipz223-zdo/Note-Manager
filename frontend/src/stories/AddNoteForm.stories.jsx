// src/stories/AddNoteForm.stories.jsx
import React from 'react';
import AddNoteForm from '../components/AddNoteForm';

export default {
    title: 'Example/AddNoteForm',
    component: AddNoteForm,
    argTypes: {
        title: { control: 'text' },
        content: { control: 'text' },
        addNote: { action: 'note added' }
    }
};

const Template = (args) => <AddNoteForm {...args} />;

// Варіація для стандартної форми
export const Default = Template.bind({});
Default.args = {
    addNote: (note) => console.log('Note added:', note),
    title: '',
    content: ''
};

// Варіація для випадку, коли користувач не заповнив форму
export const WithEmptyFields = Template.bind({});
WithEmptyFields.args = {
    addNote: (note) => console.log('Note added:', note),
    title: '',
    content: ''
};

// Варіація з попередньо заповненою формою
export const WithPreFilledData = Template.bind({});
WithPreFilledData.args = {
    addNote: (note) => console.log('Note added:', note),
    title: 'Sample Title',
    content: 'Sample Content'
};
