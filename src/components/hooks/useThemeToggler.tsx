import { useState, useEffect } from 'react';

export const useThemeToggler = (): [
  string,
  () => void
] => {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      // Dispatch Action
    } else {
      //
    }
  }

  useEffect(() => {
    //getJoke();
  }, [])

  return [theme, toggleTheme]
}