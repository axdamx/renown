/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import * as React from 'react';
import FeedStackScreens from './FeedStack';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { primaryColor, secondaryColor } from '../constants/colors';
import LikesStackScreens from './LikesStack';
import ExploreStackScreens from './ExploreStack';
import ProfileStackScreens from './ProfileStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Feed'
                component={FeedStackScreens}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: secondaryColor,
                    tabBarInactiveTintColor: primaryColor,
                    tabBarIcon: ({ focused }) => (
                        <IonIcon
                            name='home'
                            size={24}
                            color={focused ? secondaryColor : primaryColor}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Explore'
                component={ExploreStackScreens}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: secondaryColor,
                    tabBarInactiveTintColor: primaryColor,
                    tabBarIcon: ({ focused }) => (
                        <IonIcon
                            name='globe'
                            size={24}
                            color={focused ? secondaryColor : primaryColor}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Likes'
                component={LikesStackScreens}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: secondaryColor,
                    tabBarInactiveTintColor: primaryColor,
                    tabBarIcon: ({ focused }) => (
                        <IonIcon
                            name='heart-sharp'
                            size={24}
                            color={focused ? secondaryColor : primaryColor}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileStackScreens}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: secondaryColor,
                    tabBarInactiveTintColor: primaryColor,
                    tabBarIcon: ({ focused }) => (
                        <IonIcon
                            name='people-sharp'
                            size={24}
                            color={focused ? secondaryColor : primaryColor}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
