import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from '@navigation';
import {useColorScheme} from 'react-native';
import {dark, light} from '@theme';
import {ThemeProvider} from 'styled-components';

const App = () => {
  const theme = useColorScheme();
  const palette = theme === 'dark' ? dark : light;
  return (
    <ThemeProvider theme={palette}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
