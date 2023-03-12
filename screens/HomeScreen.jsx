import { React, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import { ChevronDownIcon,UserIcon } from "react-native-heroicons/outline";

function HomeScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-6">
      <View className="flex-row space-x-2 pb-4 px-2">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />

        <View className="flex-1">
          <Text className="text-gray-400 font-bold text-xs">Deliver Now</Text>
          <View className="flex-row">
            <Text className="font-bold text-xl">Current Location</Text>
            <ChevronDownIcon className="w-20" color="#00CCBB" />
          </View>
        </View>
        <UserIcon className="w-35" color="#00CCBB"/>
      </View>
      
    </SafeAreaView>
  );
}

export default HomeScreen;

