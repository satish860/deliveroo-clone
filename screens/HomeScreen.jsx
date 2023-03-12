import { React, useEffect } from "react";
import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import Categories from "./components/Categories";

function HomeScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-9">
      {/* Header */}
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
        <UserIcon className="w-35" color="#00CCBB" />
      </View>
      {/* Search bar */}
      <View className="flex-row Items-center space-x-2 pb-2 mx-4">
        <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon
            className="w-20"
            color="grey"
          ></MagnifyingGlassIcon>
          <TextInput
            placeholder="Resturants and Cusines!"
            keyboardType="default"
          ></TextInput>
        </View>
        <AdjustmentsVerticalIcon
          className="w-20"
          color="#00CCBB"
        ></AdjustmentsVerticalIcon>
      </View>
      <View>
         <Categories/>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
