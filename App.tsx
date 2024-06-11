import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TabNavigator from './src/navigations/TabNavigator';
import { useState } from 'react';
import AuthStack from './src/navigations/AuthStack';

const queryClient = new QueryClient();

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                {isAuthenticated ? <AuthStack /> : <TabNavigator />}
            </NavigationContainer>
        </QueryClientProvider>
    );
};

export default App;
