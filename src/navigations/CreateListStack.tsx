import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateListScreen from '../modules/createList/views/CreateListScreen';
import CreateListScreen1 from '../modules/createList/views/CreateListScreen1';
// import DetailsScreen from '../views/DetailsScreen';

const Stack = createStackNavigator();

const CreateListStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='CreateListScreen'
                component={CreateListScreen}
                options={({}) => ({
                    headerShown: true,
                    title: 'Crete List',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    // eslint-disable-next-line react/no-unstable-nested-components
                    // headerRight: () => (
                    //     <IonIcon
                    //         name={'add'}
                    //         size={24}
                    //         // eslint-disable-next-line react-native/no-inline-styles
                    //         style={{
                    //             marginRight: 10,
                    //         }}
                    //         onPress={() => navigation.navigate('DetailsScreen')}
                    //     />
                    // ),
                })}
            />
            <Stack.Screen
                name='CreateListScreen1'
                component={CreateListScreen1}
                options={({}) => ({
                    headerShown: true,
                    title: 'Crete List',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    // eslint-disable-next-line react/no-unstable-nested-components
                    // headerRight: () => (
                    //     <IonIcon
                    //         name={'add'}
                    //         size={24}
                    //         // eslint-disable-next-line react-native/no-inline-styles
                    //         style={{
                    //             marginRight: 10,
                    //         }}
                    //         onPress={() => navigation.navigate('DetailsScreen')}
                    //     />
                    // ),
                })}
            />
        </Stack.Navigator>
    );
};

export default CreateListStack;
