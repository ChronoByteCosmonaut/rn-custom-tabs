import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
  MaterialTopTabScreenProps,
} from '@react-navigation/material-top-tabs';

import { RootStackParamList } from '.';
import { HeaderButton } from '../components/HeaderButton';
import { TabBarIcon } from '../components/TabBarIcon';
import One from '../screens/one';
import Two from '../screens/two';
import getInsets from 'lib/utils/safeAreaInsets';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

type Props = MaterialTopTabScreenProps<RootStackParamList, 'TabNavigator'>;

export const CustomTabBar = (props: MaterialTopTabBarProps) => {
  console.log('Props:', props.state);
  return <View></View>;
};

export default function TabLayout({ navigation }: Props) {
  const insets = getInsets();
  return (
    <Tab.Navigator
      style={{ paddingTop: insets.top }}
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="One"
        component={One}
        options={{
          title: 'Tab One',
        }}
      />
      <Tab.Screen
        name="Two"
        component={Two}
        options={{
          title: 'Tab Two',
        }}
      />
    </Tab.Navigator>
  );
}
