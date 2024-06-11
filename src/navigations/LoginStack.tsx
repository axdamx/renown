import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import DetailsScreen from '../views/DetailsScreen';
import LoginScreen from '../views/LoginScreen';

const Stack = createStackNavigator();

const LoginStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={({}) => ({
                    title: 'Login',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    // eslint-disable-next-line react/no-unstable-nested-components
                    //   headerLeft: () => (
                    //     <IonIcon
                    //       name={'list-sharp'}
                    //       size={24}
                    //       // eslint-disable-next-line react-native/no-inline-styles
                    //       style={{marginLeft: 10}}
                    //       onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    //     />
                    //   ),
                })}
            />
        </Stack.Navigator>
    );
};

export default LoginStackScreen;
