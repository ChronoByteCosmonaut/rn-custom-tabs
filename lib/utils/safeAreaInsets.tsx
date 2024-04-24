import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

export default function getInsets() {
  const insets: EdgeInsets = useSafeAreaInsets();

  return insets;
}
