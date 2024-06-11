import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import DetailsScreen from '../views/DetailsScreen';
import FeedScreen from '../views/FeedScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import DetailsScreen from '../views/DetailsScreen';
import CreateListStack from './CreateListStack';

const Stack = createStackNavigator();

const FeedStackScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Feed'
                component={FeedScreen}
                options={({ navigation }) => ({
                    title: 'Feed',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    // headerShown: false,
                    // eslint-disable-next-line react/no-unstable-nested-components
                    headerRight: () => (
                        <IonIcon
                            name={'add'}
                            size={24}
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{
                                marginRight: 10,
                            }}
                            onPress={() =>
                                navigation.navigate('CreateListScreen')
                            }
                        />
                    ),
                })}
            />
            <Stack.Screen
                name='DetailsScreen'
                component={DetailsScreen}
                options={{
                    // presentation: 'modal',
                    headerStyle: {
                        // backgroundColor: 'gray',
                    },
                    // headerTransparent: true,
                    headerTintColor: 'black',
                    headerBackTitleVisible: false,
                    //   headerTransparent: true,
                    //   headerTitle: '',
                }}
            />
            <Stack.Screen
                name='CreateListScreen'
                component={CreateListStack}
                options={{
                    // presentation: 'modal',
                    headerStyle: {
                        // backgroundColor: 'gray',
                    },
                    // headerTransparent: true,
                    headerTintColor: 'black',
                    headerBackTitleVisible: false,

                    //   headerTransparent: true,
                    //   headerTitle: '',
                }}
            />
        </Stack.Navigator>
    );
};

export default FeedStackScreens;
