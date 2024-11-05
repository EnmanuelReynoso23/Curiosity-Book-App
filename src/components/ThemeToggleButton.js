import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useColorScheme } from 'react-native-appearance';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(useColorScheme());

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Image
        source={
          theme === 'dark'
            ? require('../../Assets/sun.png')
            : require('../../Assets/moon.png')
        }
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  );
};

export default ThemeToggleButton;
