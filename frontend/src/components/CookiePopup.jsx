// src/components/CookiePopup.jsx
import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookiePopup = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Прийняти"
            cookieName="user-consent"
            style={{ background: "#2B373B", color: "#fff", fontSize: "14px" }}
            buttonStyle={{
                color: "#4e503b",
                fontSize: "13px",
                background: "#f1d600",
                borderRadius: "5px",
                padding: "10px 15px"
            }}
            expires={1}
        >
            Цей вебсайт використовує файли cookie для покращення взаємодії з користувачем.
        </CookieConsent>
    );
};

export default CookiePopup;
