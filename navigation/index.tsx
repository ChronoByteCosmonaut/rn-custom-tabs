import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './tab-navigator';
import Modal from '../screens/modal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  TabNavigator: undefined;
  Modal: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{ presentation: 'modal', headerLeft: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
