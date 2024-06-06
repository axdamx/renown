import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
// import DetailsScreen from '../views/DetailsScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeedScreen from '../views/FeedScreen';

const Stack = createStackNavigator();

const FeedStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={({navigation}) => ({
          title: 'Feed',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <IonIcon
              name={'list-sharp'}
              size={24}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{marginLeft: 10}}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default FeedStackScreens;
