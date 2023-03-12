import { React, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import Categories from "./components/Categories";
import FeaturedRow from "./components/FeaturedRow";

function HomeScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-9 flex-1">
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
      <ScrollView>
        <View>
          <View>
            <Categories />
          </View>
          <View>
            <FeaturedRow
              title="Featured"
              description="Paid Placement from our partner"
            ></FeaturedRow>
            <FeaturedRow
              title="Tasty Discounts"
              description="Everyone been enjoying these juicy discounts"
            ></FeaturedRow>
            <FeaturedRow
              title="Offers near You!"
              description="Why not support your local resturant tonight!"
            ></FeaturedRow>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
