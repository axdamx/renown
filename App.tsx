import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import TabNavigator from './src/navigations/TabNavigator';

const queryClient = new QueryClient();

const App = () => {
  return (
    // <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    // </QueryClientProvider>
  );
};

export default App;
