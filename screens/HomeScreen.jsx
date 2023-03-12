import { React, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function HomeScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.AndroidSafeArea} 
      className="bg-white pt-5">
      <View className="flex-row space-x-2 pb-4 px-2">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />

        <View className="flex-1">
          <Text className="text-gray-400 font-bold text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
