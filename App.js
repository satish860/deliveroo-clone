import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResturantInfo from "./screens/ResturantInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ResturantInfo" component={ResturantInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
