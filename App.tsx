import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from '@navigation';
import {useColorScheme} from 'react-native';
import {dark, light} from '@theme';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'jotai';

const App = () => {
  const theme = useColorScheme();
  const palette = theme === 'dark' ? dark : light;
  return (
    <Provider>
      <ThemeProvider
        theme={{
          colors: palette,
        }}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
