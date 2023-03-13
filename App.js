import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResturantInfo from "./screens/ResturantInfo";
import { store } from "./Store";
import { Provider } from "react-redux";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrder from "./screens/PreparingOrder";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ResturantInfo" component={ResturantInfo} />
          <Stack.Screen
            name="Delivery"
            options={{ presentation: "fullScreenModal", headerShown: false }}
            component={DeliveryScreen}
          />
          <Stack.Screen
            name="PreparingOrder"
            options={{ presentation: "fullScreenModal", headerShown: false }}
            component={PreparingOrder}
          />
          <Stack.Screen
            name="Basket"
            options={{ presentation: "modal", headerShown: false }}
            component={BasketScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
