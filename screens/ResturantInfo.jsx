import { React, useEffect } from "react";
import { TouchableOpacity, Image, Text, View, ScrollView } from "react-native";
import {
  StarIcon,
  MapPinIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/solid";

function ResturantInfo({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const { imgurl, title, rating, genre,address } = route.params;

  return (
    <ScrollView>
      {/* Header Page */}
      <View className="relative">
        <Image
          source={{
            uri: imgurl,
          }}
          className="h-56 w-full bg-gray-300 p-4"
        ></Image>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-14 left-5 bg-gray-100 rounded-full p-2"
        >
          <ArrowLeftIcon size="20" color="#00CCDD"></ArrowLeftIcon>
        </TouchableOpacity>
      </View>
      {/* Resturant Header */}
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row items-center space-x-2">
            <View className="flex-row space-x-2 items-center">
              <StarIcon color="green" opacity="0.5" size="22"></StarIcon>
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="grey" opacity="0.4" size="22"></MapPinIcon>
              <Text className="text-xs text-gray-500">NearBy .{address}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ResturantInfo;
