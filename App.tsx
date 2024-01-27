import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from '@navigation';
import {useColorScheme} from 'react-native';
import {dark, light} from '@theme';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'jotai';
import Geolocation from '@react-native-community/geolocation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  const theme = useColorScheme();
  const palette = /*theme === 'dark' ? dark : */ light;
  useEffect(() => {
    Geolocation.setRNConfiguration({
      authorizationLevel: 'whenInUse',
      skipPermissionRequests: false,
    });
    Geolocation.requestAuthorization(
      () => {
        console.log('success');
      },
      error => {
        console.log(error);
      },
    );
  }, []);
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          theme={{
            colors: palette,
          }}>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
