// src/components/CookiePopup.jsx
/**
 * Компонент для відображення попапу cookie згідно з вимогами GDPR.
 * Відображає повідомлення з кнопкою для погодження на використання файлів cookie.
 *
 * @component
 * @example
 * return <CookiePopup />;
 */
import React from 'react';
import CookieConsent from 'react-cookie-consent';

/**
 * Компонент для відображення попапу cookie.
 *
 * @returns {JSX.Element} Рендер попапу для cookie.
 */
const CookiePopup = ({ customStyle, customButtonStyle }) => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Прийняти"
            cookieName="user-consent"
            style={customStyle || { background: "#2B373B", color: "#fff", fontSize: "14px" }}
            buttonStyle={customButtonStyle || {
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
