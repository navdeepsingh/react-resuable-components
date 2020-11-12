import React, { useState } from 'react';

export const useThemeToggler = (): [
  string,
  () => void  
] => {
  const [theme, setTheme] = useState('dark');  

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('bright');      
    } else {
      setTheme('dark');
    }
  }

  return [theme, toggleTheme];
}