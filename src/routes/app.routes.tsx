import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { Login } from "../screens/Login";
import { Home } from "../screens/Home";

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="login"
        component={Login}
        options={{
          headerShown: false
        }}
      />

      <Screen
        name="home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  );
}
