import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';

export default function getHeight() {
  const windowHeight: number = Dimensions.get('screen').height;
  const tabHeight: number = windowHeight * 0.048; // Change this percentage as needed
  const insets: EdgeInsets = useSafeAreaInsets();
  const tabBarHeight = tabHeight + insets.bottom;
  return tabBarHeight;
}
