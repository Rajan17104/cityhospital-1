import React from 'react';
import { customButtonCall, outlinedButton, primaryButton, secondaryButton } from './Button.style';

function Button({ children, type }) {
    console.log(type);
    const customButton = () => {
        switch (type) {
            case 'primary':
                return primaryButton;
            case 'secondary':
                return secondaryButton;
            case 'outlined':
                return outlinedButton;
            default:
                return primaryButton;
        }
    }

    const Btntype = customButton();
    return (
        <Btntype>
            {children}
        </Btntype>
    );
}

export default Button;