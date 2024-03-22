import { useState, useEffect } from 'react';

export default function CapchaVerify() {
    const [captcha, setCaptcha] = useState('');
    
    useEffect(() => {
        var a = Math.random() * 10;
        var b = Math.random() * 10;
        var c = Math.random() * 10;
        var d = Math.random() * 10;
        var e = Math.random() * 10;
        var f = Math.random() * 10;
        setCaptcha(`${Math.round(a)} ${Math.round(d)} ${Math.round(e)} ${Math.round(f)}`);
    }, []); // Added empty dependency array to useEffect

    return (
        { captcha } // Wrap captcha in curly braces
    );
}
