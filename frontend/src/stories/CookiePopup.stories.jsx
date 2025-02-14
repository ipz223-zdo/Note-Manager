// src/stories/CookiePopup.stories.jsx
import React from 'react';
import CookiePopup from '../components/CookiePopup';

export default {
    title: 'Example/CookiePopup',
    component: CookiePopup,
};

const Template = (args) => <CookiePopup {...args} />;

// Варіація для стандартного попапу
export const DefaultPopup = Template.bind({});
DefaultPopup.args = {};

// Варіація з різними стилями для попапу
export const CustomStyledPopup = Template.bind({});
CustomStyledPopup.args = {
    customStyle: { background: "#333", color: "#fff", fontSize: "16px" },
    customButtonStyle: {
        color: "#fff",
        fontSize: "14px",
        background: "#1a73e8",
        borderRadius: "5px",
        padding: "12px 18px",
    },
};
