import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../Pages/Start";
import AppExplanation from "../Pages/AppExplanation";
import Home from "../Pages/Home";
import HabitPage from "../Pages/HabitPage";
const Stack = createNativeStackNavigator();

export default function AllPages() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Start"
          component={Start}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="AppExplanation"
          component={AppExplanation}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HabitPage"
          component={HabitPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
