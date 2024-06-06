/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import * as React from 'react';
import FeedStackScreens from './FeedStack';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Completed"
        component={FeedStackScreens}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: 'pink',
          tabBarIcon: ({focused}) => (
            <IonIcon
              name="shield-checkmark"
              size={24}
              color={focused ? 'yellow' : 'pink'}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Airing"
        component={AiringStackScreens}
        options={{
          headerShown: false,
          tabBarActiveTintColor: secondaryColor,
          tabBarInactiveTintColor: primaryColor,
          tabBarIcon: ({focused}) => (
            <IonIcon
              name="flame-sharp"
              size={24}
              color={focused ? secondaryColor : primaryColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingStackScreens}
        options={{
          headerShown: false,
          tabBarActiveTintColor: secondaryColor,
          tabBarInactiveTintColor: primaryColor,
          tabBarIcon: ({focused}) => (
            <IonIcon
              name="flash-sharp"
              size={24}
              color={focused ? secondaryColor : primaryColor}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
