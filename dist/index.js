import { useState } from 'react';
export const useThemeToggler = () => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('bright');
        }
        else {
            setTheme('dark');
        }
    };
    return [theme, toggleTheme];
};
