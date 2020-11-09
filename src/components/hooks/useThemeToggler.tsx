import { useState, useEffect } from 'react';

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

  // const getJoke = async () => {
  //   setIsLoading(true);
  //   try {
  //     const res = await fetch(endpoint);
  //     const data = await res.json();
  //     const dataArr = data.joke.split('\n');
  //     setJoke(dataArr);
  //     if (error) setError('');
  //     setIsLoading(false);
  //   }
  //   catch (err) {
  //     setError(err.message);
  //     setIsLoading(false);
  //   }
  // }

  useEffect(() => {
    //getJoke();
  }, [])

  return [theme, toggleTheme]
}